
'use client';

import React, { useState } from 'react';
import { FaYoutube, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import axios from 'axios';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Data being sent to the backend:', formData); // Logs the form data
        try {
            const response = await axios.post('http://192.168.1.12:5000/api/contact', formData);
            setResponseMessage(response.data.message);
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        } catch (error: any) {
            setResponseMessage(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <section id="contact" className="bg-gradient-to-b from-[#121212] to-[#1a1a2e] text-white py-10 md:py-12 px-4 sm:px-6 lg:px-8 animate-gradient-move">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Section - Contact Info */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="max-w-md">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mt-6">
                            Contact Us
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-2 px-4  md:px-0">
                            Have questions or need assistance? Contact us today—because we&apos;re here to make things happen for you!
                        </p>
                    </div>
                    {/* Social Media Icons */}
                    <div className="flex flex-wrap justify-center lg:justify-start space-x-4 mt-4 md:mt-6 lg:mt-8">
                    <a
                            href="https://www.youtube.com/@ABReshEvents"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full border bg-white/5 border-white/50 text-lg md:text-xl transition transform duration-300 hover:scale-110 hover:bg-purple-600 hover:border-purple-600"
                            aria-label="YouTube"
                        >
                            <FaYoutube />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/abresh-events/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full border bg-white/5 border-gray-600 text-lg md:text-xl transition transform duration-300 hover:scale-110 hover:bg-purple-600 hover:border-purple-600"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://x.com/ABReshEvents"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full border bg-white/5 border-gray-600 text-lg md:text-xl transition transform duration-300 hover:scale-110 hover:bg-purple-600 hover:border-purple-600"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://www.facebook.com/abreshevents/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full border bg-white/5 border-gray-600 text-lg md:text-xl transition transform duration-300 hover:scale-110 hover:bg-purple-600 hover:border-purple-600"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://www.instagram.com/abresh_events/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full border bg-white/5 border-gray-600 text-lg md:text-xl transition transform duration-300 hover:scale-110 hover:bg-purple-600 hover:border-purple-600"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Right Section - Details Form */}
                <div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* First and Last Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2  md:px-0">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className="mt-1 p-2 w-full rounded-md border border-gray-500 bg-transparent text-white focus:ring-purple-500 focus:border-purple-500 placeholder-white/20"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="mt-1 p-2 w-full rounded-md  border border-gray-500 bg-transparent text-white focus:ring-purple-500 focus:border-purple-500 placeholder-white/20"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email and Phone */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-0">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="yourname@gmail.com"
                                    className="mt-1 p-2 w-full rounded-md border border-gray-500 bg-transparent text-white focus:ring-purple-500 focus:border-purple-500 placeholder-white/20"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="917888373"
                                    className="mt-1 p-2 w-full rounded-md border border-gray-500 bg-transparent text-white focus:ring-purple-500 focus:border-purple-500 placeholder-white/20"
                                    required
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className='px-2  md:px-0'>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="eg. I would love to connect with you"
                                className="mt-1 p-2 w-full rounded-md border border-gray-500 bg-transparent text-white focus:ring-purple-500 focus:border-purple-500 placeholder-white/20"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-6 px-2 md:px-0">
                            <button
                                type="submit"
                                className="w-full py-2 px-4 rounded-md bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    {responseMessage && (
                        <p className="text-center mt-4 text-lg text-purple-600">{responseMessage}</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
