import React, { useState, useMemo } from 'react';
import { Film, Play } from 'lucide-react';

// Define the WorkItem interface
interface WorkItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
}

// Memoize static components
const StatItem = React.memo(({ value, label }: { value: string; label: string }) => (
  <div className="text-center md:text-left">
    <p className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</p>
    <p className="text-purple-200 text-sm">{label}</p>
  </div>
));

const ServiceItem = React.memo(({ name }: { name: string }) => (
  <div className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors duration-300 group">
    <Film className="w-4 h-4 group-hover:scale-110 transition-transform" />
    <span className="text-sm font-medium">{name}</span>
  </div>
));

const ActionButton = React.memo(({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => (
  <button className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white/10 hover:bg-white/20 
    text-white rounded-lg transition-all duration-300 w-full hover:scale-[1.02] active:scale-[0.98]">
    <Icon className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
    <span className="font-medium">{children}</span>
  </button>
));

const WorkCard = React.memo(({ 
  item, 
  size = 'small' 
}: { 
  item: WorkItem; 
  size?: 'small' | 'large' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const sizeClasses = useMemo(() => 
    size === 'large' ? 'p-8 text-2xl' : 'p-6 text-xl',
    [size]
  );
  
  return (
    <div
      className="group relative overflow-hidden rounded-2xl aspect-square hover:shadow-xl transition-all duration-500 ease-in-out cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
      
      <div className={`
        absolute inset-x-0 bottom-0 ${sizeClasses}
        flex flex-col transform translate-y-full group-hover:translate-y-0
        transition-transform duration-500 ease-out
      `}>
        <span className="inline-block text-purple-300 text-sm font-medium mb-2 
          transform translate-y-8 group-hover:translate-y-0 transition-all duration-500
          opacity-0 group-hover:opacity-100">
          {item.category}
        </span>
        
        <h3 className="text-white font-bold mb-2
          transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-75
          opacity-0 group-hover:opacity-100">
          {item.title}
        </h3>
        
        <p className={`text-white/90 ${size === 'large' ? 'text-lg' : 'text-sm'}
          transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100
          opacity-0 group-hover:opacity-100`}>
          {item.description}
        </p>
      </div>
    </div>
  );
});

// Memoize static data
const workItems = [
  {
    id: 1,
    image: '/images/Production1.jpg',
    title: "Cinematic Production",
    description: "Creating compelling visual narratives through state-of-the-art digital cinematography",
    category: "Production"
  },
  {
    id: 2,
    image: '/images/Production2.jpg',
    title: "Creative Direction",
    description: "Guiding creative vision from concept to final delivery with artistic excellence",
    category: "Direction"
  },
  {
    id: 3,
    image: '/images/Production4.jpg',
    title: "Advanced Post-Production",
    description: "Transforming raw footage into captivating stories with cutting-edge editing techniques",
    category: "Editing"
  },
  {
    id: 4,
    image: '/images/Production3.jpg',
    title: "Immersive Sound Design",
    description: "Crafting rich audio landscapes that elevate visual storytelling",
    category: "Audio"
  },
  {
    id: 5,
    image: '/images/Production5.jpg',
    title: "Dynamic Visual Effects",
    description: "Pushing creative boundaries with innovative visual effects and motion design",
    category: "VFX"
  }
] as const;

const services = ['Film Production', 'Creative Direction', 'Post-Production', 'Sound Engineering'] as const;
const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '15+', label: 'Countries Served' }
] as const;

const OurWork = () => {
  // Memoize the stats and services sections
  const statsSection = useMemo(() => (
    <div className="grid grid-cols-3 gap-8 mt-12">
      {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} />
      ))}
    </div>
  ), []);

  const servicesSection = useMemo(() => (
    <div className="grid grid-cols-2 gap-6">
      {services.map((service) => (
        <ServiceItem key={service} name={service} />
      ))}
    </div>
  ), []);

  return (
    <section className="relative bg-purple-950 py-32 overflow-hidden">
      <div className="absolute inset-0  opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Column */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <span className="inline-block text-base font-semibold text-purple-300 mb-4 tracking-wider 
                transform hover:translate-x-2 transition-transform cursor-default">
                OUR PORTFOLIO
              </span>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                Creative
                <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
            </div>
            {statsSection}
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-8">
              <p className="text-white/90 text-lg leading-relaxed">
                Welcome to our creative showcase, where imagination meets technical expertise. 
                Each project in our portfolio represents a unique story, expertly crafted through 
                our commitment to pushing creative boundaries and delivering exceptional results.
              </p>
              {servicesSection}
            </div>
            
            <div className="space-y-3 mt-8">
              <ActionButton icon={Play}>Watch Our Feature Reel</ActionButton>
              <ActionButton icon={Play}>View Latest Projects</ActionButton>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-3 space-y-4">
            <WorkCard item={workItems[0]} />
            <WorkCard item={workItems[1]} />
          </div>
          <div className="col-span-12 md:col-span-6">
            <WorkCard item={workItems[2]} size="large" />
          </div>
          <div className="col-span-12 md:col-span-3 space-y-4">
            <WorkCard item={workItems[3]} />
            <WorkCard item={workItems[4]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;