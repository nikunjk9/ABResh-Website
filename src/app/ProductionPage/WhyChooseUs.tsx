'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Music, Users, Award, Clock } from 'lucide-react';

const WhyChooseUs = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const features = [
        {
            title: 'Professional Studios',
            description: 'State-of-the-art recording facilities equipped with industry-leading technology and acoustic design for pristine sound quality.',
            icon: <Music className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />,
            image: '/images/Production5.jpg',
            delay: 'delay-100'
        },
        {
            title: 'Expert Production Team',
            description: 'Our seasoned producers and engineers bring years of experience across multiple genres to help perfect your sound.',
            icon: <Users className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />,
            image: '/images/Production9.jpg',
            delay: 'delay-200'
        },
        {
            title: 'Award-Winning Quality',
            description: 'Recognized for delivering exceptional audio production that meets the highest industry standards and creative vision.',
            icon: <Award className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />,
            image: '/images/Production.jpg',
            delay: 'delay-300'
        },
        {
            title: 'Rapid Turnaround',
            description: 'Efficient workflow and dedicated support ensure your project stays on schedule without compromising quality.',
            icon: <Clock className="w-10 h-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />,
            image: '/images/Production2.jpg',
            delay: 'delay-400'
        },
    ];

    return (
        <section className="relative bg-black text-white py-24 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-black" />
            
            {/* Content */}
            <div className="relative max-w-7xl mx-auto text-center px-4">
                {/* Title Section */}
                <div className={`transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent tracking-tight">
                            Why Choose Us?
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base  md:text-lg mb-8 md:mb-16 max-w-3xl mx-auto px-3 md:px-0">
                        Experience the perfect blend of cutting-edge technology and creative expertise
                        to bring your musical vision to life.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 md:px-0">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`group transform transition-all duration-700 ${feature.delay} ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                        >
                            <div className="relative h-[400px] bg-gradient-to-b from-[#272727] to-[#1a1a1a] rounded-2xl shadow-lg 
                                border border-purple-500/20 overflow-hidden group transition-all duration-500
                                hover:border-purple-500/40 hover:shadow-purple-500/20">
                                
                                {/* Content Container */}
                                <div className="relative z-20 h-full flex flex-col items-center text-center transition-all duration-500 
                                    group-hover:opacity-0 px-6 pt-12 pb-8">
                                    {/* Icon - Centered at top with more space */}
                                    <div className="mb-8 p-3 bg-white/10 rounded-full">
                                        {feature.icon}
                                    </div>

                                    {/* Title - Larger text */}
                                    <h3 className="text-xl font-bold text-white mb-6 tracking-tight text-center leading-none">
                                        {feature.title}
                                    </h3>

                                    {/* Description - Full width and justified */}
                                    <p className="text-gray-400 text-[17px] leading-relaxed mx-auto">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Image Container */}
                                <div className="absolute inset-0 z-10 transition-all duration-500
                                    opacity-0 group-hover:opacity-100">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-500 transform scale-105 group-hover:scale-100"
                                    />
                                    {/* Gradient Overlay for Image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/50 to-transparent" />
                                </div>

                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-500 pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;