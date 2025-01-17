import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Work1 from "@/assets/images/work1.jpg";
import Work2 from "@/assets/images/work2.jpg";
import work7 from "@/assets/images/work7.jpg";
import Work6 from "@/assets/images/work6.jpg";


interface WorkItem {
  image: StaticImageData;
  title: string;
}

const OurWork: React.FC = () => {
  const workItems: WorkItem[] = [
    {
      image: Work1,
      title: "ABResh Events | Crafting Unforgettable Experiences",
    },
    {
      image: Work2,
      title: "ABResh Events | Crafting Unforgettable Experiences",
    },
    {
      image: work7,
      title: "ABResh Events | Crafting Unforgettable Experiences",
    },
    {
      image: Work6,
      title: "ABResh Events | Crafting Unforgettable Experiences",
    },
    
  ];

  return (
    <section id="what-we-do" className="bg-black text-white py-10 lg:py-20  sm:px-16">
      <div className="w-full bg-black/90 py-10 sm:py-4 px-4">
        <div className="container mx-auto">
          <h2 className="text-center font-bold text-4xl md:text-6xl tracking-tighter">
            Our Work
          </h2>
          <div className="max-w-xl mx-auto">
            <p className="text-center mt-4 text-base md:text-xl px-2 text-gray-400">
              We transform moments into memories and events into unforgettable experiences, bringing your vision to life.
            </p>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:px-6">
            {workItems.map((item, index) => {
              const isWide = index === 0;
              const isTall = index === 1;
              
              return (
                <div
                  key={index}
                  className={`relative group overflow-hidden rounded-lg
                    ${isWide ? 'lg:col-span-2' : ''}
                    ${isTall ? 'lg:row-span-2' : ''}
                    ${!isTall ? 'h-64 md:h-80' : 'h-full min-h-[40rem]'}`}
                >
                  <div className="relative w-full h-full ">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105 "
                      sizes={isWide ? "80vw" : "40vw"}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <p className="text-white text-sm font-medium">{item.title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;