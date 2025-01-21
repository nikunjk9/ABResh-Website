'use client'
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const videos = [
    { 
        id: 1, 
        src: "/images/pro1.mp4",
        songTitle: "What Was I Made For?",
        artistName: "Billie Eilish",
        artistImage: "/images/artist2.jpg",
        year: "2024",
        genre: "Pop",
        description: "A haunting ballad written for the Barbie movie, exploring themes of identity and purpose. The minimalist video, directed by Billie Eilish and shot in a single day, perfectly captures the song's introspective nature.",
        stats: {
            duration: "3:42",
            streams: "425M",
            likes: "4.2M"
        },
        keywords: ["Soundtrack", "Pop Ballad", "Motion Picture"],
        featuring: ["Billie Eilish"]
    },
    { 
        id: 2, 
        src: "/images/pro2.mp4",
        songTitle: "Ve Kamleya",
        artistName: "Arijit Singh",
        artistImage: "/images/artist8.jpg",
        year: "2024",
        genre: "Bollywood Pop",
        description: "A soulful romantic track that showcases Arijit's vocal prowess. The video features stunning visuals shot across scenic locations, complementing the song's emotional depth.",
        stats: {
            duration: "4:15",
            streams: "280M",
            likes: "3.8M"
        },
        keywords: ["Romance", "Bollywood", "Classical Fusion"],
        featuring: ["Arijit Singh", "Shreya Ghoshal"]
    },
    { 
        id: 3, 
        src: "/images/pro3.mp4",
        songTitle: "Snooze ft. Justin Bieber",
        artistName: "SZA",
        artistImage: "/images/artist4.png",
        year: "2024",
        genre: "R&B/Pop",
        description: "A collaborative masterpiece that blends SZA's distinctive R&B style with Justin Bieber's pop sensibilities. The dreamy music video takes viewers on a surreal journey through vibrant, otherworldly settings.",
        stats: {
            duration: "3:22",
            streams: "320M",
            likes: "2.9M"
        },
        keywords: ["R&B", "Collaboration", "Pop"],
        featuring: ["SZA", "Justin Bieber"]
    }
];

export default function VideoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
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
        <section className="bg-black text-white py-16 md:py-20 px-4 md:px-20">
            <div className="max-w-[1800px] mx-auto px-2 md:px-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Side - Music Information */}
                    <div className="lg:w-[40%]">
                        <div className="h-[540px] space-y-6 px-2 flex flex-col">
                            {/* Header */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-purple-400">
                                    <span className="text-sm font-medium">Featured Music Videos</span>
                                    <div className="h-px bg-purple-400 flex-grow" />
                                    <span className="text-sm font-medium">
                                        {String(currentIndex + 1).padStart(2, '0')}/03
                                    </span>
                                </div>
                                
                                {/* Artist Image and Info */}
                                <div className="flex items-center gap-4">
                                    <img 
                                        src={videos[currentIndex].artistImage} 
                                        alt={videos[currentIndex].artistName}
                                        className="w-24 h-24 rounded-full object-cover"
                                    />
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                                            {videos[currentIndex].songTitle}
                                        </h2>
                                        <p className="text-lg text-purple-300">{videos[currentIndex].artistName}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Keywords */}
                            <div className="flex flex-wrap gap-3">
                                {videos[currentIndex].keywords.map((keyword, index) => (
                                    <span key={index} className="px-4 py-2 bg-purple-900/30 rounded-full text-sm text-purple-200">
                                        {keyword}
                                    </span>
                                ))}
                            </div>

                            {/* Song Stats */}
                            <div className="grid grid-cols-3 gap-6 bg-white/5 rounded-xl p-6">
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Duration</p>
                                    <p className="text-xl font-medium">{videos[currentIndex].stats.duration}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Streams</p>
                                    <p className="text-xl font-medium">{videos[currentIndex].stats.streams}</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Likes</p>
                                    <p className="text-xl font-medium">{videos[currentIndex].stats.likes}</p>
                                </div>
                            </div>

                            {/* Featured Artists */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Featured Artists</h3>
                                <div className="space-y-3">
                                    {videos[currentIndex].featuring.map((artist, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                                            <div className="w-3 h-3 rounded-full bg-purple-500" />
                                            <span className="text-gray-200">{artist}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="flex-grow">
                                <p className="text-gray-300 leading-relaxed">
                                    {videos[currentIndex].description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Video Player and Thumbnails */}
                    <div className="lg:w-2/3 space-y-6">
                        {/* Main Video Player */}
                        <div className="relative group h-[460px] bg-purple-900/20 rounded-xl overflow-hidden">
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
                                        <p className="text-sm font-medium truncate">{video.songTitle}</p>
                                        <p className="text-sm text-gray-400 truncate">{video.artistName}</p>
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