'use client';

import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Read from '@/assets/images/Read.png';
import Image from 'next/image';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQData: FAQItem[] = [
  {
    question: "What is Abresh Events?",
    answer: "Abresh Events is a premier platform for event planning, helping individuals and organizations to streamline their events efficiently.",
  },
  {
    question: "Who can benefit from your services?",
    answer: "Our services are ideal for event organizers, businesses, and individuals looking to enhance their event reach and reputation through marketing and PR strategies.",
  },
  {
    question: "What types of events do you support?",
    answer: "We support a wide range of events including corporate events, weddings, personal celebrations, and more.",
  },
  {
    question: "How do I get started?",
    answer: "Simply contact us via the provided form or reach out to our support team for personalized assistance.",
  },
];

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-white/50 rounded-lg overflow-hidden">
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between p-4 bg-black text-left text-gray-300 ${
          isOpen ? 'bg-purple-700 text-white' : 'hover:bg-gray-800'
        } transition-all duration-300`}
      >
        <span className="text-sm md:text-lg font-medium">{question}</span> {/* Reduced text size for medium screens */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: 300, opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="p-4 text-gray-400 bg-black overflow-hidden"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-black to-[#121212]  text-white">
      <h2 className="text-4xl md:text-6xl font-bold text-white text-center lg:px-8 mb-10">
        Any Questions?
      </h2>

      <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 px-6 md:px-6 lg:px-0">
        {/* Image Box */}
        <div className="flex justify-center items-center bg-gradient-to-b from-purple-900 to-purple-400 rounded-lg overflow-hidden md:w-3/4 lg:w-100% mx-auto hover:scale-105 transition duration-700 ease-in-out">
          <Image
            src={Read.src}
            alt="FAQ Image"
            width={1000}
            height={1000}
            className="object-contain w-3/4 md:w-full " // Ensure image doesn't take up full width on small screens
          />
        </div>

        {/* FAQ Questions */}
        <div className="space-y-2 md:space-y-3 lg:space-y-6"> {/* Reduced space for small screens */}
          {FAQData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === index}
              onClick={() => toggleIndex(index)}
            />
          ))}
          <button className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-md font-semibold transition-all w-full">
            More FAQ
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
