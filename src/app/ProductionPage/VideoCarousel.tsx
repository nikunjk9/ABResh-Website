'use client'
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const videos = [
    { 
        id: 1, 
        src: "/images/pro1.mp4",
        title: "Ethereal Dreams Campaign",
        client: "Luxe Cosmetics",
        year: "2024",
        category: "Commercial",
        description: "A groundbreaking campaign that merged practical effects with digital artistry to create a dreamlike journey through beauty and self-discovery. This piece challenged conventional beauty standards while maintaining a luxurious aesthetic.",
        stats: {
            duration: "1:45",
            views: "2.1M",
            engagement: "94%"
        },
        tags: ["Beauty", "Commercial", "Visual Effects"]
    },
    { 
        id: 2, 
        src: "/images/pro2.mp4",
        title: "Urban Pulse",
        client: "Nike Sports",
        year: "2024",
        category: "Sport Documentary",
        description: "An intimate look at urban street sports culture, capturing the raw energy and passion of athletes pushing boundaries. Shot entirely at night using cutting-edge low-light technology to preserve the authentic atmosphere.",
        stats: {
            duration: "2:30",
            views: "3.4M",
            engagement: "96%"
        },
        tags: ["Sports", "Documentary", "Urban"]
    },
    { 
        id: 3, 
        src: "/images/pro3.mp4",
        title: "Sustainable Tomorrow",
        client: "EcoTech Innovations",
        year: "2024",
        category: "Corporate",
        description: "A visually stunning exploration of sustainable technology and its impact on our future. Combining drone footage, macro photography, and advanced CGI to tell a compelling story about innovation and environmental responsibility.",
        stats: {
            duration: "2:15",
            views: "1.8M",
            engagement: "92%"
        },
        tags: ["Technology", "Environmental", "Corporate"]
    }
];

export default function VideoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showFullDescription, setShowFullDescription] = useState(false);
    const mainVideoRef = useRef<HTMLVideoElement>(null);
    const thumbnailRefs = useRef<Array<HTMLVideoElement | null>>([]);

    useEffect(() => {
        const video = mainVideoRef.current;
        if (video) {
            const handleEnded = () => {
                setIsPlaying(false);
                setProgress(0);
            };
            const handleTimeUpdate = () => {
                const progress = (video.currentTime / video.duration) * 100;
                setProgress(progress);
            };
            
            video.addEventListener('ended', handleEnded);
            video.addEventListener('timeupdate', handleTimeUpdate);
            
            return () => {
                video.removeEventListener('ended', handleEnded);
                video.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [currentIndex]);

    const handleNavigation = (index: number) => {
        if (mainVideoRef.current) {
            mainVideoRef.current.pause();
        }
        setCurrentIndex(index);
        setIsPlaying(false);
        setProgress(0);
    };

    const togglePlayPause = () => {
        if (mainVideoRef.current) {
            if (isPlaying) {
                mainVideoRef.current.pause();
            } else {
                mainVideoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="bg-black text-white py-16 md:py-20 px-4 md:px-10">
            <div className="max-w-[1800px] mx-auto px-2 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Side - Project Information */}
                    <div className="lg:w-1/3">
                        <div className="h-[540px] space-y-6 px-2">
                            {/* Project Header */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-purple-400">
                                    <span className="text-sm font-medium">Featured Project</span>
                                    <div className="h-px bg-purple-400 flex-grow" />
                                    <span className="text-sm font-medium">
                                        {String(currentIndex + 1).padStart(2, '0')}/{String(videos.length).padStart(2, '0')}
                                    </span>
                                </div>
                                <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                                    {videos[currentIndex].title}
                                </h2>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-3">
                                {videos[currentIndex].tags.map((tag, index) => (
                                    <span key={index} className="px-4 py-2 bg-purple-900/30 rounded-full text-sm text-purple-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Project Stats */}
                            <div className="grid grid-cols-3 gap-6 bg-white/5 rounded-xl p-6">
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Duration</p>
                                    <p className="text-xl font-medium">{videos[currentIndex].stats.duration}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Views</p>
                                    <p className="text-xl font-medium">{videos[currentIndex].stats.views}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Engagement</p>
                                    <p className="text-xl font-medium">{videos[currentIndex].stats.engagement}</p>
                                </div>
                            </div>

                            {/* Project Description */}
                            <div className="space-y-4 relative">
                                <h3 className="text-xl font-semibold">About the Project</h3>
                                <div className={`relative ${!showFullDescription && 'max-h-28 overflow-hidden'}`}>
                                    <p className="text-gray-300 leading-relaxed">
                                        {videos[currentIndex].description}
                                    </p>
                                    {!showFullDescription && (
                                        <div className="absolute bottom-0 left-0 right-0 h-11 bg-gradient-to-t from-black to-transparent" />
                                    )}
                                </div>
                                <button
                                    onClick={() => setShowFullDescription(!showFullDescription)}
                                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300"
                                >
                                    {showFullDescription ? (
                                        <>
                                            <span>Show Less</span>
                                            <ChevronUp className="w-4 h-4" />
                                        </>
                                    ) : (
                                        <>
                                            <span>Read More</span>
                                            <ChevronDown className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Client Info */}
                            <div className="bg-white/5 rounded-xl p-6 space-y-4">
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Client</p>
                                    <p className="text-xl font-medium">{videos[currentIndex].client}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Category</p>
                                    <p className="text-xl font-medium">{videos[currentIndex].category}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Video Player and Thumbnails */}
                    <div className="lg:w-2/3 space-y-6 mt-64 md:mt-0">
                        {/* Main Video Player */}
                        <div className="relative group h-[540px] bg-purple-900/20 rounded-xl overflow-hidden">
                            <video
                                ref={mainVideoRef}
                                key={videos[currentIndex].id}
                                src={videos[currentIndex].src}
                                className="w-full h-full object-cover"
                                playsInline
                            />

                            {/* Video Controls */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                {/* Center Play Button */}
                                <button
                                    onClick={togglePlayPause}
                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center bg-purple-500/20 backdrop-blur-sm rounded-full hover:bg-purple-500/30 transition-all duration-300 group"
                                >
                                    {isPlaying ? (
                                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                                        </svg>
                                    ) : (
                                        <svg className="w-10 h-10 text-white transform translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7L8 5z"/>
                                        </svg>
                                    )}
                                </button>

                                {/* Progress Bar */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-purple-500 transition-all duration-300"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Video Thumbnails */}
                        <div className="grid grid-cols-3 gap-4">
                            {videos.map((video, index) => (
                                <div 
                                    key={video.id}
                                    className={`relative group cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                                        currentIndex === index ? 'ring-2 ring-purple-500' : 'ring-1 ring-white/10'
                                    }`}
                                    onClick={() => handleNavigation(index)}
                                >
                                    <video
                                        ref={(el) => {
                                            thumbnailRefs.current[index] = el;
                                        }}
                                        src={video.src}
                                        className="w-full h-36 object-cover"
                                        muted
                                        loop
                                        onMouseEnter={(e) => e.currentTarget.play()}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.pause();
                                            e.currentTarget.currentTime = 0;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                        <p className="text-sm font-medium truncate">{video.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}