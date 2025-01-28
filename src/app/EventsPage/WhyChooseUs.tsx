import React from 'react';
import { Target, Gem, Trophy, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="relative group">
    {/* Glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-slate-800/20 rounded-xl blur transition-all group-hover:blur-xl" />
    
    {/* Card container */}
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-slate-800 p-8 rounded-xl border border-gray-500/50 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-slate-700 group-hover:scale-[1.02] group-hover:border-gray-400/50 text-center">
      {/* Shine effect */}
      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      
      {/* Content container */}
      <div className="relative z-10">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/80 mb-6 mx-auto ring-1 ring-gray-500/50">
          <div className="text-gray-400 group-hover:text-gray-300 transition-all duration-300 transform group-hover:scale-110">
            <Icon size={28} strokeWidth={1.5} />
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-200">
          {title}
        </h3>
        <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-all duration-300">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const features: FeatureCardProps[] = [
    {
      icon: Target,
      title: "Proven Strategies",
      description: "We utilize data-driven strategies and innovative techniques to deliver results that align with your goals, ensuring measurable success for every project."
    },
    {
      icon: Trophy,
      title: "Tailored Campaigns",
      description: "Our customized campaigns are designed to fit your unique vision, audience, and objectives, ensuring every initiative resonates and creates impact."
    },
    {
      icon: Gem,
      title: "Industry Expertise",
      description: "With years of experience across diverse industries, we bring valuable insights and unmatched professionalism to every project we undertake."
    }
  ];

  return (
    <section className="bg-black py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(64,64,64,0.15),transparent_70%)]" />
      <div className="container mx-auto px-4 lg:px-0 2xl:px-0 relative">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-3 md:px-20 lg:px-0 2xl:px-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;