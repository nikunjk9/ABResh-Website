'use client';


import React, { useEffect } from 'react'
import { Navbar } from '../HomePage/Navbar'
import HeroSection from './HeroSection'
import OurTeam from './OurTeam'
import ContactUs from '../HomePage/ContactUs'
import Footer from '../HomePage/Footer'
import OurValues from './OurValues'
import FAQSection from '../HomePage/FAQs'
import LogoTicker from '../EventsPage/Logoticker'
import TimelineSection from './TimelineSection'
import NewsletterSignup from '../HomePage/NewsletterSignUp'
import ScrollToTop from '@/Components/ScrollToTop'
import HistorySection from './HistorySection';

const AboutUsPage = () => {

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
        <TimelineSection/>
        <HistorySection/>
        <OurValues/>
        <OurTeam/>
        <FAQSection/>
        <ContactUs/>
        <NewsletterSignup/>
        <Footer/>
        <ScrollToTop/>
    </div>
  )
}

export default AboutUsPage