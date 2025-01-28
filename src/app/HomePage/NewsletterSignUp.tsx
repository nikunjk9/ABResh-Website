'use client';

import React, { FC } from "react";

const NewsletterSignup: FC = () => {
    return (
        <section className="bg-gradient-to-b from-[#1a1a2e] to-black text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold text-center lg:text-left mb-8 tracking-tight">
                    Newsletter Signup
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-12">
                    
                    {/* Text Section */}
                    <div className="md:w-2/5 text-center md:text-left">
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed px-2 md:px-0">
                            Subscribe to our newsletter for exclusive updates, the latest technology, and cutting-edge gaming insights. Stay ahead of the curve with our curated content delivered straight to your inbox.
                        </p>
                    </div>

                    {/* Input Section */}
                    <div className="w-full md:w-3/5 lg:w-2/5 max-w-md px-2">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className=" w-full py-3 pl-4 pr-28 bg-transparent border border-gray-600 rounded-md text-white 
                                focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                            />
                            <button
                                type="button"
                                className="text-sm md:text-base absolute right-1 top-1/2 transform -translate-y-1/2 
                                bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 md:px-6 rounded-md 
                                font-medium transition-colors duration-300"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSignup;