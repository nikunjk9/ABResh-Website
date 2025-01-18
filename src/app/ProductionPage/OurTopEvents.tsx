import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Music2, Calendar, MapPin, Users, Clock } from "lucide-react";

interface City {
    name: string;
    image: string | StaticImageData;
    title: string;
    date: string;
    description: string;
    attendees?: number;
    duration?: string;
}

const cities: City[] = [
    {
        name: "Delhi",
        image: '/images/event3.jpg',
        title: "Live Daljit Concert",
        date: "22 Nov, 2024",
        description: "Experience the magic of Daljit Dosanjh live in concert. A phenomenal show featuring his biggest hits and new releases, accompanied by a full live band and spectacular visual effects.",
        attendees: 15000,
        duration: "3 hours"
    },
    {
        name: "Mumbai",
        image: '/images/event5.jpg',
        title: "Mumbai Night Bash",
        date: "18 Oct, 2024",
        description: "A star-studded evening featuring multiple artists, cutting-edge sound systems, and immersive visual experiences.",
        attendees: 12000,
        duration: "4 hours"
    },
    {
        name: "Bangalore",
        image: '/images/event7.jpg',
        title: "Bangalore Beats",
        date: "5 Aug, 2024",
        description: "A fusion of classical and modern music, bringing together traditional instruments with electronic beats.",
        attendees: 8000,
        duration: "3.5 hours"
    },
    {
        name: "Chennai",
        image: '/images/event4.jpg',
        title: "Chennai Classical Night",
        date: "12 Sep, 2024",
        description: "An evening of traditional Carnatic music featuring renowned artists and modern interpretations.",
        attendees: 6000,
        duration: "4 hours"
    },
    {
        name: "Kolkata",
        image: '/images/event9.jpg',
        title: "Bengali Rock Fusion",
        date: "30 Jul, 2024",
        description: "A unique blend of Bengali folk and rock music, creating an unforgettable cultural experience.",
        attendees: 9000,
        duration: "5 hours"
    },
    {
        name: "Hyderabad",
        image: '/images/event6.jpg',
        title: "Techno Nights",
        date: "25 Aug, 2024",
        description: "Electronic music festival featuring both international and local DJs with immersive visuals.",
        attendees: 11000,
        duration: "6 hours"
    },
    {
        name: "Pune",
        image: '/images/event1.jpg',
        title: "Indie Music Fest",
        date: "15 Sep, 2024",
        description: "Showcasing the best independent artists from across the country with multiple stages.",
        attendees: 7500,
        duration: "8 hours"
    },
    {
        name: "Ahmedabad",
        image: '/images/event8.jpg',
        title: "Folk Fusion Festival",
        date: "20 Oct, 2024",
        description: "Traditional Gujarati folk music meets modern arrangements in this unique cultural celebration.",
        attendees: 8500,
        duration: "4 hours"
    },
    {
        name: "Lucknow",
        image: '/images/event2.jpg',
        title: "Sufi Night",
        date: "5 Nov, 2024",
        description: "An evening of soul-stirring Sufi music featuring renowned artists from across the country.",
        attendees: 5500,
        duration: "3 hours"
    },
    {
        name: "Jaipur",
        image: '/images/event10.jpg',
        title: "Desert Rock Festival",
        date: "12 Dec, 2024",
        description: "Rock music festival set against the backdrop of desert landscapes with multiple international bands.",
        attendees: 13000,
        duration: "7 hours"
    }
];

export default function PreviousConcerts() {
    const [selectedCity, setSelectedCity] = useState<City>(cities[0]);
    const [hoveredCity, setHoveredCity] = useState<string | null>(null);

    return (
        <section className="bg-black text-white py-11 mt-12 relative overflow-hidden">
            <div className="absolute inset-0 bg--black" />
            
            <div className="px-24 mx-auto relative">
                {/* Header */}
                <div className="text-center mb-14">
                    <div className="flex items-center justify-center gap-2 text-purple-400 mb-4">
                        <Music2 className="w-5 h-5" />
                        <span className="text-sm font-medium tracking-wider uppercase">Production Portfolio</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                            Previous Productions
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore our collection of successfully executed live events across major cities, We bring creativity, technical excellence, and innovation to every project.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Left side - Scrollable City List */}
                    <div className="lg:col-span-1 bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 h-[600px]">
                        <h3 className="text-xl font-semibold mb-6">Select Location</h3>
                        <div className="h-[500px] overflow-y-auto pr-4 space-y-4 customScrollbar ">
                            {cities.map((city) => (
                                <button
                                    key={city.name}
                                    onClick={() => setSelectedCity(city)}
                                    onMouseEnter={() => setHoveredCity(city.name)}
                                    onMouseLeave={() => setHoveredCity(null)}
                                    className={`w-full group flex items-center gap-4 p-4 rounded-lg transition-all duration-300  ${
                                        selectedCity.name === city.name
                                            ? "bg-purple-500/20 border border-purple-500/40"
                                            : "hover:bg-purple-500/10 border border-transparent"
                                    }`}
                                >
                                    <MapPin className={`w-5 h-5 ${
                                        selectedCity.name === city.name ? "text-purple-400" : "text-gray-400"
                                    }`} />
                                    <div className="text-left ">
                                        <h4 className={`font-medium transition-colors duration-300 ${
                                            selectedCity.name === city.name ? "text-purple-400" : "text-white"
                                        }`}>
                                            {city.name}
                                        </h4>
                                        <p className="text-sm text-gray-400">{city.date}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right side - Selected City Details */}
                    <div className="lg:col-span-2">
                        <div className="relative rounded-xl overflow-hidden h-[600px] group">
                            <Image
                                src={selectedCity.image}
                                alt={`Concert in ${selectedCity.name}`}
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            {/* Content Container */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <div className="relative p-8">
                                    {/* Main Content */}
                                    <div className="space-y-4 transform transition-all duration-500 ease-in-out translate-y-0 group-hover:-translate-y-24">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-2 px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                                                <Calendar className="w-4 h-4" />
                                                {selectedCity.date}
                                            </span>
                                            <span className="flex items-center gap-2 px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                                                <Clock className="w-4 h-4" />
                                                {selectedCity.duration}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-bold">
                                            {selectedCity.title}
                                        </h3>
                                        <p className="text-gray-300">
                                            {selectedCity.description}
                                        </p>
                                    </div>

                                    {/* Additional Info */}
                                    <div className="absolute inset-x-0 bottom-0 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out pt-4">
                                        <div className="grid grid-cols-2 gap-4 px-8 mb-4">
                                            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                                    <Users className="w-4 h-4" />
                                                    <span>Total Attendees</span>
                                                </div>
                                                <p className="text-2xl font-bold text-white/90">
                                                    {selectedCity.attendees?.toLocaleString()}
                                                </p>
                                            </div>
                                            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                                    <Clock className="w-4 h-4" />
                                                    <span>Event Duration</span>
                                                </div>
                                                <p className="text-2xl font-bold text-white/90">
                                                    {selectedCity.duration}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .customScrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .customScrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 3px;
                }
                .customScrollbar::-webkit-scrollbar-thumb {
                    background: rgba(139, 92, 246, 0.3);
                    border-radius: 3px;
                }
                .customScrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(139, 92, 246, 0.5);
                }
            `}</style>
        </section>
    );
}