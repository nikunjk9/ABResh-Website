import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Rocket, Globe2, Building2, Target } from 'lucide-react';
import Image from 'next/image';

const TimelineSection = () => {
    const timelineData = [
      {
        year: "2021",
        title: "Vision Takes Flight",
        description: "Embarked on an extraordinary journey to revolutionize digital experiences with boundless creativity and unwavering determination.",
        icon: Rocket,
        highlights: [
          {
            title: "Founding Team",
            icon: Users,
            items: [
              "Assembled an elite team of 10 visionary professionals",
              "Successfully orchestrated breakthrough digital experiences",
              "Established core values of innovation and excellence"
            ]
          },
          
        ]
      },
      {
        year: "2022",
        title: "Innovation Unleashed",
        description: "Pushed the boundaries of digital innovation, delivering cutting-edge solutions that redefined industry standards.",
        icon: Building2,
        highlights: [
          {
            title: "Landmark Projects",
            icon: Rocket,
            items: [
              "UGM Website: Revolutionized educational management",
              "AISF Platform: Transformed student engagement",
              "Abresh Website: Pioneered modern e-commerce",
              "Events Hub: Reimagined virtual experiences",
              "AISF Mobile: Enhanced academic connectivity"
            ]
          }
        ]
      },
      {
        year: "2023",
        title: "National Recognition",
        description: "Established ourselves as a dominant force in the digital landscape, expanding our influence across major metropolitan hubs.",
        icon: Globe2,
        highlights: [
          {
            title: "Geographic Expansion",
            icon: Building2,
            items: [
              "Mumbai: Established tech innovation center",
              "Kolkata: Launched digital solutions hub",
              "New Delhi: Created flagship development center"
            ]
          },
          
        ]
      },
      {
        year: "2024",
        title: "Global Horizons",
        description: "Extended our digital excellence worldwide, partnering with international clients to create transformative solutions.",
        icon: Globe2,
        highlights: [
          {
            title: "International Presence",
            icon: Building2,
            items: [
              "Dubai: Established Middle East headquarters",
              "Saudi Arabia: Launched digital transformation initiatives",
              "Europe: Partnered with leading tech innovators"
            ]
          }
        ]
      }
    ];

  return (
    <section className="relative bg-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-9 md:mb-44"
        >
          <div className="relative w-full h-[300px] mb-8 rounded-xl overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="Timeline Header"
              layout="fill"
              objectFit="cover"
              className="opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white bg-gradient-to-r from-white via-gray-200 to-gray-400 text-transparent bg-clip-text">
            Our Journey
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-2 md:px-0">
            Building the future of digital innovation, we&apos;ve grown into a dynamic organization that thrives on innovation, creativity, and customer-centric solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative px-2 md:px-0">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full md:w-px bg-purple-500/20 " />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'} md:-mt-32`}
            >
              <div className={`relative md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="bg-gray-900 rounded-xl overflow-hidden border border-white/10 
                    hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
                >
                  <div className="h-1 bg-gradient-to-r from-purple-600 to-purple-400" />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm 
                        bg-purple-900/30 text-purple-300 border border-purple-500/20">
                        <Calendar className="w-4 h-4 mr-2" />
                        {item.year}
                      </span>
                      <item.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>

                  <div className="border-t border-white/10">
                    {item.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="p-6 border-b border-white/10 last:border-0 
                        hover:bg-purple-900/10 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <highlight.icon className="w-5 h-5 text-purple-400" />
                          <h4 className="font-medium text-white">{highlight.title}</h4>
                        </div>
                        <ul className="space-y-2">
                          {highlight.items.map((point, bIndex) => (
                            <li key={bIndex} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                              <span className="text-sm text-gray-300">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <div className={`absolute ${index % 2 === 0 ? 'right-0' : 'left-0'} 
                  top-1/2 transform -translate-y-1/2 w-8 h-px bg-purple-500/20`} />
                
                <div className={`absolute ${index % 2 === 0 ? 'right-3 md:-right-2' : '-left-3 md:-left-8'} 
                  top-1/2 transform translate-x-1/2 -translate-y-1/2`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="w-6 h-6 bg-purple-500 rounded-full ring-2 ring-black"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;