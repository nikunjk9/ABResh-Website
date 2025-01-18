'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import ServicesCarousel from './ServiceSlider';

// Pre-initialize reusable geometries and materials
const markerGeometry = new THREE.SphereGeometry(0.05, 32, 32);
const markerMaterial = new THREE.MeshBasicMaterial({ color: 0x00D6FF });
const rippleGeometry = new THREE.SphereGeometry(0.05, 32, 32);
const hoverGeometry = new THREE.SphereGeometry(0.2, 32, 32);
const hoverMaterial = new THREE.MeshBasicMaterial({ 
  transparent: true, 
  opacity: 0 
});

// Pre-define shader materials
const createRippleMaterial = () => new THREE.ShaderMaterial({
  uniforms: {
    time: { value: 0 },
    color: { value: new THREE.Color(0x00D6FF) },
    opacity: { value: 0.5 }
  },
  vertexShader: `
    uniform float time;
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      vec3 newPosition = position * (1.0 + sin(time * 3.0) * 0.5);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform vec3 color;
    uniform float opacity;
    varying vec3 vPosition;
    void main() {
      float pulse = sin(time * 3.0) * 0.5 + 0.5;
      float alpha = opacity * (1.0 - length(vPosition)) * pulse;
      gl_FragColor = vec4(color, alpha);
    }
  `,
  transparent: true,
  depthWrite: false
});

const ModelViewer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const markerRef = useRef<THREE.Mesh | null>(null);
  const hoverMeshRef = useRef<THREE.Mesh | null>(null);
  const rippleRef = useRef<THREE.Mesh | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const animationFrameRef = useRef<number>();
  
  const [isHovering, setIsHovering] = useState(false);
  const [markerScreenPosition, setMarkerScreenPosition] = useState({ x: 0, y: 0 });

  // Memoize scene setup functions
  const setupScene = useMemo(() => (mount: HTMLDivElement) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      mount.clientWidth / mount.clientHeight,
      0.9,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance' // Optimize for performance
    });
    
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    
    // Enable shadow mapping only if needed
    renderer.shadowMap.enabled = false;
    
    // Optimize renderer
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    mount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.03);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.1);
    directionalLight.position.set(-22, 44, -8);

    scene.add(ambientLight, directionalLight);
    camera.position.set(0, 1, 2);

    return { scene, camera, renderer };
  }, []);

  // Memoize marker creation function
  const createMarkerWithRipple = useMemo(() => (model: THREE.Group) => {
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    const ripple = new THREE.Mesh(rippleGeometry, createRippleMaterial());
    const hoverMesh = new THREE.Mesh(hoverGeometry, hoverMaterial);

    const radius = 1.12;
    const latitude = 28.6139;
    const longitude = 165.2090;

    const latRad = THREE.MathUtils.degToRad(latitude);
    const lonRad = THREE.MathUtils.degToRad(longitude);

    const x = radius * Math.cos(latRad) * Math.sin(lonRad);
    const y = radius * Math.sin(latRad);
    const z = radius * Math.cos(latRad) * Math.cos(lonRad);

    const position = new THREE.Vector3(x, y, z);
    marker.position.copy(position);
    ripple.position.copy(position);
    hoverMesh.position.copy(position);

    marker.scale.set(0.3, 0.3, 0.3);
    ripple.scale.set(1, 1, 1);
    hoverMesh.scale.set(1, 1, 1);

    model.add(marker, ripple, hoverMesh);

    return { marker, ripple, hoverMesh };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !mountRef.current) return;

    const mount = mountRef.current;
    const { scene, camera, renderer } = setupScene(mount);
    
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableZoom = false;

    // Optimize GLTF loader
    const loader = new GLTFLoader();
    loader.load(
      '/earth.glb',
      (gltf) => {
        const model = gltf.scene;
        
        // Optimize model
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.computeBoundingBox();
            child.geometry.computeBoundingSphere();
          }
        });

        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        model.rotation.y = Math.PI;
        model.position.set(0, 0, 0);

        scene.add(model);
        modelRef.current = model;

        const { marker, ripple, hoverMesh } = createMarkerWithRipple(model);
        markerRef.current = marker;
        rippleRef.current = ripple;
        hoverMeshRef.current = hoverMesh;

        // Optimize raycaster
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const tempVector = new THREE.Vector3();

        const onMouseMove = (event: MouseEvent) => {
          const rect = mount.getBoundingClientRect();
          mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
          mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObject(hoverMesh, true);

          if (intersects.length > 0) {
            setIsHovering(true);
            marker.getWorldPosition(tempVector);
            tempVector.project(camera);
            
            const halfWidth = rect.width / 2;
            const halfHeight = rect.height / 2;
            
            setMarkerScreenPosition({
              x: (tempVector.x * halfWidth) + halfWidth + rect.left,
              y: -(tempVector.y * halfHeight) + halfHeight + rect.top
            });
          } else {
            setIsHovering(false);
          }
        };

        mount.addEventListener('mousemove', onMouseMove);
        return () => mount.removeEventListener('mousemove', onMouseMove);
      },
      undefined,
      console.error
    );

    const clock = new THREE.Clock();
    
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.001;
      }

      if (rippleRef.current) {
        const rippleMaterial = rippleRef.current.material as THREE.ShaderMaterial;
        rippleMaterial.uniforms.time.value = clock.getElapsedTime();
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      
      const width = mount.clientWidth;
      const height = mount.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      renderer.dispose();
      controls.dispose();
      
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [setupScene, createMarkerWithRipple]);



  return (
    
    <section id="what-we-do"  className="bg-black text-white py-4 md:py-8">
      <div className="w-full bg-black/90 py-10 sm:py-4 px-4">
        <div className="container">
          {/* Section Heading */}
          <h2 className="text-center font-bold text-4xl sm:text-6xl tracking-tighter">
            Everything we do
          </h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center mt-5 text-base sm:text-lg text-white/70">
              We are passionate about delivering excellence in everything we do, creating an impact on our customers and the world.
            </p>
          </div>
          
          {/* Main Content Container */}
          <div className=" flex flex-col md:mt-8 lg:flex-row md:gap-4 lg:gap-2">
            {/* Slider/Content Container - Left on large screens, top on small screens */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              {/* Left: Slider Section */}
              <div className="w-[380px] lg:w-[850px] sm:w-[750px] h-[550px] mr-1 md:mr-2 lg:mr-0 ml-0 lg:ml-12 rounded-lg text-white flex flex-col">
                <ServicesCarousel />
              </div>
            </div>
            
            {/* Globe Container - Right on large screens, bottom on small screens */}
            <div className="w-full lg:w-1/2 lg:px-16 lg:pr-6
              flex justify-center items-center"
            >
              <div className="w-full relative
                h-[350px]  
                md:h-[500px]  
                lg:h-[550px]
                "
              >
                <div
                  ref={mountRef}
                  className="absolute inset-0 bg-black lg:px-8"
                />
                {isHovering && (
                  <div 
                    className="fixed bg-white/80 text-black p-3 rounded-lg shadow-lg text-sm"
                    style={{
                      top: `${markerScreenPosition.y}px`, 
                      left: `${markerScreenPosition.x}px`,
                      transform: 'translate(-50%, -50%)',
                      pointerEvents: 'none',
                      zIndex: 10
                    }}
                  >
                    <p className=" text-black">New Delhi, India</p>
                    
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelViewer;

  