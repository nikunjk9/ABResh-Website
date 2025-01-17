'use client';

import ScrollToTop from "@/Components/ScrollToTop";
import { Banner } from "../HomePage/Banner";
import ContactUs from "../HomePage/ContactUs";
import FAQSection from "../HomePage/FAQs";
import Footer from "../HomePage/Footer";
import { Navbar } from "../HomePage/Navbar";
import NewsletterSignup from "../HomePage/NewsletterSignUp";
import { TopEvents } from "../HomePage/TopEvents";
import UpcomingEvents from "../HomePage/UpcomingEvents";
import { DigitalMarketing } from "./DigitalMarketing";
import { Gallery } from "./Gallery";
import HeroSection from "./HeroSection";
import LogoTicker from "./Logoticker";
import OurWork from "./OurWork";
import { PublicRelation } from "./PublicRelation";
import WhyChooseUs from "./WhyChooseUs";
import { useEffect } from "react";

export default function EventsPage() {
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
          <LogoTicker />
          <OurWork />
          <DigitalMarketing />
          <Gallery />
          <PublicRelation />
          <TopEvents />
          <UpcomingEvents />
          <WhyChooseUs />
          <FAQSection />
          <ContactUs />
          <NewsletterSignup />
          <Footer />
          <ScrollToTop />
      </div>
  );
}