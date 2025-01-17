'use client'

import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Star, PartyPopper, Music, ChevronDown } from 'lucide-react';


const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>();
  const nextSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      const newX = (e.clientX / window.innerWidth) * 15;
      const newY = (e.clientY / window.innerHeight) * 15;
      
      lastMousePos.current = {
        x: newX,
        y: newY
      };
    };

    const animate = () => {
      if (parallaxRef.current) {
        const currentX = parseFloat(parallaxRef.current.dataset.x || '0');
        const currentY = parseFloat(parallaxRef.current.dataset.y || '0');
        
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

    // Simulate image loading
    const timer = setTimeout(() => setIsLoaded(true), 500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      clearTimeout(timer);
    };
  }, []);



  const handleExploreClick = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <div
        ref={parallaxRef}
        className={`absolute inset-0 bg-[url('/images/bg1.jpg')] bg-opacity-5 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out
          ${isLoaded ? 'opacity-40 blur-0' : 'opacity-5 blur-sm'}`}
        data-x="0"
        data-y="0"
      />

      {/* Main Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="text-center text-white">
          {/* Welcome Text */}
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <h1 className="text-lg font-normal tracking-wider sm:text-xl lg:text-2xl">
              Welcome to ABResh Events ✨
            </h1>
          </div>

          {/* Main Title */}
          <div 
            className={`mt-4 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-7xl md:text-[120px] font-bold tracking-tighter text-center leading-none text-transparent">
              Events Services
              <span className="ml-4 inline-block animate-bounce">
                <PartyPopper className="inline-block text-purple-400" size={48} />
              </span>
            </h2>
          </div>

          {/* Description */}
          <div 
            className={`mt-2 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-purple-100/90  py-4 sm:text-lg lg:max-w-3xl lg:text-xl px-3">
              <Music className="mr-1 md:mr-2 inline-block animate-pulse text-purple-400" size={20} />
              We bring your events to life with creativity and magic. Whether you&apos;re hosting an electrifying live concert
              or an engaging competition, our expertise ensures a seamless and memorable experience.
              <Music className="ml-1 md:mr-2 inline-block animate-pulse text-purple-400" size={20} />
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            className={`mt-8 flex justify-center gap-2 md:gap-4 transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <button 
              onClick={handleExploreClick}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-700 via-purple-500 to-purple-800 px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-purple-800 via-purple-600 to-purple-700 transition-transform duration-300 group-hover:translate-x-0" />
            </button>
            
            <button 
              className="rounded-full px-8 py-3 font-semibold text-white border border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group">
        <div className="flex flex-col items-center gap-2">
          <span className="text-purple-300/70 text-sm group-hover:text-purple-300 transition-colors duration-300">
            Scroll to explore
          </span>
          <ChevronDown className="text-purple-400/70 animate-bounce group-hover:text-purple-400 transition-colors duration-300" size={32} />
        </div>
      </div>
   

      <div ref={nextSectionRef}></div>
    </div>
  );
};

export default HeroSection;