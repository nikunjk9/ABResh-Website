'use client';
import { useState } from "react";
import Image from "next/image";
import mos from "@/assets/images/MOS.png";
import { StaticImageData } from "next/image";

// Define interface for service object
interface Service {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
}

const services: Service[] = [
    {
        id: 1,
        title: "Audio Recording",
        description: "Professional audio recording services tailored for artists. Professional audio recording services tailored for artists. Professional audio recording services tailored for artists.",
        image: mos,
    },
    {
        id: 2,
        title: "Music Composition",
        description:
            "Custom compositions for films, commercials, and individual projects. Custom compositions for films, commercials, and individual projects. Custom compositions for films, commercials, and individual projects.",
        image: mos,
    },
    {
        id: 3,
        title: "Mixing and Mastering",
        description:
            "High-quality mixing and mastering to bring your music to life. High-quality mixing and mastering to bring your music to life. High-quality mixing and mastering to bring your music to life.",
        image: mos,
    },
    {
        id: 4,
        title: "Session Musicians",
        description:
            "Access top session musicians to elevate your musical projects. Access top session musicians to elevate your musical projects. Access top session musicians to elevate your musical projects.",
        image: mos,
    },
];

export default function OurServices() {
    const [activeService, setActiveService] = useState<Service>(services[0]);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const handleServiceClick = (service: Service) => {
        setIsAnimating(true);
        setActiveService(service);
        // Reset animation state after animation completes
        setTimeout(() => setIsAnimating(false), 500);
    };

    return (
        <section className="bg-black text-white px-4 py-10 lg:py-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col justify-start items-start">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Services</h2>
                    <p className="text-gray-400 text-xl mb-10">
                        Lorem Ipsum has been the industry&apos;s standard dummy text. <br />Lorem Ipsum
                        is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
                {/* Left Section */}
                <div>
                    <ul className="mt-8 space-y-10">
                        {services.map((service, index) => (
                            <li key={service.id}>
                                <div
                                    className={`cursor-pointer flex items-center justify-between ${
                                        activeService.id === service.id
                                            ? "text-purple-500"
                                            : "text-gray-300"
                                    }`}
                                    onClick={() => handleServiceClick(service)}
                                >
                                    <span className="flex items-center space-x-3">
                                        <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-400">{index + 1}.</span>
                                        <span className="text-xl md:text-2xl lg:text-3xl font-bold">{service.title}</span>
                                    </span>
                                    <span
                                        style={{
                                            transform: activeService.id === service.id ? "rotate(90deg)" : "rotate(0deg)",
                                            transition: "transform 0.3s ease-in-out",
                                        }}
                                        className="text-xl md:text-2xl lg:text-3xl"
                                    >
                                        ↗
                                    </span>
                                </div>
                                {index < services.length && <hr className="border-white mt-4" />}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section */}
                <div className="relative">
                    <div className="rounded-xl overflow-hidden border-2 border-purple-500 relative">
                        <Image
                            src={activeService.image}
                            alt={activeService.title}
                            width={800}
                            height={320}
                            className="w-full h-96 object-cover brightness-90"
                        />
                        {/* Animated Overlay Text */}
                        <div 
                            className={`absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4 transition-all duration-500 ease-in-out ${
                                isAnimating 
                                    ? 'translate-y-full opacity-0' 
                                    : 'translate-y-0 opacity-100'
                            }`}
                        >
                            <h3 className="text-xl font-bold mb-2">{activeService.title}</h3>
                            <p className="text-white text-sm mb-2">{activeService.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// 'use client';
// import { useState } from "react";
// import Image from "next/image";
// import mos from "@/assets/images/MOS.png";

// const services = [
//     {
//         id: 1,
//         title: "Audio Recording",
//         description: "Professional audio recording services tailored for artists. Professional audio recording services tailored for artists. Professional audio recording services tailored for artists.",
//         image: mos, // Replace with actual image URLs or static imports
//     },
//     {
//         id: 2,
//         title: "Music Composition",
//         description:
//             "Custom compositions for films, commercials, and individual projects. Custom compositions for films, commercials, and individual projects. Custom compositions for films, commercials, and individual projects.",
//         image: mos, // Static image import
//     },
//     {
//         id: 3,
//         title: "Mixing and Mastering",
//         description:
//             "High-quality mixing and mastering to bring your music to life. High-quality mixing and mastering to bring your music to life. High-quality mixing and mastering to bring your music to life.",
//         image: mos, // Replace with actual image URLs or static imports
//     },
//     {
//         id: 4,
//         title: "Session Musicians",
//         description:
//             "Access top session musicians to elevate your musical projects. Access top session musicians to elevate your musical projects. Access top session musicians to elevate your musical projects.",
//         image: mos, // Replace with actual image URLs or static imports
//     },
// ];

// export default function OurServices() {
//     const [activeService, setActiveService] = useState(services[0]);

//     return (
//         <section className="bg-black text-white px-4 py-10 lg:py-16">
//             <div className="max-w-7xl mx-auto">
//                 <div className="flex flex-col justify-start items-start">
//                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Services</h2>
//                     <p className="text-gray-400 text-xl mb-10">
//                         Lorem Ipsum has been the industry's standard dummy text. <br />Lorem Ipsum
//                         is simply dummy text of the printing and typesetting industry.
//                     </p>
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
//                 {/* Left Section */}
//                 <div>
//                     <ul className="mt-8 space-y-10">
//                         {services.map((service, index) => (
//                             <li key={service.id}>
//                                 <div
//                                     className={`cursor-pointer flex items-center justify-between ${activeService.id === service.id
//                                         ? "text-purple-500"
//                                         : "text-gray-300"
//                                         }`}
//                                     onClick={() => setActiveService(service)}
//                                 >
//                                     <span className="flex items-center space-x-3">
//                                         {/* Numbering */}
//                                         <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-400">{index + 1}.</span>
//                                         {/* Service Title */}
//                                         <span className="text-xl md:text-2xl lg:text-3xl font-bold">{service.title}</span>
//                                     </span>
//                                     {/* Arrow */}
//                                     <span
//                                         style={{
//                                             transform: activeService.id === service.id ? "rotate(90deg)" : "rotate(0deg)",
//                                             transition: "transform 0.3s ease-in-out",
//                                         }}
//                                         className="text-xl md:text-2xl lg:text-3xl"
//                                     >
//                                         ↗
//                                     </span>
//                                 </div>
//                                 {/* Horizontal Line */}
//                                 {index < services.length && <hr className="border-white mt-4" />}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Right Section */}
//                 <div className="relative">
//                     <div className="rounded-xl overflow-hidden border-2 border-purple-500 relative">
//                         <Image
//                             src={activeService.image}
//                             alt={activeService.title}
//                             width={800} // Specify desired width
//                             height={320} // Specify desired height
//                             className="w-full h-96 object-cover brightness-90"
//                         />
//                         {/* Overlay Text */}
//                         <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4">
//                             <h3 className="text-xl font-bold mb-2">{activeService.title}</h3>
//                             <p className="text-white text-sm mb-2">{activeService.description}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


// 'use client'
// import { useState } from "react";
// import mos from "@/assets/images/MOS.png"

// const services = [
//     {
//         id: 1,
//         title: "Audio Recording",
//         description: "Professional audio recording services tailored for artists.",
//         image: "/audio-recording.jpg", // Replace with actual image URLs
//     },
//     {
//         id: 2,
//         title: "Music Composition",
//         description:
//             "Custom compositions for films, commercials, and individual projects.",
//         image: mos, // Replace with actual image URLs
//     },
//     {
//         id: 3,
//         title: "Mixing and Mastering",
//         description:
//             "High-quality mixing and mastering to bring your music to life.",
//         image: "/mixing-mastering.jpg", // Replace with actual image URLs
//     },
//     {
//         id: 4,
//         title: "Session Musicians",
//         description:
//             "Access top session musicians to elevate your musical projects.",
//         image: "/session-musicians.jpg", // Replace with actual image URLs
//     },
// ];

// export default function OurServices() {
//     const [activeService, setActiveService] = useState(services[0]);

//     return (
//         <section className="bg-black text-white px-4 py-10 lg:py-16">
//             <div className="max-w-7xl mx-auto">
//                 <div className="flex flex-col justify-start items-start">
//                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Services</h2>
//                     <p className="text-gray-400 text-xl mb-10">
//                         Lorem Ipsum has been the industry's standard dummy text. <br />Lorem Ipsum
//                         is simply dummy text of the printing and typesetting industry.
//                     </p>
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
//                 {/* Left Section */}
//                 <div>
//                     <ul className="mt-8 space-y-6">
//                         {services.map((service, index) => (
//                             <li key={service.id}>
//                                 <div
//                                     className={`cursor-pointer flex items-center justify-between ${activeService.id === service.id
//                                         ? "text-purple-500"
//                                         : "text-gray-300"
//                                         }`}
//                                     onClick={() => setActiveService(service)}
//                                 >
//                                     <span className="flex items-center space-x-3">
//                                         {/* Numbering */}
//                                         <span className="text-lg md:text-xl lg:text-2xl font-bold text-gray-400">{index + 1}.</span>
//                                         {/* Service Title */}
//                                         <span className="text-xl md:text-2xl lg:text-3xl font-bold">{service.title}</span>
//                                     </span>
//                                     {/* Arrow */}
//                                     <span
//                                         style={{
//                                             transform: activeService.id === service.id ? "rotate(60deg)" : "rotate(0deg)",
//                                             transition: "transform 0.3s ease-in-out",
//                                         }}
//                                         className="text-xl md:text-2xl lg:text-3xl"
//                                     >
//                                         ↗
//                                     </span>
//                                 </div>
//                                 {/* Horizontal Line */}
//                                 {index < services.length  && <hr className="border-white mt-4" />}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>



//                 {/* Right Section */}
//                 <div className="relative">
//                     <div className="rounded-xl overflow-hidden border-2 border-purple-500 relative">
//                         <img
//                             src={activeService.image}
//                             alt={activeService.title}
//                             className="w-full h-80 object-cover"
//                         />
//                         {/* Overlay Text */}
//                         <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4 mb-2">
//                             <h3 className="text-2xl font-bold mb-2">{activeService.title}</h3>
//                             <p className="text-gray-300 mb-2">{activeService.description}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
