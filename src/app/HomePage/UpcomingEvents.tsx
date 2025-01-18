"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Image1 from "@/assets/images/Image1.jpg";
import Image2 from "@/assets/images/Image2.jpg";
import Image3 from "@/assets/images/Image3.jpg";
import Image4 from "@/assets/images/Image4.jpg";
import Image5 from "@/assets/images/Image5.jpg";
import Image6 from "@/assets/images/Image6.jpg";

interface EventItem {
  title: string;
  date: string;
  description: string;
  image: StaticImageData;
}

const data: EventItem[] = [
  {
    title: "ABResh Events | Crafting Unforgettable Experiences",
    date: "Dec 20, 2024",
    description: "Experience an unforgettable night of music and magic.",
    image: Image1,
  },
  {
    title: "New Year Gala | A Celebration to Remember",
    date: "Jan 21, 2025",
    description: "Ring in the New Year with style and excitement.",
    image: Image2,
  },
  {
    title: "Spring Festival | Colors of Joy",
    date: "March 15, 2025",
    description: "Celebrate the season with fun, food, and festivities.",
    image: Image3,
  },
  {
    title: "Tech Con 2025 | Innovate and Inspire",
    date: "April 10, 2025",
    description: "Join the leading minds in technology and innovation.",
    image: Image4,
  },
  {
    title: "Summer Beats | Outdoor Music Festival",
    date: "July 22, 2025",
    description: "Enjoy the best live music under the summer skies.",
    image: Image5,
  },
  {
    title: "Autumn Serenade | Classical Music Evening",
    date: "Oct 5, 2025",
    description: "Indulge in an evening of timeless classical music.",
    image: Image6,
  },
];

const UpcomingEvents = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    
    const clientX = 'touches' in e 
      ? e.touches[0].pageX 
      : e.pageX;
    
    setStartX(clientX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();

    const clientX = 'touches' in e 
      ? e.touches[0].pageX 
      : e.pageX;
      
    const x = clientX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    if (!sliderRef.current || isDragging) return;

    let animationFrameId: number;

    const autoScroll = () => {
      if (!sliderRef.current) return;
      
      const { scrollLeft, scrollWidth } = sliderRef.current;
      sliderRef.current.scrollLeft = scrollLeft >= scrollWidth / 2 
        ? 0 
        : scrollLeft + 1;
        
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isDragging]);

  return (
    <div className="relative bg-black text-white overflow-hidden py-10 md:py-14">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight">
          Upcoming Events
        </h2>
        <p className="max-w-xl mx-auto text-gray-400 text-base sm:text-lg px-8">
          Moments that inspire, connections that last—join us for an event to remember!
        </p>
      </div>

      <div
        ref={sliderRef}
        className="flex overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing"
        onMouseDown={handleDragStart}
        onMouseLeave={() => setIsDragging(false)}
        onMouseUp={() => setIsDragging(false)}
        onMouseMove={handleDragMove}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={() => setIsDragging(false)}
      >
        <div className="flex">
          {[...data, ...data].map((item, index) => (
            <div
              key={index}
              className="inline-block w-72 md:w-96 h-[350px] rounded-lg overflow-hidden shadow-lg border border-white/50 relative p-4 mx-3 hover:bg-purple-700/80 hover:bg-opacity-40 transition-colors duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={180}
                className="w-full h-[180px] object-cover rounded-md"
                priority={index < 2}
              />
              
              <div className="pt-3">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs md:text-sm text-white flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V5.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75V7M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v12.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 19.25V6.75z"
                      />
                    </svg>
                    {item.date}
                  </span>
                  <button className="px-3 md:px-4 py-1 text-xs md:text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-white hover:text-purple-800 border-2 border-transparent hover:border-purple-800 transition-all duration-300">
                    Book
                  </button>
                </div>
                <h3 className="text-base md:text-lg font-semibold line-clamp-2 ">{item.title}</h3>
                <p className="text-xs text-gray-300 mt-1 line-clamp-3 ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default UpcomingEvents;