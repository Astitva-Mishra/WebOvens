'use client';

import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import logo from '../logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '/work' },
    { name: 'SERVICES', href: '/services' },
    { name: 'ABOUT', href: '/about' },
    { name: 'INSIGHTS', href: '/blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-wo-bg/95 backdrop-blur-xl border-b border-wo-amber/10 shadow-[0_1px_20px_rgba(255,171,64,0.03)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" id="nav-logo">
          <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
            <Image
              src={logo}
              alt="WebOvens Logo"
              fill
              className="object-contain drop-shadow-[0_0_10px_rgba(255,171,64,0.3)] group-hover:drop-shadow-[0_0_16px_rgba(255,171,64,0.5)] transition-all duration-500"
              priority
            />
          </div>
          <span className="font-serif text-xl md:text-2xl tracking-tight text-wo-text group-hover:text-wo-white transition-colors">
            WebOvens
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Main navigation"
          id="nav-main"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              id={`nav-${link.name.toLowerCase()}`}
              className="group relative px-4 py-2 font-mono text-[11px] tracking-[0.15em] text-wo-text-muted hover:text-wo-amber transition-colors duration-300"
            >
              <span className="text-wo-amber/0 group-hover:text-wo-amber/80 transition-colors duration-300 mr-1">
                {'>'}_
              </span>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right section */}
        <div className="hidden lg:flex items-center gap-6">
          <span className="font-mono text-[10px] text-wo-text-muted/40 tracking-wider">
            {time} UTC
          </span>

          <Link
            href="/contact"
            id="nav-cta"
            className="group relative px-6 py-3 border border-wo-border bg-transparent font-mono text-[10px] tracking-[0.2em] uppercase text-wo-text hover:border-wo-amber/50 hover:text-wo-amber transition-all duration-500"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start a Project
              <span className="w-1.5 h-1.5 bg-wo-amber rounded-full shadow-[0_0_6px_rgba(255,171,64,0.6)] group-hover:shadow-[0_0_12px_rgba(255,171,64,0.8)] transition-shadow" />
            </span>
            <div className="absolute inset-0 bg-wo-amber/5 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
          </Link>
        </div>

      </div>
    </header>
  );
}
