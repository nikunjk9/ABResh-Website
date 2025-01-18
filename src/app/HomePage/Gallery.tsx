'use client'
import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
// Import event images
import Image1 from "@/assets/images/Image1.jpg"
import Image2 from "@/assets/images/Image2.jpg"
import Image3 from "@/assets/images/Image3.jpg"
import Image4 from "@/assets/images/Image4.jpg"
import Image5 from "@/assets/images/Image5.jpg"
import Image6 from "@/assets/images/Image6.jpg"

// Define the image type
interface EventImage {
  src: any;
  alt: string;
}

// Create an array of event images
const eventImages: EventImage[] = [
  { src: Image1, alt: 'Event Image 1' },
  { src: Image2, alt: 'Event Image 2' },
  { src: Image3, alt: 'Event Image 3' },
  { src: Image4, alt: 'Event Image 4' },
  { src: Image5, alt: 'Event Image 5' },
  { src: Image6, alt: 'Event Image 6' }
]

export const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiper, setSwiper] = useState<any>(null)
  const [isAutoplaying, setIsAutoplaying] = useState(true)

  // Memoize the slide change handler
  const handleSlideChange = useCallback((swiper: any) => {
    setActiveIndex(swiper.activeIndex)
  }, [])

  // Memoize the thumbnail click handler
  const handleThumbnailClick = useCallback((index: number) => {
    if (swiper) {
      swiper.slideTo(index)
    }
  }, [swiper])

  // Toggle autoplay
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
    <section id="our-gallery" className='relative bg-black w-full'>
      <div className='container mx-auto px-6 md:px-4 py-8 md:py-10'>
        <div className='text-center mb-8 sm:mb-10'>
          <h2 className='text-4xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-4'>
            Our Gallery
          </h2>
          <p className='max-w-xl mx-auto text-gray-400 text-base sm:text-lg px-4'>
            Explore the memorable moments from our events and experience the vibe.
          </p>
        </div>
        <div className='relative'>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
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
            speed={800}
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            loop={true}
            className='h-[250px] sm:h-[350px] lg:h-[550px]  md:w-[90%] lg:w-[85%] w-full rounded-lg relative group'
          >
            {/* Autoplay Toggle Button */}
            <button 
              onClick={toggleAutoplay}
              className='absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 text-white shadow-lg transition-all duration-300'
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

            {/* Custom Navigation Buttons */}
            <div className='custom-prev-button absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div className='bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 text-white shadow-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </div>
            <div className='custom-next-button absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <div className='bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 text-white shadow-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {eventImages.map((image, index) => (
              <SwiperSlide key={index} className='relative'>
                <div className='h-full w-full flex items-center justify-center '>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className='block h-full w-full object-cover rounded-lg'
                    placeholder='blur'
                    priority={index < 2} // Prioritize loading for first two images
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnails */}
          <div className='mt-4 sm:mt-6'>
            <ul className='flex gap-2 sm:gap-4 overflow-x-auto py-4 justify-start sm:justify-center scrollbar-hide'>
              {eventImages.map((image, index) => (
                <li key={index} className='flex-shrink-0'>
                  <button
                    onClick={() => handleThumbnailClick(index)}
                    className={`relative block h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 overflow-hidden rounded-lg 
                      hover:scale-105 transition-transform
                      ${activeIndex === index 
                        ? 'border-4 border-white/80 scale-105' 
                        : 'border-2 border-transparent'
                      }`}
                  >
                    <div className='w-full h-full overflow-hidden rounded-md'>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className='block h-full w-full object-cover'
                        placeholder='blur'
                        loading="lazy" // Lazy load thumbnails
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
          width: 10px;
          height: 10px;
          background-color: rgba(255,255,255,0.3);
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .custom-pagination-bullet-active {
          background-color: #fff;
          width: 20px;
          border-radius: 10px;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};