'use client';

import React from 'react'
import { Navbar } from '../HomePage/Navbar'
import HeroSection from './HeroSection'
import ContactUs from '../HomePage/ContactUs'
import Footer from '../HomePage/Footer'
import WhyChooseUs from './WhyChooseUs'
import VideoCarousel from './VideoCarousel'
import OurTopEvents from './PreviousProd'
import OurWork from './OurWork'
import ServicesSection from './ServicesSection'
import ScrollToTop from '@/Components/ScrollToTop'
import FAQSection from '../HomePage/FAQs'
import NewsletterSignup from '../HomePage/NewsletterSignUp'
import { useEffect } from "react";

export default function ProductionPage() {
  useEffect(() => {
      const heroSection = document.getElementById('hero-section');

      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'instant' });
      }
  }, []
); 

  return (
    <div>
      <Navbar />
      <div id="hero-section">
          <HeroSection />
      </div>
      <WhyChooseUs/>
      <OurWork/>
      <ServicesSection/>
      <VideoCarousel/>
      <OurTopEvents/>
      <FAQSection/>
      <ContactUs/>
      <NewsletterSignup/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
};


