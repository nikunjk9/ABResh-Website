'use client'

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, Music2, Film, Mic2, Radio } from 'lucide-react';
import productionHero from '@/assets/images/Production4.jpg';

const HeroSection: React.FC = () => {
    // ... (keeping all the existing state and effects code)
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
            
            lastMousePos.current = { x: newX, y: newY };
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
        
        setTimeout(() => setIsLoaded(true), 500);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    const handleScrollClick = () => {
        if (nextSectionRef.current) {
            nextSectionRef.current.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background with Parallax */}
            <div
                ref={parallaxRef}
                className="absolute inset-0"
                data-x="0"
                data-y="0"
            >
                <Image
                    src={productionHero}
                    alt="Production Services Background"
                    layout="fill"
                    objectFit="cover"
                    className={`transition-all duration-700 ease-out ${
                        isLoaded ? 'opacity-40 blur-0' : 'opacity-5 blur-sm'
                    }`}
                    priority
                />
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />

            {/* Main Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-4">
                <div className="text-center text-white">
                    {/* Welcome Text */}
                    <div 
                        className={`transform transition-all duration-1000 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                    >
                        <h1 className="text-lg font-normal tracking-wide sm:text-xl lg:text-2xl">
                            Welcome to ABResh Production <Film className="inline-block animate-pulse" size={20} />
                        </h1>
                    </div>

                    {/* Main Title */}
                    <div 
                        className={`mt-4 transform transition-all duration-1000 delay-300 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                    >
                        <h2 className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-[63px] md:text-[120px] font-bold tracking-tighter text-center leading-none text-transparent pb-2">
                            Production Services
                            <span className="ml-4 inline-block animate-bounce">
                                <Music2 className="inline-block text-purple-400" size={48} />
                            </span>
                        </h2>
                    </div>

                    {/* Description */}
                    <div 
                        className={`transform transition-all duration-1000 delay-500 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                    >
                        <p className="mx-auto max-w-2xl text-[15px] leading-relaxed text-purple-100/90 py-4 sm:text-lg lg:max-w-3xl lg:text-xl px-3">
                            <Mic2 className="mr-1 md:mr-2 inline-block animate-pulse text-purple-400" size={20} />
                                At ABResh Production, we specialize in delivering high-quality music and audio production services that bring your creative vision to life.
                            <Radio className="ml-2 inline-block animate-pulse text-purple-400" size={20} />
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div 
                        className={`mt-8 flex justify-center gap-2 md:gap-4 transform transition-all duration-1000 delay-700 ${
                            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                    >
                        <button 
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

            {/* Scroll Indicator */}
            <div 
                onClick={handleScrollClick}
                className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group z-20"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-purple-300/70 text-sm group-hover:text-purple-300 transition-colors duration-300">
                        Scroll to explore
                    </span>
                    <ChevronDown 
                        className="text-purple-400/70 animate-bounce group-hover:text-purple-400 transition-colors duration-300" 
                        size={32} 
                    />
                </div>
            </div>

            <div ref={nextSectionRef} />
        </div>
    );
};

export default HeroSection;