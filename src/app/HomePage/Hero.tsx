'use client';

import { useState, useRef, useCallback, memo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { DotLottiePlayer } from '@dotlottie/react-player';
import dynamic from 'next/dynamic';

// Dynamic imports for images and icons
const ArrowWIcon = dynamic(() => import('@/assets/Icons/arrow-right.svg'), { ssr: false });
const StarImage = '/images/star.png';
const PyramidImage = '/images/pyramid.png';

// Memoized draggable image component
const DraggableImage = memo(({ 
  src, 
  width, 
  height, 
  className, 
  isLeft 
}: {
  src: string;
  width: number;
  height: number;
  className: string;
  isLeft: boolean;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleDragStart = useCallback(() => setIsDragging(true), []);
  const handleDragEnd = useCallback(() => setIsDragging(false), []);
  const handleImageClick = useCallback(() => setIsClicked(true), []);
  const handleMouseEnter = useCallback(() => {
    if (!isClicked) setIsClicked(false);
  }, [isClicked]);

  return (
    <motion.div
      initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
      animate={{ 
        x: 0, 
        opacity: 1,
        y: isLeft ? [10, -10] : [-10, 10]
      }}
      transition={{
        x: { duration: 0.8, delay: isLeft ? 0.8 : 0.6 },
        opacity: { duration: 0.8, delay: isLeft ? 0.8 : 0.6 },
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
      className={className}
      drag
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClick={handleImageClick}
      onMouseEnter={handleMouseEnter}
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          height={height}
          width={width}
          alt=""
          className="max-w-none"
          draggable="false"
          priority
        />
        {!isClicked && (
          <div className={`absolute top-[-50px] left-1/2 transform -translate-x-1/2 ${isClicked ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 flex flex-col items-center`}>
            <div className="bg-white/10 px-3 py-1 rounded-md text-xs font-medium text-white shadow-md">
              Drag Me!
            </div>
            <DotLottiePlayer
              src="/assets/lottie/wink.lottie"
              autoplay
              loop
              className="w-12 h-12 mt-2"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
});

DraggableImage.displayName = 'DraggableImage';

export const Hero = memo(() => {
  const [isVisible, setIsVisible] = useState(true);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const handleExploreClick = useCallback(() => {
    nextSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }, []);

  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      {/* Background Glow */}
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2800px] lg:h-[1000px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]" />

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <a href="#" className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
            <span className="text-sm md:text-base mt-[2.5px] md:mt-0 animate-gradient-move bg-[length:400%_100%] bg-custom-gradient font-semibold text-transparent bg-clip-text [-webkit-background-clip:text]">
              Welcome to ABResh Events
            </span>
            <span className="text-sm md:text-base mt-[0.5px] md:mt-0 inline-flex items-center gap-1">
              <span>Read more</span>
              <ArrowWIcon />
            </span>
          </a>
        </motion.div>

        {/* Main Content */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <motion.h1 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: isVisible ? 0 : 40, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex"
            >
              Digital Products
              <br />
              and Services
            </motion.h1>
            
            {/* Pyramid Image - Maintaining original position */}
            <DraggableImage
              src={PyramidImage}
              width={300}
              height={300}
              className="absolute right-[596px] top-[90px] hidden sm:inline lg:right-[780px] lg:top-[30px] lg:w-[300px] lg:h-[300px] group"
              isLeft={false}
            />

            {/* Star Image - Maintaining original position */}
            <DraggableImage
              src={StarImage}
              width={270}
              height={270}
              className="absolute top-[16px] left-[540px] hidden sm:inline lg:top-[96px] lg:left-[790px] lg:w-[270px] lg:h-[270px] group"
              isLeft={true}
            />
          </div>
        </div>

        {/* Footer Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center"
        >
          <p className="text-center text-base sm:text-xl mt-9 sm:mt-8 max-w-lg">
            ABResh Technologies, focusing on how their digital solutions (Web, App, Software, Digital Marketing) help businesses grow and innovate.
          </p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center mt-9 sm:mt-8"
        >
          <button 
            onClick={handleExploreClick}
            className="relative px-5 py-3 font-medium text-black bg-white/80 rounded-lg shadow-m hover:scale-110 transition duration-300 ease-in-out"
          >
            <span>Explore</span>
          </button>
        </motion.div>
      </div>

      <div ref={nextSectionRef} />
    </div>
  );
});

Hero.displayName = 'Hero';