'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

import avatar1 from "@/assets/images/avatar-1.png";
import avatar2 from "@/assets/images/avatar-2.png";
import avatar3 from "@/assets/images/avatar-3.png";
import avatar4 from "@/assets/images/avatar-4.png";
import avatar5 from "@/assets/images/avatar-5.png";
import avatar6 from "@/assets/images/avatar-6.png";

const testimonials = [
    {
        text: "The services provided by abresh events are really good make me make profits in my business",
        name: "Nikunj Kumar",
        title: "Director @Google",
        avatarImg: avatar1,
    },
    {
        text: "The services provided by abresh events are really good make me make profits in my business",
        name: "Kushal Saxena",
        title: "Director @Microsoft",
        avatarImg: avatar2,
    },
    {
        text: "The services provided by abresh events are really good make me make profits in my business",
        name: "Vidhit Saxena",
        title: "Director @Apple",
        avatarImg: avatar3,
    },
    {
        text: "The services provided by abresh events are really good make me make profits in my business",
        name: "Somar",
        title: "Director @Tesla",
        avatarImg: avatar4,
    },
    {
        text: "The services provided by abresh events are really good make me make profits in my business",
        name: "Pratibha",
        title: "Director @Samsung",
        avatarImg: avatar5,
    },
    {
        text: "The services provided by abresh events are really good make me make profits in my business",
        name: "Siya",
        title: "Director @Meta",
        avatarImg: avatar6,
    },
];

export const Testimonials = () => {
    const [isPaused, setIsPaused] = useState(false);
    const [screenSize, setScreenSize] = useState({
        width: 1024,
        isMobile: false
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setScreenSize({
                width,
                isMobile: width < 768
            });
        };

        // Initial check after component mounts
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Create an infinite loop of testimonials
    const infiniteTestimonials = [...testimonials, ...testimonials];

    // Dynamic sizing and speed based on screen size
    const getCardWidth = () => {
        if (screenSize.width < 640) return 'w-64';
        if (screenSize.width < 1024) return 'w-72';
        return 'w-96';
    };

    const getScrollDuration = () => {
        if (screenSize.width < 640) return 15;
        if (screenSize.width < 1024) return 20;
        return 25;
    };

    return (
        <section className="py-16 md:py-20 bg-black">
            <div className="container mx-auto xl:px-20">
                <div className="text-center mb-4 md:mb-8">
                    <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold  mb-4 text-white">
                        Testimonials
                    </h2>
                    <p className="max-w-xl mx-auto text-base sm:text-xl md:text-lg text-gray-400 px-6">
                        Discover how our innovative events have transformed our clients business strategies.
                    </p>
                </div>

                <div 
                    className="overflow-hidden relative group"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Side gradient overlays */}
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                    <motion.div
                        animate={{
                            x: isPaused ? 0 : '-100%'
                        }}
                        transition={{
                            duration: getScrollDuration(),
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                        className="flex gap-6 w-[200%] py-4"
                    >
                        {infiniteTestimonials.map((testimonial, index) => (
                            <div 
                                key={`${testimonial.name}-${index}`}
                                className={`${getCardWidth()} flex-shrink-0 bg-gray-900/60 border border-white/10 rounded-2xl p-5 md:p-6 
                                    transition-all duration-500 
                                    hover:scale-[1.08] 
                                    bg-gradient-to-br from-transparent to-purple-900/10 `}
                            >
                                <div className="mb-4 text-white/90 text-sm md:text-lg">
                                    &quot;{testimonial.text}&quot;
                                </div>
                                <div className="flex items-center mt-4 md:mt-6">
                                    <div className="relative w-10 h-10 md:w-12 md:h-12 mr-3 md:mr-4">
                                        <Image 
                                            src={testimonial.avatarImg} 
                                            alt={`${testimonial.name} avatar`}
                                            className="rounded-full object-cover"
                                            fill
                                        />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm md:text-base">{testimonial.name}</div>
                                        <div className="text-white/50 text-xs md:text-sm">{testimonial.title}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};