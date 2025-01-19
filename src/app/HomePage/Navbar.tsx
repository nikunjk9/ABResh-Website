'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import MenuIcon from '@/assets/Icons/icon-menu.svg';
import CloseIcon from '@/assets/Icons/icon-close.svg';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/EventsPage", label: "Events" },
  { href: "/TechnologyPage", label: "Technology" },
  { href: "/ProductionPage", label: "Production" },
  { href: "/MusicPage", label: "Music" },
  { href: "/AboutUsPage", label: "About Us" },
  { href: "/ContactUsPage", label: "Contact" }
] as const;

const MagicButton = React.memo(() => (
  <button className="relative border py-3 px-3 text-sm rounded-lg font-medium bg-gradient-to-b from-[#190d2e] to-[#4a20Ba] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0_0_20px_rgb(140,69,255)] transition-shadow">
    <div className="absolute inset-0">
      <div className="border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
      <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg" />
    </div>
    Discover the Magic
  </button>
));

MagicButton.displayName = 'MagicButton';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = React.useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <div className="bg-black relative" ref={menuRef}>
      <div className="px-6">
        <div className="py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="relative">
            <Image
              src="/images/logoabresh.png"
              alt="Abresh Events logo"
              width={48}
              height={48}
              priority
              className="relative"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="gap-6 items-center hidden sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                prefetch
                className={`
                  text-white transition duration-200
                  ${pathname === link.href ? 'text-opacity-100' : 'text-opacity-60 hover:text-opacity-100'}
                `}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex gap-4 items-center text-white">
              <MagicButton />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden relative z-50"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="text-white" />
            ) : (
              <MenuIcon className="text-white" />
            )}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2 }}
                className="
                  sm:hidden 
                  fixed 
                  top-[4.5rem] 
                  right-4 
                  w-[200px] 
                  bg-black/95
                  backdrop-blur-lg 
                  rounded-2xl 
                  shadow-2xl 
                  border 
                  border-white/20 
                  z-50 
                  overflow-hidden
                "
              >
                <div className="flex flex-col">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`
                        px-5 
                        py-3 
                        text-white 
                        hover:bg-purple-500/50
                        transition 
                        duration-300
                        border-b 
                        border-white/10
                        last:border-b-0
                        ${pathname === link.href ? 'bg-purple-500/30' : ''}
                      `}
                    >
                      {link.label}
                    </Link>
                  ))}

                  <div className="flex justify-center text-white px-2 py-3">
                    <MagicButton />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};