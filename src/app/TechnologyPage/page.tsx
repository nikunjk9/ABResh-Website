'use client';

import React, { useEffect } from 'react'
import { Navbar } from '../HomePage/Navbar'
import ContactUs from '../HomePage/ContactUs'
import Footer from '../HomePage/Footer'
import { OngoingProject } from './Ongoingprojects'
import HeroSection from './HeroSection'
import ScrollToTop from '@/Components/ScrollToTop'
import WhyChooseUs from '../EventsPage/WhyChooseUs'
import FAQSection from '../HomePage/FAQs'
import NewsletterSignup from '../HomePage/NewsletterSignUp'
import LogoTicker from '../EventsPage/Logoticker'
import { OurServices } from './OurServices'

const TechnologyPage = () => {
    useEffect(() => {
        // Get the hero section element
        const heroSection = document.getElementById('hero-section');
        
        // Scroll to hero section when component mounts
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'instant' });
        }
    }, []); // Empty dependency array means this runs once when component mounts
    
    return (
        <div>
            <Navbar />
            {/* Add id to the hero section wrapper */}
            <div id="hero-section">
                <HeroSection />
            </div>
            <LogoTicker/>
            <WhyChooseUs/>
            <OurServices/>
            {/* <Gallery/> */}
            <OngoingProject/>
            <FAQSection/>
            <ContactUs/>
            <NewsletterSignup/>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}

export default TechnologyPage
