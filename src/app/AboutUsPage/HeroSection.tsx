'use client'

import React, { useEffect, useState, useRef } from 'react';
import { Users, Building, ChevronDown, Heart, Award, Globe2, MapPin } from 'lucide-react';

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
    <div className="relative min-h-[100svh] w-full overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <div
        ref={parallaxRef}
        className={`absolute inset-0 bg-[url('/images/AboutUs.jpg')] bg-opacity-5 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out
          ${isLoaded ? 'opacity-40 blur-0' : 'opacity-5 blur-sm'}`}
        data-x="0"
        data-y="0"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-4 py-16">
        <div className="text-center text-white">
          {/* Welcome Text */}
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <h1 className="text-lg font-normal tracking-wider sm:text-lg lg:text-2xl">
              Our Story at ABResh Events <Heart className="inline-block animate-pulse text-purple-400" size={16} />
            </h1>
          </div>

          {/* Main Title */}
          <div 
            className={`mt-2 sm:mt-4 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-7xl md:text-[120px] font-bold tracking-tighter text-center leading-none text-transparent  pb-2 sm:pb-1">
              About Us
              <span className="ml-2 sm:ml-4 inline-block animate-bounce">
                <Building className="inline-block text-purple-400" size={32} />
              </span>
            </h2>
          </div>

          {/* Description */}
          <div 
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <p className="mx-auto max-w-2xl text-[15px] sm:text-base leading-relaxed text-purple-100/90 py-2 sm:py-4 lg:max-w-3xl lg:text-xl px-3">
              <Users className="mr-1 md:mr-2 inline-block animate-pulse text-purple-400" size={20} />
              Creating unforgettable experiences and bringing visions to life through innovative event planning and execution.
              <Award className="mr-1 md:mr-2 inline-block animate-pulse text-purple-400" size={20} />
            </p>
          </div>

          {/* Stats Grid */}
          <div 
            className={`mt-8 sm:mt-10 grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-8 transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {[
              { icon: Users, label: 'Happy Clients', value: '500+' },
              { icon: Globe2, label: 'Events Worldwide', value: '1000+' },
              { icon: MapPin, label: 'Work Locations', value: '15+' }
            ].map((stat, index) => (
              <div key={index} className="relative group ">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-600/10 to-transparent rounded-xl blur-xl group-hover:opacity-100 opacity-0 transition-all duration-500 " />
                <div className="relative overflow-hidden p-4 sm:p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500 group hover:transform hover:scale-105 hover:bg-purple-500/5">
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                  
                  <stat.icon className="w-5 h-5 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-2 sm:mb-4 group-hover:scale-110 group-hover:text-purple-300 transition-all duration-300" />
                  <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-br from-white to-purple-200 text-transparent bg-clip-text group-hover:from-white group-hover:to-purple-300 transition-all duration-300">
                    {stat.value}
                  </h2>
                  <p className="text-gray-300 text-xs sm:text-base lg:text-lg group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer group z-20">
        <div className="flex flex-col items-center gap-1 sm:gap-2">
            <span className="text-purple-300/70 text-xs sm:text-sm group-hover:text-purple-300 transition-colors duration-300">
              Scroll to explore
            </span>
            <ChevronDown 
            onClick={handleExploreClick}
            className="text-purple-400/70 animate-bounce group-hover:text-purple-400 transition-colors duration-300" size={24} />
        </div>
      </div>

      <div ref={nextSectionRef}></div>
    </div>
  );
};

export default HeroSection;