'use client';

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const navLinks = [
    { name: "Who we are", path: "#who-we-are" },
    { name: "What we do", path: "#what-we-do" },
    { name: "Events", path: "/EventsPage" },
    { name: "Technology", path: "/TechnologyPage" },
    { name: "About Us", path: "/AboutUsPage" },
    { name: "Contact us", path: "/ContactUsPage" }
];

const policyLinks = [
    { name: "Terms", path: "/terms" },
    { name: "Privacy", path: "/privacy" },
    { name: "Cookies", path: "/cookies" },
    { name: "Refund", path: "/refund" }
];

const Footer: FC = () => {
    return (
        <footer className="bg-[#18181c] text-white/90 pt-8 md:pt-12 pb-4 md:pb-6 mt-6 md:mt-10">
            <div className="max-w-7xl mx-auto px-4 md:px-5">
                
                {/* Top Section */}
                <div className="flex flex-col items-center space-y-4 md:space-y-6 pb-4">
                    
                    {/* Logo */}
                    <div className="pb-2">
                        <Link href="/">
                            <Image src={Logo} alt="Logo" width={90} height={90} priority />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="w-full px-4 md:px-0">
                        <ul className="flex flex-wrap items-center justify-center gap-3 md:gap-0 md:space-x-6 text-sm md:text-base font-medium">
                            {navLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link 
                                        href={link.path}
                                        className="hover:text-gray-400 transition duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-2 md:space-y-0 text-xs md:text-sm text-gray-400 mt-2">
                        <div className="flex items-center space-x-1 w-full md:w-max text-center md:text-left">
                            <FaMapMarkerAlt className="min-w-[14px]" />
                            <span>44, Regal Building, Connaught Place, New Delhi, India</span>
                        </div>
                        <span className="hidden md:block">|</span>
                        <div className="flex items-center space-x-1">
                            <FaEnvelope />
                            <a href="mailto:hello@abresh.com" className="hover:underline">hello@abresh.com</a>
                        </div>
                        <span className="hidden md:block">|</span>
                        <div className="flex items-center space-x-1">
                            <FaPhone />
                            <a href="tel:+919873010202" className="hover:underline">(91) 9873-01-02-02</a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-4 md:my-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between text-xs md:text-sm text-gray-500 mb-2">
                    <p className="text-gray-600 text-center md:text-left">© 2024 Abreshevents. All rights reserved.</p>
                    <ul className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-0 md:space-x-4 mt-3 md:mt-0">
                        {policyLinks.map((policy, idx) => (
                            <li key={idx}>
                                <Link 
                                    href={policy.path}
                                    className="hover:text-gray-200 transition duration-200"
                                >
                                    {policy.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;