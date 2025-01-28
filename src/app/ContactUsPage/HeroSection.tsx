'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Mail, MessageCircle, Phone, Send, Headphones, Building2, ContactIcon, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>();
  const parallaxRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  // Enhanced floating icons data with larger movement range
  const floatingIcons = useMemo(() => [
    { Icon: Mail, initialX: '20%', initialY: '30%', delay: '0s', scale: 1.2 },
    { Icon: Phone, initialX: '80%', initialY: '40%', delay: '1.5s', scale: 0.8 },
    { Icon: MessageCircle, initialX: '70%', initialY: '70%', delay: '2.8s', scale: 1.4 },
    { Icon: Send, initialX: '25%', initialY: '70%', delay: '3.2s', scale: 1 },
    { Icon: Headphones, initialX: '50%', initialY: '10%', delay: '4.5s', scale: 1.1 }
  ], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(true), 100);

    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const newX = (e.clientX / window.innerWidth) * 15;
          const newY = (e.clientY / window.innerHeight) * 15;
          
          lastMousePos.current = { x: newX, y: newY };
          ticking = false;
        });
        ticking = true;
      }
    };

    const animate = () => {
      if (parallaxRef.current) {
        const currentX = parseFloat(parallaxRef.current.dataset.x || '0');
        const currentY = parseFloat(parallaxRef.current.dataset.y || '0');
        
        const newX = currentX + (lastMousePos.current.x - currentX) * 0.1;
        const newY = currentY + (lastMousePos.current.y - currentY) * 0.1;
        
        if (Math.abs(newX - currentX) > 0.01 || Math.abs(newY - currentY) > 0.01) {
          parallaxRef.current.dataset.x = newX.toString();
          parallaxRef.current.dataset.y = newY.toString();
          parallaxRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
        }
      }
      
      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleScroll = () => {
    const nextSection = document.getElementById('contact-form');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-black  to-black">
      {/* Background with optimized loading */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-[url('/images/Contact-Us.jpg')] bg-cover bg-center bg-no-repeat opacity-30 transition-opacity duration-700 hover:opacity-40"
        data-x="0"
        data-y="0"
      />

      {/* Updated Gradient Overlays for enhanced immersive effect */}
      <div className="absolute inset-0">
      <div className="absolute -bottom-3 inset-0 bg-radial-gradient from-transparent via-black/0 to-black/80" />
        <div className="absolute -bottom-3 inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80" />
        <div className="absolute -bottom-3 inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80" />
      </div>

      {/* Enhanced floating icons with improved animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, initialX, initialY, delay, scale }, index) => (
          <div
            key={index}
            className="absolute w-8 h-8 text-purple-400/40 will-change-transform hover:text-purple-400/60 transition-colors duration-300"
            style={{
              left: initialX,
              top: initialY,
              animation: `float-${index} 12s infinite ${delay}`,
              transform: `scale(${scale})`,
            }}
          >
            <Icon className="w-full h-full animate-pulse" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div 
          className={`transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className="text-lg font-normal text-white tracking-wide sm:text-lg lg:text-[22px]">
            Get in Touch with ABResh Events 
            <MessageCircle 
              className="inline-block animate-pulse text-purple-400" size={16} 
            />
          </h1>
          <h1 className="text-4xl mt-2 md:mt-4 sm:text-6xl lg:text-7xl font-extrabold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-[65px] md:text-[120px] font-bold tracking-tighter text-center leading-none text-transparent sm:pb-4">
              Contact Us

              <span className="ml-2 sm:ml-4 inline-block animate-bounce">
                
              </span>
            </span>
          </h1>
        </div>

        <div className={`mt-1 md:mt-0 transform transition-all duration-700 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="py-2 md:py-4 text-[15px] lg:max-w-3xl md:text-xl px-3 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <Building2 className="mr-1 md:mr-2 inline-block animate-pulse text-purple-400" size={20} />
              Ready to bring your event to life? Our team is here to turn your vision into reality.
              Connect with us and let&apos;s create something extraordinary together.
            <ContactIcon className=" ml-1 md:ml-2 inline-block animate-pulse text-purple-400" size={20} />
          </p>
        </div>

        {/* Enhanced CTA Buttons with improved hover effects */}
        <div 
          className={`mt-8 md:mt-12 flex justify-center gap-2 md:gap-4 transform transition-all duration-700 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <button 
            onClick={handleExploreClick}
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-700 via-purple-500 to-purple-800 px-6 py-3 md:px-8 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 hover:from-purple-600 hover:via-purple-400 hover:to-purple-700"
          >
            <span className="relative z-10">
              Get Started
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-purple-600/50 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
          </button>
          
          <button className="rounded-full px-6 py-3 md:px-8 font-semibold text-white border border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/20">
            Learn More
          </button>
        </div>

        <div className="absolute -bottom-36 md:-bottom-44 left-1/2 -translate-x-1/2 cursor-pointer group z-20">
          <div className="flex flex-col items-center gap-1 sm:gap-4">
              <span className="text-purple-300/70 text-xs group-hover:text-purple-300 transition-colors duration-300">
                Scroll to explore
              </span>
              <ChevronDown 
              onClick={handleScroll}
              className="text-purple-400/70 animate-bounce group-hover:text-purple-400 transition-colors duration-300" size={24} />
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.8) 100%);
        }
        
        @keyframes float-0 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1.2); }
          25% { transform: translate(30px, -30px) rotate(8deg) scale(1.2); }
          50% { transform: translate(-20px, 40px) rotate(-8deg) scale(1.2); }
          75% { transform: translate(-40px, -20px) rotate(8deg) scale(1.2); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(0.8); }
          25% { transform: translate(-40px, -20px) rotate(-5deg) scale(0.8); }
          50% { transform: translate(30px, 30px) rotate(5deg) scale(0.8); }
          75% { transform: translate(20px, -40px) rotate(-5deg) scale(0.8); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1.4); }
          25% { transform: translate(40px, -40px) rotate(10deg) scale(1.4); }
          50% { transform: translate(-30px, 30px) rotate(-10deg) scale(1.4); }
          75% { transform: translate(-20px, -30px) rotate(10deg) scale(1.4); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(-30px, -40px) rotate(-8deg) scale(1); }
          50% { transform: translate(40px, 20px) rotate(8deg) scale(1); }
          75% { transform: translate(30px, -30px) rotate(-8deg) scale(1); }
        }
        
        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1.1); }
          25% { transform: translate(40px, -20px) rotate(5deg) scale(1.1); }
          50% { transform: translate(-40px, 40px) rotate(-5deg) scale(1.1); }
          75% { transform: translate(-30px, -40px) rotate(5deg) scale(1.1); }
        }
      `}</style>

      <div id="contact-form" />
    </section>
  );
};

export default HeroSection;