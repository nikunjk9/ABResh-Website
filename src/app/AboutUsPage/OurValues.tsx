import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { DotLottiePlayer } from "@dotlottie/react-player";
import { ArrowUpRight, ChevronDown, ChevronRight } from 'lucide-react';

const OurValues = () => {
  const sectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const values = [
    {
      title: "Innovation First",
      description: "Pushing boundaries in digital experiences through cutting-edge technology and creative solutions. We believe in staying ahead of the curve to deliver tomorrow's solutions today.",
      icon: "/assets/lottie/tick.lottie",
      color: "from-violet-600 to-fuchsia-400"
    },
    {
      title: "Client Excellence",
      description: "Every project is a partnership. We're committed to understanding your unique needs and delivering solutions that exceed expectations while maintaining transparency throughout.",
      icon: "/assets/lottie/deliver.lottie",
      color: "from-fuchsia-500 to-purple-400"
    },
    {
      title: "Sustainable Impact",
      description: "Creating lasting positive change through our work. We focus on building sustainable solutions that benefit both our clients and the wider community, ensuring long-term success.",
      icon: "/assets/lottie/green.lottie",
      color: "from-purple-600 to-violet-400"
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 mt-12 overflow-hidden px-3 md:px-0">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-full h-full opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col lg:flex-row lg:items-start gap-6 md:gap-12 mb-8 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="relative inline-block">
              <h2 className="block mt-2 text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Our Core <br/> Values
              </h2>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:w-1/2 text-lg text-gray-400 leading-relaxed md:mt-6 text-left border-l border-zinc-800 pl-6"
          >
            At the heart of our organization lies a set of core values that drive everything we do. These principles shape our approach to innovation, guide our relationships, and define our commitment to excellence in the digital realm.
          </motion.p>
          
        </motion.div>

        {/* Values Grid */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-12 mb-14 md:mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-1 rounded-2xl bg-white/5  backdrop-blur-sm border border-purple-500/10">
                <div className=" p-6 md:p-8 rounded-xl space-y-6 rounded-2x">
                  <div className="h-32 relative flex items-center justify-center">
                    <DotLottiePlayer
                      src={value.icon}
                      autoplay
                      loop
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent from-white to-purple-200">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="pb-20 text-center"
        >
          <h2 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Ready to Make a Difference?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-8 py-4 rounded-full overflow-hidden"
          >

            {/* CTA Button */}
                        <div 
                          className="relative group"
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                        >
                          <div className={`
                            absolute inset-0 
                            rounded-xl blur-xl transition-opacity duration-500
                            ${isHovered ? 'opacity-100' : 'opacity-0'}
                          `} />
                          
                          <div className={`
                            relative flex items-center gap-3 px-5 md:px-8 py-4 rounded-xl
                            text-base md:text-lg font-medium transition-all duration-300
                            ${isHovered 
                              ? 'bg-gradient-to-r from-gray-500 to-white text-black transform -translate-y-1' 
                              : 'bg-gradient-to-r from-white to-gray-500 text-black shadow-lg'}
                          `}>
                            Start Your Project
                            <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
                              isHovered ? 'rotate-45' : ''
                            }`} />
                          </div>
                        </div>
          </motion.button>
          
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="absolute bottom-9 animate-bounce items-center text-center right-[622px]"
          >
            <ChevronDown className="w-8 h-8 text-white/50 items-center text-center" />
          </motion.div>
      </div>
    </section>
  );
};

export default OurValues;