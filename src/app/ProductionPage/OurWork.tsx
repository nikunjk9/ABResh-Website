import React from 'react';
import Image, {StaticImageData} from 'next/image';
import pow1 from '@/assets/images/POW1.png';
import pow2 from '@/assets/images/POW2.png';
import pow3 from '@/assets/images/POW3.png';
import pow4 from '@/assets/images/POW4.png';
import pow5 from '@/assets/images/POW5.png';

const OurWork = () => {
    return (
        <section className="bg-[#A044FF] text-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title and Description */}
                <div className="flex flex-col lg:flex-row items-start gap-12 justify-between mb-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white whitespace-nowrap">
                        Our Work
                    </h2>
                    <p className="text-white text-lg lg:max-w-4xl">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                        standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
                    </p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-12 gap-4">
                    {/* Left Column */}
                    <div className="col-span-12 md:col-span-3 lg:col-span-3 space-y-4">
                        <div className="overflow-hidden relative aspect-[4/3] md:h-[130px] lg:h-auto">
                            <Image
                                src={pow1}
                                alt="Tablet interface showing digital analytics"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="overflow-hidden relative aspect-[4/3] md:h-[130px] lg:h-auto">
                            <Image
                                src={pow2}
                                alt="Camera display showing video recording"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Center Column */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-6">
                        <div className="overflow-hidden relative aspect-[4/3] md:h-[275px] lg:h-auto">
                            <Image
                                src={pow3}
                                alt="Video editor working with multiple screens"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-span-12 md:col-span-3 lg:col-span-3 space-y-4">
                        <div className="overflow-hidden relative aspect-[4/3] md:h-[130px] lg:h-auto">
                            <Image
                                src={pow4}
                                alt="Video editing software interface"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="overflow-hidden relative aspect-[4/3] md:h-[130px] lg:h-auto">
                            <Image
                                src={pow5}
                                alt="Person working at computer desk"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWork;

// import React from 'react';
// import Image, {StaticImageData} from 'next/image';
// import pow1 from '@/assets/images/POW1.png';
// import pow2 from '@/assets/images/POW2.png';
// import pow3 from '@/assets/images/POW3.png';
// import pow4 from '@/assets/images/POW4.png';
// import pow5 from '@/assets/images/POW5.png';


// const OurWork = () => {
//     return (
//         <section className="bg-[#A044FF] text-white py-16">
//             <div className="max-w-7xl mx-auto px-4">
//                 {/* Title and Description */}
//                 <div className="flex flex-col lg:flex-row items-start gap-12 justify-between mb-12">
//                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white whitespace-nowrap">
//                         Our Work
//                     </h2>
//                     <p className="text-white text-lg lg:max-w-4xl">
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
//                         standard dummy text ever since the 1500s, when an unknown printer took Lorem Ipsum is simply dummy text of the
//                         printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
//                     </p>
//                 </div>

//                 {/* Image Grid */}
//                 <div className="grid grid-cols-12 gap-4">
//                     {/* Left Column */}
//                     <div className="col-span-12 lg:col-span-3 space-y-4">
//                         <div className=" overflow-hidden relative aspect-[4/3]">
//                             <Image
//                                 src={pow1}
//                                 alt="Tablet interface showing digital analytics"
//                                 fill
//                                 className="object-cover"
//                             />
//                         </div>
//                         <div className=" overflow-hidden relative aspect-[4/3]">
//                             <Image
//                                 src={pow2}
//                                 alt="Camera display showing video recording"
//                                 fill
//                                 className="object-cover"
//                             />
//                         </div>
//                     </div>

//                     {/* Center Column */}
//                     <div className="col-span-12 lg:col-span-6">
//                         <div className=" overflow-hidden relative aspect-[4/3]">
//                             <Image
//                                 src={pow3}
//                                 alt="Video editor working with multiple screens"
//                                 fill
//                                 className="object-cover"
//                             />
//                         </div>
//                     </div>

//                     {/* Right Column */}
//                     <div className="col-span-12 lg:col-span-3 space-y-4">
//                         <div className=" overflow-hidden relative aspect-[4/3]">
//                             <Image
//                                 src={pow4}
//                                 alt="Video editing software interface"
//                                 fill
//                                 className="object-cover"
//                             />
//                         </div>
//                         <div className=" overflow-hidden relative aspect-[4/3]">
//                             <Image
//                                 src={pow5}
//                                 alt="Person working at computer desk"
//                                 fill
//                                 className="object-cover"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default OurWork;

// import React from 'react';

// const OurWork = () => {
//     return (
//         <section className="bg-[#A044FF] text-white py-12">
//             <div className="max-w-7xl mx-auto">
//                 {/* Title and Description */}
//                 <div className="flex flex-col lg:flex-row items-center gap-12 justify-between mb-12">
//                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white ">
//                         Our Work
//                     </h2>
//                     <p className="text-White text-xl">
//                         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                         when an unknown printer took Lorem Ipsum is simply dummy text of the printing
//                         and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
//                     </p>
//                 </div>

//                 {/* Image Collage */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                     <div className="row-span-2">
//                         <img
//                             src="https://via.placeholder.com/300x400"
//                             alt="Work 1"
//                             className="w-full h-full object-cover rounded-lg"
//                         />
//                     </div>
//                     <div>
//                         <img
//                             src="https://via.placeholder.com/300x200"
//                             alt="Work 2"
//                             className="w-full h-full object-cover rounded-lg"
//                         />
//                     </div>
//                     <div>
//                         <img
//                             src="https://via.placeholder.com/300x200"
//                             alt="Work 3"
//                             className="w-full h-full object-cover rounded-lg"
//                         />
//                     </div>
//                     <div>
//                         <img
//                             src="https://via.placeholder.com/300x200"
//                             alt="Work 4"
//                             className="w-full h-full object-cover rounded-lg"
//                         />
//                     </div>
//                     <div>
//                         <img
//                             src="https://via.placeholder.com/300x200"
//                             alt="Work 5"
//                             className="w-full h-full object-cover rounded-lg"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default OurWork;
