"use client";

// introduction.tsx
import Tag from "@/Components/Tags";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import  ImageT  from "@/Components/ImageT";


const text = 'You are racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.';
const words = text.split(' ');

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget, 
        offset: ['start end', 'end end'],
    });
    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex= useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on('change', (latest) => {
            setCurrentWord(latest);
        })
    }, [wordIndex]);

    return (
        <section id="about-us" className="py-16 bg-black md:px-8 lg:px-0">
            <div className="container mx-auto md:px-8 lg:px-16">
                <div className="sticky top-10 md:top-10 lg:top-16">
                    <div className="flex justify-center">
                        <Tag>Introducing ABResh Events</Tag>
                    </div>
                    <div className="text-white/90 text-3xl md:text-5xl lg:text-7xl text-center font-semibold mt-11 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0 overflow-hidden">
                        <span>Your creative process deserve better.</span>{" "}
                        <span className="">
                            {words.map((word, wordIndex) => (
                                <span key={wordIndex} className={twMerge( "transition duration-500 text-white/15",
                                    wordIndex < currentWord && 'text-white/90')}>{`${word} `}</span>
                            ))}
                        </span>
                        <span className="font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text [-webkit-background-clip:text] block">
                            That is why we built ABResh Events
                        </span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget}> </div>
            </div>
            <div><ImageT/></div>
        </section>
        
    );
}

