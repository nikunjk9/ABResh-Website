'use client'

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, Music2, HeadphonesIcon, Music4, Mic2 } from 'lucide-react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  speed: number;
  icon: 'music' | 'headphones' | 'mic' | 'musicNote';
}

const ICONS = {
  music: Music2,
  headphones: HeadphonesIcon,
  mic: Mic2,
  musicNote: Music4
};

const FloatingElement: React.FC<{
  element: FloatingElement;
  containerHeight: number;
}> = ({ element, containerHeight }) => {
  const [position, setPosition] = useState({ x: element.x, y: element.y });
  const [rotation, setRotation] = useState(element.rotation);
  const Icon = ICONS[element.icon];

  return (
    <div
      className="absolute transition-opacity duration-300 hover:opacity-100"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg) scale(${element.scale})`,
        opacity: 0.3,
      }}
    >
      <Icon className="text-purple-400" size={24} />
    </div>
  );
};

const MusicServicesHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const newX = (e.clientX / window.innerWidth) * 15;
      const newY = (e.clientY / window.innerHeight) * 15;
      
      lastMousePos.current = { x: newX, y: newY };
    };

    const animate = () => {
      if (parallaxRef.current) {
        const currentX = parseFloat(parallaxRef.current.dataset.x || '0');
        const currentY = parseFloat(parallaxRef.current.dataset.y || '0');
        
        // Smooth interpolation
        const newX = currentX + (lastMousePos.current.x - currentX) * 0.1;
        const newY = currentY + (lastMousePos.current.y - currentY) * 0.1;
        
        parallaxRef.current.dataset.x = newX.toString();
        parallaxRef.current.dataset.y = newY.toString();
        
        parallaxRef.current.style.transform = 
          `scale(1.1) translate(${newX}px, ${newY}px)`;
      }
      
      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    frameRef.current = requestAnimationFrame(animate);

    // Initialize floating elements if needed
    if (containerRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      const containerWidth = containerRef.current.clientWidth;

      const musicIcons: FloatingElement['icon'][] = ['music', 'headphones', 'mic', 'musicNote'];
      const newElements: FloatingElement[] = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * containerWidth,
        y: Math.random() * containerHeight,
        scale: Math.random() * 0.5 + 0.5,
        rotation: Math.random() * 360,
        speed: Math.random() * 1 + 0.5,
        icon: musicIcons[Math.floor(Math.random() * musicIcons.length)]
      }));

      setElements(newElements);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleScrollClick = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Image with Parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0"
        data-x="0"
        data-y="0"
      >
        <Image
          src="/images/music4.jpg"
          alt="Music Studio Background"
          layout="fill"
          objectFit="cover"
          className={`transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-40 blur-0' : 'opacity-5 blur-sm'
          }`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center text-white">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <h1 className="mb-2 flex items-center justify-center gap-3 text-xl font-light tracking-wider text-purple-200">
              <HeadphonesIcon className="animate-pulse" size={24} />
              <span>Discover your sound with ABResh</span>
              <Music4 className="animate-pulse" size={24} />
            </h1>
          </div>

          <div className={`mt-6 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="animate-gradient bg-gradient-to-r from-purple-200 via-white to-purple-200 bg-clip-text bg-300% text-6xl md:text-[120px] font-bold tracking-tight text-transparent">
              Music Services
            </h2>
          </div>

          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-100/90 sm:text-xl">
              Explore the world of music with our premium services. Discover your rhythm and unleash your inner musician.
            </p>
          </div>

          <div className={`mt-10 flex justify-center gap-4 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-purple-400 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-purple-400 to-purple-600 transition-transform duration-300 group-hover:translate-x-0" />
            </button>

            <button className="rounded-full border border-purple-400/30 px-8 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-purple-400/10 hover:border-purple-400/50">
              View Pricing
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={handleScrollClick}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-purple-300/70 text-sm group-hover:text-purple-300 transition-colors duration-300">
            Explore More
          </span>
          <ChevronDown 
            className="text-purple-400/70 animate-bounce group-hover:text-purple-400 transition-colors duration-300" 
            size={32} 
          />
        </div>
      </div>

      <div ref={nextSectionRef} />

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: -200% center; }
        }
        
        .animate-gradient {
          animation: gradient 8s linear infinite;
        }
        
        .bg-300\% {
          background-size: 300% auto;
        }
      `}</style>
    </div>
  );
};

export default MusicServicesHero;