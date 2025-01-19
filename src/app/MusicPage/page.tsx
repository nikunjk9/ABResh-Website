'use client';

import React, { useEffect } from 'react'
import { Banner } from '../HomePage/Banner'
import { Navbar } from '../HomePage/Navbar'
import HeroSection from './HeroSection'
import  MusicPlayer from './Scroller'
import WhyMusicServices from './WhyMusicServices'
import WhyMusicServicesSecond from './WhyMusicServicesSecond'
import RestartSection from './RestartSection'
import ContactUs from '../HomePage/ContactUs'
import Footer from '../HomePage/Footer'
import VideoCarousel from './VideoCarousel'
import PortfolioSection from './PortfolioSection'
import OurServices from './OurServices'
import ScrollToTop from '@/Components/ScrollToTop'
import FAQSection from '../HomePage/FAQs'
import PreviousProd from '../ProductionPage/PreviousProd'

const MusicPage = () => {
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
        <MusicPlayer/>
        <PortfolioSection/>
        <WhyMusicServices/>
        <WhyMusicServicesSecond/>
        <OurServices/>
        <RestartSection/>
        <VideoCarousel/>
        <PreviousProd/>
        <FAQSection/>
        <ContactUs/>
        <Footer/>
        <ScrollToTop/>
    </div>
  )
}

export default MusicPage
