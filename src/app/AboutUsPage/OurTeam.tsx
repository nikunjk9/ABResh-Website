import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import backgroundImage from "@/assets/images/background.png";

import person1 from "@/assets/images/person/person1.jpg";
import person2 from "@/assets/images/person/person2.jpg";
import person3 from "@/assets/images/person/person3.jpg";
import person4 from "@/assets/images/person/person4.jpg";
import person5 from "@/assets/images/person/person5.jpg";
import person6 from "@/assets/images/person/person6.jpg";
import person7 from "@/assets/images/person/person7.jpg";
import person8 from "@/assets/images/person/person8.jpg";

const teamMembers = [
  { name: 'Aftab Sagar', img: person1, role: 'Founder & CEO of ABResh' },
  { name: 'Kushal Saxsen', img: person2, role: 'Mern Stack Developer' },
  { name: 'Nikunj Kumar', img: person3, role: 'Mern Stack Developer' },
  { name: 'Vidhit Saxsena', img: person4, role: 'Mern Stack Developer' },
  { name: 'Pratibha', img: person5, role: 'UI/UX Design' },
  { name: 'Somar', img: person6, role: 'App Devloper' },
  { name: 'Smriti', img: person7, role: 'UI/UX Designer' },
  { name: 'Sukanya ', img: person8, role: 'Content Strategist' },
];

const OurTeam = () => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black md:py-4 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(2px)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h2
            className="text-4xl md:text-4xl lg:text-6xl mb-5 md:mb-6 font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Team
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Meet the talented individuals who make innovation possible. Our diverse team brings together expertise from various domains to deliver exceptional results.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-6 lg:gap-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-1 rounded-2xl bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm">
                <div className="bg-gray-900/80 rounded-xl overflow-hidden shadow-2xl">
                  {/* Image Container */}
                  <div className="relative h-48 md:h-80 mb-auto overflow-hidden">
                    <Image
                      src={member.img}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="px-3.5  py-3 bg-white/10 rounded-full hover:bg-gray-500 transition-colors"
                        >
                          <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 " />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="px-3.5  py-3 bg-white/10 rounded-full hover:bg-gray-500 transition-colors"
                        >
                          <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                  {/* Text Content */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-white group-hover:text-gray-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-400">{member.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 md:mt-16"
        >
          {/* CTA Button */}
          <div 
            className="relative group inline-flex"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`
              absolute inset-0 
              rounded-xl blur-xl transition-opacity duration-500
              ${isHovered ? 'opacity-100' : 'opacity-0'}
            `} />
                                    
            <button className={`
              relative flex items-center gap-3 px-3 md:px-8 py-4 rounded-xl
              text-sm md:text-lg font-medium transition-all duration-300
              ${isHovered 
                ? 'bg-gradient-to-r from-gray-500 to-white text-black transform -translate-y-1' 
                : 'bg-gradient-to-r from-white to-gray-500 text-black shadow-lg'}
            `}>
              Start Your Project
              <ArrowUpRight className={`w-5 h-5 transition-transform duration-300 ${
                isHovered ? 'rotate-45' : ''
              }`} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
