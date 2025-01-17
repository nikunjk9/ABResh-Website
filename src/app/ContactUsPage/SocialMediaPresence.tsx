import React from 'react';
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const SocialMediaPresence = () => {
    const socialMediaLinks = [
        {
            icon: <Facebook className="w-6 h-6" />,
            name: "Abresh events",
            platform: "Facebook",
            link: "https://www.facebook.com/abreshevents/",
            stats: "50K+ Followers",
            bgColor: "bg-blue-900/40",
            iconColor: "text-blue-400",
            hoverColor: "hover:bg-blue-800/70"
        },
        {
            icon: <Instagram className="w-6 h-6" />,
            name: "@Abreshevents",
            platform: "Instagram",
            link: "https://www.instagram.com/abresh_events/",
            stats: "35K+ Followers",
            bgColor: "bg-gradient-to-r from-purple-900/40 to-pink-900/40",
            iconColor: "text-pink-400",
            hoverColor: "hover:from-purple-800/70 hover:to-pink-800/70"
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            name: "Abresh events",
            platform: "LinkedIn",
            link: "https://www.linkedin.com/company/abresh-events/",
            stats: "20K+ Connections",
            bgColor: "bg-blue-900/40",
            iconColor: "text-blue-400",
            hoverColor: "hover:bg-blue-800/70"
        },
        {
            icon: <Youtube className="w-6 h-6" />,
            name: "Abresh events",
            platform: "YouTube",
            link: "https://www.youtube.com/@ABReshEvents",
            stats: "15K+ Subscribers",
            bgColor: "bg-red-900/40",
            iconColor: "text-red-400",
            hoverColor: "hover:bg-red-800/70"
        }
    ];

    return (
        <section className="relative py-12 overflow-hidden bg-black mb-16 px-2 md:px-0">
            <div className="max-w-7xl mx-auto px-4">
                {/* Content Container */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    {/* Left Images */}
                    <motion.div 
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 via-fuchsia-900/30 to-transparent z-10 
                                           transition-all duration-500" />
                            <Image
                                src="/images/photo4.jpg"
                                alt="Customer Support"
                                fill
                                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div 
                        className="w-full lg:w-1/2 text-white"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Section Title */}
                        <div className="mb-8 md:mb-12 text-center lg:text-left">
                            <motion.h2 
                                className="text-4xl lg:text-5xl font-bold mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                                    Follow Us On Social Media
                                </span>
                            </motion.h2>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg px-4">
                                Stay connected with us and never miss an update about our latest events and latest projects and services.
                            </p>
                        </div>

                        {/* Social Media Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {socialMediaLinks.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group relative overflow-hidden rounded-xl ${item.bgColor} ${item.hoverColor} 
                                              transition-all duration-300 p-4 backdrop-blur-sm
                                              border border-gray-700/50`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="flex flex-col">
                                        <div className={`${item.iconColor} mb-3`}>
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-1">
                                            {item.platform}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            {item.stats}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <div className="mt-8 md:mt-12 text-center lg:text-left">
                            <motion.p 
                                className="text-gray-400"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                Join our community of over <span className="text-purple-400 font-semibold">100,000+</span> followers
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialMediaPresence;