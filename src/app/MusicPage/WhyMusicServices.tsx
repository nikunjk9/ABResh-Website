import React, { useState } from 'react';
import { Users, Sparkles, Trophy, ArrowRight } from 'lucide-react';

const WhyMusicServicesSecond = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    {
      number: '45+',
      title: 'Expert Team',
      description: 'Collaborate with industry veterans and chart-topping producers who bring decades of expertise to your music journey.',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-950/20 to-pink-950/20',
      gif: '/images/gif1.gif'
    },
    {
      number: '100',
      title: 'Custom Solution',
      description: 'Tailored music production and marketing strategies designed to amplify your unique sound and artistic vision.',
      icon: <Sparkles className="w-8 h-8" />,
      gradient: 'from-blue-600 to-cyan-600',
      bgGradient: 'from-blue-950/20 to-cyan-950/20',
      gif: '/images/gif2.gif'
    },
    {
      number: '10+',
      title: 'Success Stories',
      description: 'Join our roster of breakthrough artists whove achieved platinum records and chart-topping success globally.',
      icon: <Trophy className="w-8 h-8" />,
      gradient: 'from-amber-600 to-orange-600',
      bgGradient: 'from-amber-950/20 to-orange-950/20',
      gif: '/images/gif34.gif'
    }
  ];

  return (
    <section className="relative bg-black py-20 lg:py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14">
          <div className="inline-block">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-sm">
              <span className="text-sm text-purple-300 font-medium">Why Choose Us</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Elevate Your Music
            </span>
            <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-2">
              To New Heights
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join the revolution of artists who are redefining the music industry. 
            Our proven track record speaks for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* GIF container - Now with higher z-index */}
              <div 
                className={`
                  absolute left-1/2 -translate-x-1/2 -top-20 w-40 h-40
                  transform transition-all duration-700 ease-in-out z-20
                  ${hoveredCard === index ? 'opacity-100 translate-y-0 scale-105' : 'opacity-0 translate-y-8 scale-95'}
                `}
              >
                <img 
                  src={stat.gif}
                  alt={stat.title}
                  className="w-full h-full object-cover rounded-xl shadow-xl"
                />
              </div>

              <div className={`
                relative h-full p-8 rounded-2xl border border-purple-500/10
                backdrop-blur-xl transition-all duration-500 z-10
                ${hoveredCard === index ? 'bg-gradient-to-b ' + stat.bgGradient : 'bg-white/5'}
              `}>
                <div className={`
                  inline-flex items-center justify-center p-3 rounded-xl mb-6
                  bg-gradient-to-r ${stat.gradient}
                `}>
                  {stat.icon}
                </div>

                <div className="space-y-4">
                  <h3 className={`
                    text-5xl font-bold bg-gradient-to-r ${stat.gradient} 
                    bg-clip-text text-transparent transition-all duration-500
                  `}>
                    {stat.number}
                  </h3>
                  
                  <h4 className="text-xl font-semibold text-white">
                    {stat.title}
                  </h4>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {stat.description}
                  </p>

                  <div className={`
                    flex items-center gap-2 text-sm font-medium
                    transition-all duration-300 
                    ${hoveredCard === index ? 'text-white' : 'text-gray-500'}
                  `}>
                    Learn More 
                    <ArrowRight className={`
                      w-4 h-4 transition-transform duration-300
                      ${hoveredCard === index ? 'translate-x-1' : ''}
                    `} />
                  </div>
                </div>

                <div className={`
                  absolute inset-0 rounded-2xl transition-opacity duration-500
                  bg-gradient-to-r ${stat.gradient} -z-10 blur-lg opacity-0
                  ${hoveredCard === index ? 'opacity-20' : ''}
                `} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMusicServicesSecond;