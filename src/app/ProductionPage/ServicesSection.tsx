import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            title: "Video Production",
            description: "Transform your vision into compelling visual stories with our end-to-end video production services. From concept development to final delivery, we create high-impact content that resonates with your audience.",
            additionalInfo: [
                "Pre-production planning and scripting",
                "Professional cinematography with 4K/8K capability",
                "Drone aerial videography",
                "Multi-camera setup for live events",
                "Corporate videos and commercials",
                "Color grading and post-production",
                "Custom motion graphics integration"
            ],
            imageUrl: "/images/Production5.jpg"
        },
        {
            id: 2,
            title: "Audio Production",
            description: "Elevate your sound with our state-of-the-art audio production facilities. We offer comprehensive audio solutions, from recording and mixing to mastering, ensuring crystal-clear quality for any audio project.",
            additionalInfo: [
                "Professional voice-over recording",
                "Music production and composition",
                "Podcast production and editing",
                "Sound design for video",
                "Audio restoration and cleanup",
                "Surround sound mixing",
                "Live event sound engineering"
            ],
            imageUrl: "/images/Production.jpg"
        },
        {
            id: 3,
            title: "Photography",
            description: "Capture moments that tell your story through our professional photography services. We specialize in creating stunning visuals that showcase your brand, products, or events in their best light.",
            additionalInfo: [
                "Commercial and product photography",
                "Corporate headshots and team photos",
                "Event and conference coverage",
                "Architectural and interior photography",
                "High-end retouching services",
                "360° virtual tours",
                "Fashion and lifestyle shoots"
            ],
            imageUrl: "/images/Production10.jpg"
        },
        {
            id: 4,
            title: "Animation and Motion Graphics",
            description: "Bring your ideas to life with cutting-edge animation and motion graphics. Our team creates dynamic visual content that explains, entertains, and engages your audience across all platforms.",
            additionalInfo: [
                "2D and 3D animation",
                "Character design and animation",
                "Explainer videos",
                "Logo animation",
                "UI/UX animation",
                "Infographic animation",
                "Visual effects (VFX)"
            ],
            imageUrl: "/images/Production9.jpg"
        },
        {
            id: 5,
            title: "Event Production",
            description: "Deliver unforgettable experiences with our comprehensive event production services. We handle the technical aspects of your event, ensuring seamless integration of audio, visual, and lighting elements.",
            additionalInfo: [
                "Live event streaming",
                "Stage design and setup",
                "Audio-visual equipment rental",
                "LED wall and projection mapping",
                "Live camera switching",
                "Real-time graphics and lower thirds",
                "On-site technical support"
            ],
            imageUrl: "/images/Production11.jpg"
        }
    ];



    return (
        <section className="bg-black text-white py-28 md:py-32 px-4 relative">
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative">
                {/* Enhanced Header */}
                <div className="text-center max-w-3xl mx-auto md:mb-20">
                    <div className="relative inline-block">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative">
                            <span className="text-white relative z-10 drop-shadow-lg">
                                Provided Services
                            </span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-base md:text-lg md:mb-12 max-w-3xl mx-auto px-3 md:px-0">
                        Elevate your content with our professional production services. 
                        We bring creativity, technical excellence, and innovation to every project.
                    </p>
                </div>

                {/* Services with Enhanced Styling */}
                <div className="space-y-0 md:space-y-32 px-2 md:px-0">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`flex flex-col ${
                                service.id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                            } items-stretch gap-8 lg:gap-24`}
                        >
                            {/* Enhanced Image Section */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="h-full relative rounded-xl overflow-hidden shadow-2xl">
                                    {/* Border glow effect */}
                                    <div className="absolute inset-0 ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-500 rounded-xl z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/30 transition-all duration-500" />
                                    <Image
                                        src={service.imageUrl}
                                        alt={service.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>
                            </div>

                            {/* Enhanced Content Section */}
                            <div className="w-full lg:w-1/2 flex flex-col">
                                <div className="bg-gradient-to-br from-purple-900/10 to-black/50 backdrop-blur-sm rounded-xl p-7 md:p-8 border border-purple-500/20 h-full flex flex-col space-y-6 md:space-y-8 hover:border-purple-500/40 transition-all duration-500 shadow-lg">
                                    {/* White title with subtle gradient */}
                                    <h3 className="text-3xl lg:text-4xl font-bold">
                                        <span className="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                                            {service.title}
                                        </span>
                                    </h3>
                                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                        {service.description}
                                    </p>
                                    
                                    {/* Enhanced Services Card */}
                                    <div className="flex-grow">
                                        <div className="bg-purple-950/40 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 shadow-lg">
                                            <h4 className="text-xl text-white mb-4 font-semibold">
                                                Services Include:
                                            </h4>
                                            <ul className="text-gray-300 space-y-3 text-sm md:text-base">
                                                {service.additionalInfo.map((info, index) => (
                                                    <li key={index} className="flex items-center group">
                                                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-purple-500/20 group-hover:bg-purple-500/30 transition-all duration-300 mr-3 ring-1 ring-purple-500/20 group-hover:ring-purple-500/40">
                                                            <svg 
                                                                className="w-4 h-4 text-white" 
                                                                fill="none" 
                                                                viewBox="0 0 24 24" 
                                                                stroke="currentColor"
                                                            >
                                                                <path 
                                                                    strokeLinecap="round" 
                                                                    strokeLinejoin="round" 
                                                                    strokeWidth={2} 
                                                                    d="M5 13l4 4L19 7" 
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="group-hover:text-white transition-colors duration-300">
                                                            {info}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Enhanced Button */}
                                    <button className="group inline-flex items-center space-x-3 text-white hover:text-purple-300 transition-all duration-300 mt-6 px-6 py-2 rounded-lg">
                                        <span className="text-lg font-medium">Learn More</span>
                                        <svg
                                            className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;