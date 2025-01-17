import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { DotLottiePlayer } from "@dotlottie/react-player";
import { ChevronDown, ChevronRight } from 'lucide-react';

const OurValues = () => {
  const sectionRef = useRef(null);
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
    <section ref={sectionRef} className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-full h-full bg-[url('/api/placeholder/20/20')] bg-repeat opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col lg:flex-row lg:items-start gap-12 mb-24"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2 space-y-6"
          >
            <div className="relative inline-block">
              <h2 className="block mt-2 text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Our Core <br/> Values
              </h2>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:w-1/2 text-xl text-gray-400 leading-relaxed"
          >
            At the heart of our organization lies a set of core values that drive everything we do. These principles shape our approach to innovation, guide our relationships, and define our commitment to excellence in the digital realm.
          </motion.p>
          
        </motion.div>

        {/* Values Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-1 rounded-2xl bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm">
                <div className="bg-gray-900/80 p-8 rounded-xl space-y-6">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Ready to Make a Difference?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-8 py-4 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 transition-transform duration-500 group-hover:scale-110" />
            <span className="relative z-10 text-lg font-medium">Join Our Team</span>
          </motion.button>
          
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="absolute bottom-9 animate-bounce items-center text-center right-[622px]"
          >
            <ChevronDown className="w-8 h-8 text-purple-500 items-center text-center" />
          </motion.div>
      </div>
    </section>
  );
};

export default OurValues;