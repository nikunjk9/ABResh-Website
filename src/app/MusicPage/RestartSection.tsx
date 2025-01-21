import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Send, MousePointer2 } from 'lucide-react';

interface StarProps {
  delay: number;
  duration: number;
  top: number;
  size: number;
  initialPosition: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const Star: React.FC<StarProps> = ({ delay, duration, top, size, initialPosition }) => (
  <div 
    className="absolute rounded-full will-change-transform bg-white"
    style={{
      top: `${top}%`,
      left: `${initialPosition}%`,
      width: `${size}px`,
      height: `${size}px`,
      opacity: Math.random() * 0.7 + 0.3,
      transform: 'translateZ(0)',
      animation: `starMove ${duration}s linear infinite`,
    }}
  />
);

const RestartSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  // Pre-calculate stars with varying sizes
  const stars = React.useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      delay: 0,
      duration: Math.random() * 15 + 20, // Between 20-35 seconds
      top: Math.random() * 100,
      size: Math.random() * 2 + 1, // Random size between 1-3px
      initialPosition: Math.random() * 100, // Random initial position
    })),
    []
  );

  return (
    <section className="relative overflow-hidden bg-black">
      <style>{`
        @keyframes starMove {
          from {
            transform: translateX(0) translateZ(0);
          }
          to {
            transform: translateX(100vw) translateZ(0);
          }
        }
      `}</style>

      {/* Stars Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none ">
        {stars.map((star) => (
          <Star key={star.id} {...star} />
        ))}
      </div>

      {/* Mouse Gradient Layer - Separate from stars */}
      <div 
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.3), transparent 30%)`,
          willChange: 'background',
        }}
      />
      
      <div 
        className="relative py-32 px-6"
        onMouseMove={handleMouseMove}
      >
        <div className="max-w-7xl mx-auto">
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Sparkles className="absolute top-1/4 left-1/4 w-6 h-6 text-purple-500 animate-pulse" />
            <MousePointer2 className="absolute top-1/3 right-1/3 w-6 h-6 text-indigo-500 animate-bounce" />
            <Send className="absolute bottom-1/3 right-1/4 w-6 h-6 text-purple-400 animate-pulse" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-8">
            {/* Pill Label */}
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10">
              <span className="text-purple-300 text-sm">Let's Create Together</span>
            </div>

            {/* Main Content */}
            <div className="space-y-6 max-w-4xl">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Ready to Transform Your
                <span className="block bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Musical Vision?
                </span>
              </h2>
              
              <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Turn your creative dreams into reality with our state-of-the-art studio and expert team. 
                Let's create something extraordinary together.
              </p>
            </div>

            {/* CTA Button */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={`
                absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600
                rounded-xl blur-xl transition-opacity duration-500
                ${isHovered ? 'opacity-100' : 'opacity-0'}
              `} />
              
              <button className={`
                relative flex items-center gap-3 px-8 py-4 rounded-xl
                text-lg font-medium transition-all duration-300
                ${isHovered 
                  ? 'bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 text-white transform -translate-y-1' 
                  : 'bg-white text-purple-900 shadow-lg'}
              `}>
                Start Your Project
                <ArrowUpRight className={`w-5 h-5 transition-transform duration-300 ${
                  isHovered ? 'rotate-45' : ''
                }`} />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-purple-500/20">
              {[
                { label: 'Projects Completed', value: '500+' },
                { label: 'Happy Clients', value: '250+' },
                { label: 'Industry Awards', value: '15+' },
                { label: 'Years Experience', value: '12+' }
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-default">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestartSection;