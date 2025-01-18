'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Importing Icons
import { MapPin, Users, Star, Building2, Mic, ChevronLeft, ChevronRight } from 'lucide-react';

// Importing Images - replace with actual event images
import TeamPhotoImage from "@/assets/images/TeamIntro.jpg";
import EventImage1 from "@/assets/images/EventImage1.jpg";
import EventImage2 from "@/assets/images/EventImage2.jpg";
import EventImage3 from "@/assets/images/EventImage3.jpg";

// Type for event details
interface EventDetails {
    year: number;
    title: string;
    description: string;
    image: StaticImageData;
    location: string;
    guests: string[];
    audienceCount: number;
    sponsors: string[];
}

// Event data - could be moved to a separate data file
const eventData: EventDetails[] = [
    {
        year: 2022,
        title: 'ABResh Music Festival 2022',
        description: 'Experience the electrifying performances and mesmerizing vibes at the ABResh Music Festival 2022. A celebration of music, art, and unforgettable memories.',
        image: EventImage1,
        location: 'Central Park Amphitheater, New York City',
        guests: ['John Legend', 'Alicia Keys', 'Bruno Mars'],
        audienceCount: 15000,
        sponsors: ['Spotify', 'Red Bull Music', 'Apple Music', 'Nike'],
    },
    {
        year: 2023,
        title: 'ABResh Music Showcase 2023',
        description: 'A vibrant journey through diverse musical genres, connecting artists and music lovers in an unforgettable experience.',
        image: EventImage2,
        location: 'Hollywood Bowl, Los Angeles',
        guests: ['The Weeknd', 'Billie Eilish', 'Dua Lipa'],
        audienceCount: 12500,
        sponsors: ['YouTube Music', 'Coca-Cola', 'LiveNation', 'Adidas'],
    },
    {
        year: 2024,
        title: 'ABResh Global Music Fest',
        description: 'Pushing boundaries and celebrating global musical talent, our 2024 festival brings together innovative performers from around the world.',
        image: EventImage3,
        location: 'Coachella Grounds, Indio, California',
        guests: ['Taylor Swift', 'Drake', 'Coldplay'],
        audienceCount: 20000,
        sponsors: ['Amazon Music', 'Pepsi', 'Live Stream', 'Samsung'],
    },
];

export default function MusicEventsSlider() {
    // State to track expanded/hovered slides on mobile/desktop
    const [expandedSlides, setExpandedSlides] = useState<number[]>([]);

    // Toggle slide expansion on mobile
    const toggleSlideExpansion = (index: number) => {
        setExpandedSlides(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section className="py-16 bg-black px-4 sm:px-6 md:px-8 lg:px-0 min-h-[600px]">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
                {/* Section Heading */}
                <h2 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tighter text-white mb-6">
                    Our Events
                </h2>
                <div className="max-w-xl mx-auto">
                    <p className="text-center text-base sm:text-lg md:text-lg text-white/70 mb-10">
                        Explore the incredible events hosted by ABResh Events over the years. Relive the moments, passion, and creativity.
                    </p>
                </div>

                {/* Swiper Slider */}
                <div className="relative max-w-6xl mx-auto mt-11">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: '.swiper-custom-prev',
                            nextEl: '.swiper-custom-next',
                        }}
                        pagination={{
                            el: '.swiper-custom-pagination',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return `<span class="${className} bg-white/50 hover:bg-white w-3 h-3 rounded-full inline-block mx-2 cursor-pointer transition-all duration-300"></span>`;
                            },
                        }}
                        loop={true}
                        className="pb-12"
                    >
                        {eventData.map((event, index) => (
                            <SwiperSlide key={index}>
                                <div 
                                    className={`group flex flex-col lg:flex-row bg-gradient-to-br from-gray-900 to-black rounded-2xl border-4 border-white/60 shadow-2xl overflow-hidden 
                                        min-h-[400px] sm:min-h-[500px] 
                                        lg:min-h-[550px] 
                                        transition-all duration-300
                                        ${expandedSlides.includes(index) ? 'lg:min-h-[550px] ' : 'lg:min-h-[550px]'}
                                        cursor-pointer
                                    `}
                                    onClick={() => toggleSlideExpansion(index) }
                                >
                                    {/* Image Section */}
                                    <div className="w-full lg:w-1/2 relative">
                                        <Image
                                            src={event.image}
                                            alt={`Music Event ${event.year}`}
                                            className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-300"
                                            priority={index === 0}
                                        />
                                        <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
                                            {event.year}
                                        </div>
                                    </div>
                                    
                                    {/* Text Section */}
                                    <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 
                                        flex flex-col 
                                        justify-center 
                                        
                                         
                                        relative
                                    ">
                                        <div className="
                                            px-2
                                            lg:px-12
                                            lg:absolute 
                                            lg:top-1/2 
                                            lg:left-1/2 
                                            lg:-translate-x-1/2 
                                            lg:-translate-y-1/2 
                                            lg:group-hover:-translate-y-[calc(50%+6rem)]
                                            transition-transform 
                                            duration-300 
                                            w-full
                                        ">
                                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
                                                {event.title}
                                            </h3>
                                            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-4 sm:mb-6">
                                                {event.description}
                                            </p>
                                        </div>

                                        {/* Event Details - Desktop */}
                                        <div className={`
                                            hidden 
                                            lg:block 
                                            space-y-2 
                                            text-base 
                                            sm:text-lg 
                                            absolute 
                                            bottom-0 
                                            left-0 
                                            right-0 
                                            px-12 
                                            pb-20 
                                            opacity-0 
                                            lg:group-hover:opacity-100 
                                            transition-opacity 
                                            duration-300
                                        `}>
                                            {/* Location */}
                                            <div className="flex items-center space-x-3">
                                                <MapPin className="text-white/70 w-5 h-5" />
                                                <span className="text-white/90">{event.location}</span>
                                            </div>

                                            {/* Guests */}
                                            <div className="flex items-center space-x-3">
                                                <Mic className="text-white/70 w-5 h-5" />
                                                <div className="text-white/90">
                                                    Special Guests: {event.guests.join(', ')}
                                                </div>
                                            </div>

                                            {/* Audience */}
                                            <div className="flex items-center space-x-3">
                                                <Users className="text-white/70 w-5 h-5" />
                                                <span className="text-white/90">
                                                    {event.audienceCount.toLocaleString()} Attendees
                                                </span>
                                            </div>

                                            {/* Sponsors */}
                                            <div className="flex items-center space-x-3">
                                                <Building2 className="text-white/70 w-5 h-5" />
                                                <div className="text-white/90">
                                                    Sponsors: {event.sponsors.join(' • ')}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Event Details - Mobile */}
                                        <div className={`
                                            lg:hidden 
                                            space-y-3 
                                            text-base 
                                            sm:text-lg 
                                            w-full 
                                            pt-4 
                                            ${expandedSlides.includes(index) ? 'block' : 'hidden'}
                                        `}>
                                            {/* Location */}
                                            <div className="flex items-center space-x-3">
                                                <MapPin className="text-white/70 w-5 h-5" />
                                                <span className="text-white/90">{event.location}</span>
                                            </div>

                                            {/* Guests */}
                                            <div className="flex items-center space-x-3">
                                                <Mic className="text-white/70 w-5 h-5" />
                                                <div className="text-white/90">
                                                    Special Guests: {event.guests.join(', ')}
                                                </div>
                                            </div>

                                            {/* Audience */}
                                            <div className="flex items-center space-x-3">
                                                <Users className="text-white/70 w-5 h-5" />
                                                <span className="text-white/90">
                                                    {event.audienceCount.toLocaleString()} Attendees
                                                </span>
                                            </div>

                                            {/* Sponsors */}
                                            <div className="flex items-center space-x-3">
                                                <Building2 className="text-white/70 w-5 h-5" />
                                                <div className="text-white/90">
                                                    Sponsors: {event.sponsors.join(' • ')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation */}
                    <div className="mt-6 flex justify-center items-center space-x-4 z-10">
                        {/* Previous Button */}
                        <button className="swiper-custom-prev text-white/70 bg-white/10 rounded-full hover:text-white transition-colors duration-300 p-2">
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        {/* Pagination Dots */}
                        <div className="swiper-custom-pagination flex items-center "></div>

                        {/* Next Button */}
                        <button className="swiper-custom-next text-white/70 bg-white/10 rounded-full hover:text-white transition-colors duration-300 p-2">
                            <ChevronRight className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}