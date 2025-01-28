'use client';

import Image from "next/image";
import pill from '@/assets/images/pill.png';
import { StaticImageData } from "next/image";
import { twMerge } from 'tailwind-merge'
import { Card } from "@/Components/Card";

import icosahedron from '@/assets/images/icosahedron.png';
import torusknot from '@/assets/images/torus-knot.png';
import cylinder from '@/assets/images/cylinder.png';
import cube from '@/assets/images/cube.png';
import cone from '@/assets/images/cone.png';
import torus from '@/assets/images/torus.png';
import { useEffect, useState } from "react";

interface cardData {
    image: StaticImageData | string;
    title: string;
    description: string;
    color: string;
}

const cardData = [
    {
        image: pill,
        title: 'Social Media Marketing',
        description: 'Social media marketing involves using platforms like Facebook, Instagram, Snapchat, LinkedIn, Twitter, TikTok, and Pinterest to promote products, services, or brands. ',
        color: "fuchsia",
    },
    {
        image: icosahedron,
        title: 'Search Engine Optimization (SEO)',
        description: 'The practice of optimizing websites and online content to improve their visibility in search engine results pages (SERPs).',
        color: 'lime',
    },
    {
        image: torusknot,
        title: 'Pay-Per-Click (PPC) Ads',
        description: 'Digital advertising model where advertisers pay a fee each time a user clicks on their ad. Its a way of buying visits to your website, rather than earning them organically.  ',
        color: 'cyan',
    },
    {
        image: cylinder,
        title: 'Content Creation',
        description: 'Content creation is the process of generating engaging, valuable, and relevant material for a specific audience, often for digital platforms such as websites, blogs. ',
        color: 'violet',
    },
    {
        image: cube,
        title: 'Email Marketing',
        description: 'Email marketing is a digital marketing strategy that involves sending targeted emails to a group of recipients with the goal of promoting products. services, or brands.',
        color: 'fuchsia',
    },
    {
        image: cone,
        title: 'Influencer Marketing',
        description: 'Influencer marketing is a strategy where brands collaborate with individuals who have a significant and engaged following on social media. services, or brands.',
        color: 'lime',
    },
    {
        image: torus,
        title: 'Analytics and Reporting',
        description: 'Analytics and reporting in digital marketing involve tracking, measuring, and analyzing data to assess the performance of marketing campaigns and strategies. services, or brands. ',
        color: 'violet',
    },
] as const;

export const OurServices = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const timeout = setTimeout(() => {
            setSelectedCardIndex(curr => 
                curr === cardData.length - 1 ? 0 : curr + 1
            );
        }, 3000);
        return () => {
            clearTimeout(timeout);
        };
    }, [selectedCardIndex, isHovered]);

    return (
        <section className="py-12 overflow-x-clip -mt-4 md:-mt-8 ml-3 md:ml-12 lg:ml-0 md:mr-6">
            <div className="container py-8 text-white">
                <h2 className="text-center text-white font-bold text-4xl md:text-5xl lg:text-6xl tracking-tighter">
                    Digital Marketing
                </h2>
                <div className="max-w-xl mx-auto">
                    <p className="text-center mt-5 text-base lg:text-lg px-3 text-white/70">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                        sint. Velit officia consequat duis enim velit mollit.
                    </p>
                </div>
                <div className="mt-32 flex ">   
                    <div className="flex flex-none gap-8">
                        {cardData.map(({ image, title, description, color }) => (
                            <div
                                key={title}
                                className="inline-flex transition-all duration-500"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={{
                                    transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                                }}
                            >
                                <Card className="max-w-xs md:max-w-md" color={color}>
                                    <div className="flex justify-center -mt-28">
                                        <div className="inline-flex relative">
                                            <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 group-hover:bg-zinc-950/30 transition duration-300 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]" />
                                            <Image 
                                                src={image}
                                                alt={`${title} image`}
                                                className="size-40 group-hover:-translate-y-6 transition duration-300"
                                                width={160}
                                                height={160}
                                            />
                                        </div>
                                    </div>
                                    <h3 className="font-heading font-black text-3xl mt-12">
                                        {title}
                                    </h3>
                                    <p className="text-lg text-zinc-400 mt-4">
                                        {description}
                                    </p>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-10 " >
                    <div className="bg-zinc-800 inline-flex gap-4 p-2.5 rounded-full">
                        {cardData.map((card, cardIndex) => (
                            <div 
                                key={card.title}
                                className={twMerge(
                                    "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
                                    cardIndex === selectedCardIndex && 'bg-zinc-300'
                                )}
                                onClick={() => setSelectedCardIndex(cardIndex)}
                            />
                        ))}  
                    </div>
                </div>
            </div>
        </section>
    );
};