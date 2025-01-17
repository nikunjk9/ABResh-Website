'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'

// Import event images
import Image1 from "@/assets/images/Image1.jpg"
import Image2 from "@/assets/images/Image2.jpg"
import Image3 from "@/assets/images/Image3.jpg"
import Image4 from "@/assets/images/Image4.jpg"
import Image5 from "@/assets/images/Image5.jpg"
import Image6 from "@/assets/images/Image6.jpg"

// Define the event type
interface TopEvent {
  id: number;
  src: any;
  alt: string;
  name: string;
  date: string;
  type: 'National' | 'International';
  link: string;
}

// Sample events data
const topEvents: TopEvent[] = [
  {
    id: 1,
    src: Image1,
    alt: "Event 1",
    name: "Tech Innovation Summit",
    date: "15 Dec 2024",
    type: "International",
    link: "/events/tech-innovation-summit"
  },
  {
    id: 2,
    src: Image2,
    alt: "Event 2",
    name: "Startup Expo",
    date: "20 Jan 2025",
    type: "National",
    link: "/events/startup-expo"
  },
  {
    id: 3,
    src: Image3,
    alt: "Event 3",
    name: "Leadership Conference",
    date: "10 Feb 2025",
    type: "International",
    link: "/events/leadership-conference"
  },
  {
    id: 4,
    src: Image4,
    alt: "Event 4",
    name: "Digital Transformation Forum",
    date: "05 Mar 2025",
    type: "National",
    link: "/events/digital-transformation-forum"
  },
  {
    id: 5,
    src: Image5,
    alt: "Event 5",
    name: "Innovation Workshop",
    date: "15 Apr 2025",
    type: "International",
    link: "/events/innovation-workshop"
  },
  {
    id: 6,
    src: Image6,
    alt: "Event 6",
    name: "Networking Gala",
    date: "20 May 2025",
    type: "National",
    link: "/events/networking-gala"
  }
]

export const TopEvents: React.FC = () => {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)
  const [isHovering, setIsHovering] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer

      if (scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollWidth / 2
      } else if (scrollLeft + clientWidth >= scrollWidth) {
        scrollContainer.scrollLeft = scrollWidth / 2 - clientWidth
      }
    }

    scrollContainer.addEventListener("scroll", handleScroll)
    return () => scrollContainer.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const handleAnimation = async () => {
      if (!isHovering) {
        await controls.start({
          x: `-${scrollContainer.scrollWidth / 2}px`,
          transition: {
            duration: 30,
            repeat: Infinity,
            ease: 'linear'
          }
        })
      } else {
        // Stop the animation when hovering
        await controls.stop()
      }
    }

    handleAnimation()
  }, [isHovering, controls])

  // Handle manual scroll
  const handleManualScroll = () => {
    setIsHovering(true)
    setTimeout(() => setIsHovering(false), 2000)
  }

  return (
    <section className='relative bg-black w-full overflow-hidden'>
      <div className='w-full px-4 py-16 md:py-20 '>
        <div className='text-center mb-8 sm:mb-10'>
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-4'>
            Top Events
          </h2>
          <p className='max-w-xl mx-auto text-gray-400 text-base sm:text-xl px-4'>
            Discover and explore about our most prestigious and impactful events ever held.
          </p>
        </div>

        <div
          className='relative w-full overflow-x-auto no-scrollbar py-4'
          ref={scrollRef}
          onScroll={handleManualScroll}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            className='flex space-x-4 md:space-x-8 will-change-transform'
            animate={controls}
          >
            {[...topEvents, ...topEvents].map((event, index) => (
              <Link href={event.link} key={`${event.id}-${index}`} className='block'>
                <motion.div
                  className={`relative w-64 h-72 md:w-96 md:h-80 flex-shrink-0 cursor-pointer transition-all duration-300 
                    ${hoveredEvent === event.id
                      ? 'scale-110 z-10 shadow-2xl'
                      : 'scale-100 z-0'
                    }`}
                  onHoverStart={() => setHoveredEvent(event.id)}
                  onHoverEnd={() => setHoveredEvent(null)}
                >
                  <div className='absolute inset-0'>
                    <Image
                      src={event.src}
                      alt={event.alt}
                      fill
                      className='object-cover rounded-lg'
                      placeholder='blur'
                    />
                  </div>
                  <div className='absolute inset-0 bg-black/40 rounded-lg'>
                    <div className='absolute top-4 left-4 bg-white/20 px-2 py-1 rounded-md'>
                      <span className='text-white text-xs font-semibold'>
                        {event.type} Event
                      </span>
                    </div>
                    <div className='absolute top-4 right-4 bg-white/20 px-2 py-1 rounded-md'>
                      <span className='text-white text-xs font-semibold'>
                        {event.date}
                      </span>
                    </div>
                    <div className='absolute bottom-4 left-4 right-4'>
                      <h3 className='text-white text-lg font-bold truncate'>
                        {event.name}
                      </h3>
                    </div>
                    <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50'>
                      <span className='text-white text-sm font-medium bg-white/60 px-4 py-2 rounded-lg'>
                        Explore
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}