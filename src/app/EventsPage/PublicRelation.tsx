"use client";

import { Card } from "@/Components/Card";
import {getCardColorFromCategory} from "@/utils/cardUtils"
import { Tag } from "@/Components/Tag";
import { twMerge } from "tailwind-merge";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

interface cardData {
    category: string;
    title: string;
    description: string;
    color: string;
}

const cardData = [
    {
        category: 'media',
        title: 'Social Media Marketing',
        description: 'Social media marketing involves using platforms like Facebook, Instagram, Snapchat, LinkedIn, Twitter, TikTok, and Pinterest to promote products, services, or brands. ',
        color: "fuchsia",
    },
    {
        category: 'Sustainability',
        title: 'Search Engine Optimization (SEO)',
        description: 'The practice of optimizing websites and online content to improve their visibility in search engine results pages (SERPs) for relevant queries.',
        color: 'lime',
    },
    {
        category: 'Security',
        title: 'Pay-Per-Click (PPC) Ads',
        description: 'Digital advertising model where advertisers pay a fee each time a user clicks on their ad. Its a way of buying visits to your website, rather than earning them organically.  ',
        color: 'cyan',
    },
    {
        category: 'technology',
        title: 'Content Creation',
        description: 'Content creation is the process of generating engaging, valuable, and relevant material for a specific audience, often for digital platforms such as websites, blogs, social media, or video-sharing platforms. ',
        color: 'violet',
    },
    {
        category: 'Innovation',
        title: 'Email Marketing',
        description: 'Email marketing is a digital marketing strategy that involves sending targeted emails to a group of recipients with the goal of promoting products',
        color: 'fuchsia',
    },
    {
        category: 'Security',
        title: 'Influencer Marketing',
        description: 'Influencer marketing is a strategy where brands collaborate with individuals who have a significant and engaged following on social media.',
        color: 'lime',
    },
    {
        category: 'Sustainability',
        title: 'Analytics and Reporting',
        description: 'Analytics and reporting in digital marketing involve tracking, measuring, and analyzing data to assess the performance of marketing campaigns and strategies. ',
        color: 'violet',
    },
] as const;



export const PublicRelation = () => {
    // Split the cards into two arrays for the two columns
    const leftColumnCards = cardData.filter((_, index) => index % 2 === 0);
    const rightColumnCards = cardData.filter((_, index) => index % 2 === 1);

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'start center'],
    });
    const marginTop = useTransform(scrollYProgress, [0, 1], [0, 123]);
    return (
        <section className="lg:px-28 py-10 mt-2">
            <div className="container py-8 text-white">
                <h2 className="text-center text-white font-bold text-4xl md:text-6xl tracking-tighter">
                    Public Relations
                </h2>
                <div className="max-w-2xl mx-auto">
                    <p className="text-center mt-5 text-base md:text-lg px-2 text-gray-400">
                    Public relations (PR) is the art of managing communication between an organization and its audience. 
                    It involves creating and maintaining a positive image. 
                    </p>
                </div>
                <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 px-2 md:px-0">
                    <div className="flex flex-col gap-8">
                        {leftColumnCards.map(({ title, description, category }, cardIndex) => (
                                <Card 
                                    key={title} 
                                    buttonText="Read More" 
                                    color={getCardColorFromCategory(category)}
                                    
                                >
                                    <Tag color={getCardColorFromCategory(category)}>{category}</Tag>
                                    <h3 className="font-heading font-black text-3xl mt-3">
                                        {title}
                                    </h3>
                                    <p className="text-lg text-zinc-400 mt-6">
                                        {description}
                                    </p>
                                </Card>
                            )
                        )}
                    </div>
                    <motion.div 
                        className="hidden md:flex flex-col gap-8 mt-28" 
                        style={{
                            marginTop,

                        }}
                        ref={targetRef}>
                        {rightColumnCards.map(({ title, description, category }, cardIndex) => (
                                <Card 
                                    key={title} 
                                    buttonText="Read More" 
                                    color={getCardColorFromCategory(category)}
                                    
                                >
                                    <Tag color={getCardColorFromCategory(category)}>{category}</Tag>
                                    <h3 className="font-heading font-black text-3xl mt-3">
                                        {title}
                                    </h3>
                                    <p className="text-lg text-zinc-400 mt-6">
                                        {description}
                                    </p>
                                </Card>
                            )
                        )}
                    </motion.div>
                </div>
            </div>    
        </section>
    );
};