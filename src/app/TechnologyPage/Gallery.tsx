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


import social2 from "@/assets/images/social2.jpg"
import social3 from "@/assets/images/social3.jpg"
import social4 from "@/assets/images/social4.jpg"
import social6 from "@/assets/images/social6.jpg"
import social7 from "@/assets/images/social7.jpg"
import social9 from "@/assets/images/social9.jpg"
import social11 from "@/assets/images/social11.jpg"


interface EventImage {
  src: any;
  alt: string;
}

const eventImages: EventImage[] = [
 
  { src: social2, alt: 'Event Image 2' },
  { src: social3, alt: 'Event Image 3' },
  { src: social4, alt: 'Event Image 4' },
  { src: social6, alt: 'Event Image 6' },
  { src: social7, alt: 'Event Image 1' },
  { src: social9, alt: 'Event Image 3' },
  { src: social11, alt: 'Event Image 5' },
 
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
      <div className="container mx-auto px-4 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black animate-gradient" />
        
        <div className={`text-center mb-8 sm:mb-10 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 relative">
            Our Gallery
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 group-hover:w-full" />
          </h2>
          <p className="max-w-xl mx-auto text-gray-400 text-sm sm:text-base md:text-lg px-4">
            Explore the memorable moments from our events, Innovation captured in every frame, excellence reflected in every project.
          </p>
        </div>

        <div className="relative group px-2">
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