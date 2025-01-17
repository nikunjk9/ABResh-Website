import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import AboutUs from '@/assets/images/AboutUs.jpg';

interface AnimatedLineProps {
  className: string;
}

const HistorySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '200+', label: 'Events Annually' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  // Purple color scheme matching the timeline design
  const colors = {
    background: "from-black to-[#121212]",
    accent1: "from-purple-600 to-purple-400",
    accent2: "from-purple-500 to-purple-600",
    textAccent1: "text-purple-300",
    textAccent2: "text-purple-400",
    stats: "from-purple-400 to-purple-300"
  };

  const AnimatedLine: React.FC<AnimatedLineProps> = ({ className }) => (
    <motion.div 
      className={`absolute left-0 top-0 w-[2px] rounded-full ${className}`}
      initial={{ height: 0 }}
      whileInView={{ height: '100%' }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="absolute inset-0 animate-pulse" />
    </motion.div>
  );

  return (
    <section 
      ref={sectionRef} 
      className={`relative bg-gradient-to-b ${colors.background} text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden`}
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className={`absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r ${colors.accent1} rounded-full filter blur-[150px]`} />
        <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r ${colors.accent2} rounded-full filter blur-[150px]`} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full aspect-[5/6] max-w-2xl mx-auto lg:max-w-none group"
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${colors.background} via-transparent to-transparent z-10`} />
                <Image
                  src={AboutUs}
                  alt="Abresh Events History"
                  fill
                  className="object-cover object-center scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3"
            >
              <h2 className="relative inline-block text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                  Our History
                </span>
                <div className={`absolute -bottom-2 left-0 w-1/3 h-0.5 bg-gradient-to-r ${colors.accent1}`} />
              </h2>
              <p className="text-xl md:text-2xl font-light text-gray-400">
                Crafting Memorable Moments
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="relative group">
                <AnimatedLine className={`bg-gradient-to-b ${colors.accent1} group-hover:scale-y-110 transition-transform duration-300`} />
                <div className="pl-6 py-2 hover:pl-8 transition-all duration-300">
                  <h3 className={`text-lg font-semibold mb-2 ${colors.textAccent1}`}>Beginning of Excellence</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Founded in 2008, Abresh Events emerged from a vision to transform ordinary gatherings into extraordinary experiences. What started as a boutique event planning service has evolved into one of the region&apos;s most respected names in event management.
                  </p>
                </div>
              </div>
              
              <div className="relative group">
                <AnimatedLine className={`bg-gradient-to-b ${colors.accent2} group-hover:scale-y-110 transition-transform duration-300`} />
                <div className="pl-6 py-2 hover:pl-8 transition-all duration-300">
                  <h3 className={`text-lg font-semibold mb-2 ${colors.textAccent2}`}>Innovation & Growth</h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Today, we pride ourselves on blending traditional event planning expertise with cutting-edge technology and sustainable practices. Our team of dedicated professionals brings creativity and precision to every project.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${colors.stats} bg-clip-text text-transparent`}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistorySection;