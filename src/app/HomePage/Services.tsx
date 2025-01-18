import React, { useState } from "react";
import { motion } from "framer-motion";
import { DotLottiePlayer } from "@dotlottie/react-player";
import {
    ChevronRight,
    Target,
    MousePointer,
    Globe,
    MailOpen,
    Users,
    BarChart,
    Megaphone,
    ShieldAlert,
    Feather,
    Calendar,
    Award,
    Newspaper,
    Mic2,
    Sparkles,
    Code,
    Cloud,
    Database,
    Lock,
    Smartphone,
    Laptop,
    Server
} from "lucide-react";

const tabs = [
    {
        id: 0,
        icon: "/assets/lottie/marketing.lottie",
        title: "Digital Marketing",
        description: "Harness the power of online tools to reach your audience effectively.",
        features: [
            { name: "Social Media Management", icon: Users },
            { name: "Search Engine Optimization (SEO)", icon: Target },
            { name: "Pay-Per-Click (PPC) Ads", icon: MousePointer },
            { name: "Content Creation", icon: Feather },
            { name: "Email Marketing", icon: MailOpen },
            { name: "Influencer Marketing", icon: Mic2 },
            { name: "Analytics and Reporting", icon: BarChart },
        ],
        gradient: "from-purple-900 to-indigo-900",
        activeGradient: "from-purple-800 to-indigo-800",
        borderColor: "border-purple-500/50",
        ringColor: "ring-purple-500/50",
        iconColor: "text-purple-400",
        
    },
    {
        id: 1,
        icon: "/assets/lottie/public.lottie",
        title: "Public Relations",
        description: "Shape public perception and build trust through strategic communication.",
        features: [
            { name: "Media Relations", icon: Newspaper },
            { name: "Crisis Management", icon: ShieldAlert },
            { name: "Brand Storytelling", icon: Feather },
            { name: "Event Promotion", icon: Calendar },
            { name: "Reputation Management", icon: Award },
            { name: "Press Release Distribution", icon: Megaphone },
            { name: "Thought Leadership", icon: Globe },
        ],
        gradient: "from-blue-900 to-cyan-900",
        activeGradient: "from-blue-800 to-cyan-800",
        borderColor: "border-blue-500/50",
        ringColor: "ring-blue-500/50",
        iconColor: "text-blue-400",
    },
    {
        id: 2,
        icon: "/assets/lottie/tick.lottie",
        title: "Technology Solutions",
        description: "Comprehensive IT and software solutions to power your digital transformation.",
        features: [
            { name: "Custom Software Development", icon: Code },
            { name: "Cloud Computing Services", icon: Cloud },
            { name: "Database Management", icon: Database },
            { name: "Cybersecurity Solutions", icon: Lock },
            { name: "Mobile App Development", icon: Smartphone },
            { name: "Web Development", icon: Laptop },
            { name: "IT Infrastructure", icon: Server },
        ],
        gradient: "from-gray-900 to-slate-800",
        activeGradient: "from-gray-800 to-slate-700",
        borderColor: "border-gray-500/50",
        ringColor: "ring-gray-500/50",
        iconColor: "text-gray-400",
    },
];

export const Services = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="services" className="bg-black relative overflow-hidden py-10 px-4">
            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 opacity-50 blur-3xl"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-4 text-white flex justify-center items-center gap-4">
                        Our Services
                        <Sparkles className="text-yellow-400 animate-pulse" size={48} />
                    </h2>
                    <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-400">
                        Transforming your digital presence with cutting-edge strategies and innovative communication solutions.
                    </p>
                </motion.div>

                {/* Responsive Layout */}
                <div className="grid grid-cols-1 gap-8 w-full md:w-[70%] lg:w-[100%] lg:grid-cols-2 mx-auto">
                    {/* Left: Tabs (lg and md only) */}
                    <div className="hidden md:flex flex-col space-y-4">
                        {tabs.map((tab, index) => (
                            <motion.div
                                key={tab.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{
                                    opacity: activeTab === index ? 1 : 0.7,
                                    scale: activeTab === index ? 1 : 0.95,
                                }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setActiveTab(index)}
                                className={`cursor-pointer rounded-xl border ${
                                    activeTab === index
                                        ? `${tab.borderColor} ring-2 ${tab.ringColor} shadow-lg`
                                        : "border-white/10 hover:border-white/20"
                                } bg-gradient-to-br ${
                                    activeTab === index ? tab.activeGradient : tab.gradient
                                } p-4 transform transition-all duration-300 hover:scale-105`}
                            >
                                {/* Tab Header */}
                                <div className="flex items-center space-x-4">
                                    <div className="h-14 w-14 bg-white/10 rounded-xl flex items-center justify-center">
                                        <DotLottiePlayer
                                            src={tab.icon}
                                            className="h-10 w-10"
                                            autoplay
                                            loop
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{tab.title}</h3>
                                        <p className="text-sm text-white/80">{tab.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Active Tab Content */}
                    <div className="hidden md:block">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className={`space-y-4 p-6 rounded-xl bg-gradient-to-br ${tabs[activeTab].gradient} shadow-lg ${tabs[activeTab]}`}
                        >
                            <div className="flex items-center space-x-4 mb-6">
    <div className="h-16 w-16 bg-white/10 rounded-xl flex items-center justify-center">
        <DotLottiePlayer
            src={tabs[activeTab].icon}
            className="h-12 w-12"
            autoplay
            loop
        />
    </div>
    <h3 className="text-3xl font-bold text-white">
        {tabs[activeTab].title}
    </h3>
</div>
                            <p className="text-white/80 mb-6">{tabs[activeTab].description}</p>
                            {tabs[activeTab].features.map((feature, index) => {
                                const FeatureIcon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3 text-white/90"
                                    >
                                        <FeatureIcon size={20} className={tabs[activeTab].iconColor} />
                                        <span>{feature.name}</span>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>

                {/* Mobile Design */}
                <div className="block md:hidden">
                    <div className="grid grid-cols-1 gap-4">
                        {tabs.map((tab, index) => (
                            <motion.div
                                key={tab.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{
                                    opacity: activeTab === index ? 1 : 0.7,
                                    scale: activeTab === index ? 1 : 0.95,
                                }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setActiveTab(index)}
                                className={`cursor-pointer rounded-2xl border ${
                                    activeTab === index
                                        ? `${tab.borderColor} ring-2 ${tab.ringColor} shadow-lg`
                                        : "border-white/10 hover:border-white/20"
                                } bg-gradient-to-br ${
                                    activeTab === index ? tab.activeGradient : tab.gradient
                                } p-6 transform transition-all duration-300 hover:scale-105`}
                            >
                                {/* Service Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="h-16 w-16 bg-white/10 rounded-xl flex items-center justify-center">
                                            <DotLottiePlayer
                                                src={tab.icon}
                                                className="h-12 w-12"
                                                autoplay
                                                loop
                                            />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">{tab.title}</h3>
                                    </div>
                                    <ChevronRight
                                        className={`text-white transition-transform ${
                                            activeTab === index ? "rotate-90" : ""
                                        }`}
                                        size={24}
                                    />
                                </div>

                                {/* Description */}
                                <p className="text-white/80 mb-6">{tab.description}</p>

                                {/* Features List */}
                                {activeTab === index && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="space-y-3"
                                    >
                                        {tab.features.map((feature, featureIndex) => {
                                            const FeatureIcon = feature.icon;
                                            return (
                                                <div
                                                    key={featureIndex}
                                                    className="flex items-center space-x-3 text-white/90"
                                                >
                                                    <FeatureIcon size={20} className={tab.iconColor} />
                                                    <span>{feature.name}</span>
                                                </div>
                                            );
                                        })}
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;