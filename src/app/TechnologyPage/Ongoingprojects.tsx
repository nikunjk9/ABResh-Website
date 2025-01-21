'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from 'next/image';
import project1 from "@/assets/images/aisf.png";
import project3 from "@/assets/images/Home.png";
import project4 from "@/assets/images/ugm.png";
import { X, ExternalLink } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    image: StaticImageData;
}

interface ImagePopupProps {
    project: Project;
    onClose: () => void;
}

interface ScreenSize {
    width: number;
    isMobile: boolean;
}

const Projects: Project[] = [
    {
        title: "All India Sports Foundation Website",
        description: "A comprehensive platform for sports enthusiasts featuring event management, athlete, coaches and refree registration, and real-time tournament updates.",
        technologies: ["Next.js", "React", "Typescript", "Tailwind CSS", "MongoDB"],
        image: project1
    },
    {
        title: "Abresh Events Website",
        description: "The Abresh Events website is a seamless blend of innovation and functionality, designed to showcase our expertise in technology and event management.",
        technologies: ["Next.js", "React", "Typescript", "Tailwind CSS", "Framer-Motion", "Swiper.js", "MongoDB"],
        image: project3
    },
    {
        title: "Used Garment Clothing Website",
        description: "The UGC website is a dedicated sustainable fashion marketplace designed to connect sellers and buyers of pre-loved clothing. Our platform empowers individuals to make eco-conscious choices by giving a second life to quality garments, reducing waste, and promoting sustainability in the fashion industry.",
        technologies: ["Next.js", "React", "Typescript", "Tailwind CSS", "MongoDB", "Node.js", "Firebase"],
        image: project4
    },
];

const ImagePopup: React.FC<ImagePopupProps> = ({ project, onClose }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
    >
        <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative max-w-7xl w-full h-[90vh] mx-4 flex bg-gray-900/80 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
        >
            {/* Left side: Project details */}
            <div className="w-1/2 h-full bg-gradient-to-b from-gray-900 to-gray-800/95 p-4 md:p-8">
                <div className="space-y-6">
                    <div>
                        <h4 className="text-purple-400 text-sm font-medium mb-3">PROJECT NAME</h4>
                        <h3 className="text-2xl md:text-6xl font-bold text-white">{project.title}</h3>
                    </div>

                    <div>
                        <h4 className="text-purple-400 text-sm font-medium mb-3">DESCRIPTION</h4>
                        <p className="text-gray-300 text-xs md:text-lg ">{project.description}</p>
                    </div>

                    <div>
                        <h4 className="text-purple-400 text-sm font-medium mb-4">TECHNOLOGIES USED</h4>
                        <div className="flex flex-wrap gap-2 ">
                            {project.technologies.map((tech: string, index: number) => (
                                <span
                                    key={index}
                                    className="px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Right side: Image */}
            <div className="relative w-1/2 overflow-y-auto">
                <Image
                    src={project.image.src}
                    alt={project.title}
                    width={1000}
                    height={1000}
                    className="w-full object-cover"
                />
                <button
                    onClick={onClose}
                    className="fixed top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>
        </motion.div>
    </motion.div>
);

export const OngoingProject: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [screenSize, setScreenSize] = useState<ScreenSize>({
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

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Create a longer list by repeating projects multiple times
    const infiniteProjects = [...Projects, ...Projects, ...Projects, ...Projects, ...Projects];

    const getCardWidth = () => {
        if (screenSize.width < 640) return 'w-72';
        if (screenSize.width < 1024) return 'w-80';
        return 'w-96';
    };

    return (
        <>
            <AnimatePresence>
                {selectedProject && (
                    <ImagePopup
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>

            <section className="py-7 mt-9 bg-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-1">
                        <h2 className="text-4xl md:text-6xl tracking-tight font-bold text-white mb-6">
                            Ongoing Projects
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base md:text-lg px-4 mx-auto max-w-3xl">
                            Exploring the intersection of technology and creativity through our ongoing projects. 
                            Each project represents our commitment to excellence and innovation.
                        </p>
                    </div>

                    <div className="overflow-hidden relative">
                        <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                        <motion.div
                            animate={{
                                x: "0"
                            }}
                            transition={{
                                duration: 20,
                                ease: "linear",
                                repeat: Infinity,
                                repeatType: "loop"
                            }}
                            className="flex gap-6 py-10"
                        >
                            {infiniteProjects.map((project, index) => (
                                <motion.div
                                    key={`${project.title}-${index}`}
                                    className={`${getCardWidth()} flex-shrink-0 bg-gray-900 rounded-xl overflow-hidden
                                        shadow-lg border border-white/10 group
                                        transition-all duration-500 ease-out hover:border-purple-500/50
                                        hover:shadow-2xl hover:shadow-purple-500/20 `}
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                    whileHover={{ y: -5 }}
                                >
                                    <motion.div 
                                        className="relative h-48 overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedProject(project)}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.img
                                            src={project.image.src}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top"
                                            initial={{ scale: 1 }}
                                            animate={{
                                                scale: hoveredIndex === index ? 1.1 : 1
                                            }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <motion.div 
                                            className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <div className="flex items-center gap-2 text-white">
                                                <ExternalLink className="w-5 h-5" />
                                                <span className="font-medium">View Project</span>
                                            </div>
                                        </motion.div>
                                    </motion.div>

                                    <div className="p-6 h-64 flex flex-col">
                                        <h3 className="text-xl font-semibold text-white mb-3">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm mb-7 flex-grow line-clamp-3">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, techIndex) => (
                                                <motion.span
                                                    key={techIndex}
                                                    className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-900/30 rounded-full"
                                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(88, 28, 135, 0.5)' }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OngoingProject;