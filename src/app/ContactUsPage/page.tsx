'use client';

import React, { useEffect } from 'react'
import { Navbar } from '../HomePage/Navbar'
import ContactUs from '../HomePage/ContactUs'
import Footer from '../HomePage/Footer'
import HeroSection from './HeroSection'
import HelpSection from './HelpSection'
import SocialMediaPresence from './SocialMediaPresence'
import NewsletterSignup from '../HomePage/NewsletterSignUp'
import ScrollToTop from '@/Components/ScrollToTop'
import LogoTicker from '../EventsPage/Logoticker'
import FAQSection from '../HomePage/FAQs';

const ContactUsPage = () => {

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
      <HelpSection/>
      <SocialMediaPresence/>
      <FAQSection/>
      <ContactUs/>
      <NewsletterSignup/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

export default ContactUsPage