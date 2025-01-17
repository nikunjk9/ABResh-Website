'use client'
import React, { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'


import gall1 from "@/assets/images/gall1.jpg"
import gall2 from "@/assets/images/gall2.jpg"
import gall3 from "@/assets/images/gall3.jpg"
import gall4 from "@/assets/images/gall4.jpg"
import gall5 from "@/assets/images/gall5.jpg"
import gall7 from "@/assets/images/gall7.jpg"

// Define the image type
interface EventImage {
  src: any;
  alt: string;
}

// Create an array of event images
const eventImages: EventImage[] = [
  { src: gall1, alt: 'Event Image 1' },
  { src: gall2, alt: 'Event Image 2' },
  { src: gall3, alt: 'Event Image 3' },
  { src: gall4, alt: 'Event Image 4' },
  { src: gall5, alt: 'Event Image 5' },
  { src: gall7, alt: 'Event Image 6' }
]

export const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiper, setSwiper] = useState<any>(null)
  const [isAutoplaying, setIsAutoplaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSlideChange = useCallback((swiper: any) => {
    setActiveIndex(swiper.activeIndex)
  }, [])

  const handleThumbnailClick = useCallback((index: number) => {
    if (swiper) {
      swiper.slideTo(index)
    }
  }, [swiper])

  const toggleAutoplay = useCallback(() => {
    if (swiper) {
      if (isAutoplaying) {
        swiper.autoplay.stop()
      } else {
        swiper.autoplay.start()
      }
      setIsAutoplaying(!isAutoplaying)
    }
  }, [swiper, isAutoplaying])

  return (
    <section 
      id="our-gallery" 
      className={`relative bg-black w-full transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-6 md:px-4 py-10 md:py-14">
        <div className="absolute inset-0 bg-black animate-gradient" />
        
        <div className={`text-center mb-8 sm:mb-10 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold text-white mb-1 md:mb-4 relative">
            Our Gallery
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 group-hover:w-full" />
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-base sm:text-xl px-4">
            Explore the memorable moments from our events, and experience the magic.
          </p>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            effect="fade"
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              prevEl: '.custom-prev-button',
              nextEl: '.custom-next-button',
            }}
            pagination={{ 
              clickable: true,
              bulletClass: 'custom-pagination-bullet',
              bulletActiveClass: 'custom-pagination-bullet-active'
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            speed={1000}
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            loop={true}
            className="h-[250px] sm:h-[350px] lg:h-[550px] md:w-[90%] lg:w-[85%] w-full rounded-lg relative transform transition-all duration-700 group-hover:scale-[1.02] shadow-2xl"
          >
            <button 
              onClick={toggleAutoplay}
              className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              {isAutoplaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              )}
            </button>

            <div className="custom-prev-button absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
              <div className="bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 text-white shadow-lg transition-all duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </div>
            <div className="custom-next-button absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <div className="bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 text-white shadow-lg transition-all duration-300 hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {eventImages.map((image, index) => (
              <SwiperSlide key={index} className="relative overflow-hidden">
                <div className="h-full w-full flex items-center justify-center bg-black p-1 transform transition-transform duration-700">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="block h-full w-full object-cover rounded-lg transition-all duration-700 transform scale-105 group-hover:scale-100"
                    placeholder="blur"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-4 sm:mt-6">
            <ul className="flex gap-2 sm:gap-4 overflow-x-auto py-4 justify-start sm:justify-center scrollbar-hide">
              {eventImages.map((image, index) => (
                <li key={index} className="flex-shrink-0 transform transition-all duration-300 hover:scale-105">
                  <button
                    onClick={() => handleThumbnailClick(index)}
                    className={`relative block h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg ${
                      activeIndex === index 
                        ? 'border-4 border-white/80 scale-105 shadow-xl' 
                        : 'border-2 border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="w-full h-full overflow-hidden rounded-md">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="block h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
                        placeholder="blur"
                        loading="lazy"
                      />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: rgba(255,255,255,0.3);
          opacity: 1;
          border-radius: 50%;
          transition: all 0.5s ease;
          transform: scale(0.8);
        }
        
        .custom-pagination-bullet-active {
          background-color: #fff;
          width: 24px;
          border-radius: 4px;
          transform: scale(1);
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </section>
  );
};