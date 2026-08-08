'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import logo from '../logo.png';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -80]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-wo-bg"
      id="hero"
    >
      {/* Grid Dot Background */}
      <motion.div
        className="absolute inset-0 grid-dots pointer-events-none z-0"
        style={{ opacity: gridOpacity }}
        aria-hidden="true"
      />

      {/* Ambient Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-wo-amber/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-[15%] w-[300px] h-[300px] bg-wo-ember/5 blur-[120px] rounded-full" />
      </div>

      {/* Floating Logo — Large Visual Anchor */}
      <motion.div
        className="absolute right-[-5%] lg:right-[5%] xl:right-[8%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] xl:w-[550px] xl:h-[550px] pointer-events-none z-0"
        style={{ scale: logoScale, opacity: logoOpacity }}
        aria-hidden="true"
      >
        <Image
          src={logo}
          alt=""
          fill
          className="object-contain logo-glow opacity-[0.04] lg:opacity-[0.06]"
          priority
        />
      </motion.div>

      <motion.div
        className="max-w-[1600px] mx-auto w-full px-6 md:px-12 xl:px-16 relative z-10 pt-32 pb-20"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        {/* Terminal Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 md:gap-6 mb-16 md:mb-20"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wo-amber opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-wo-amber shadow-[0_0_8px_rgba(255,171,64,0.8)]" />
            </span>
            <span className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-wo-amber/80">
              ACCEPTING CLIENTS
            </span>
          </div>
          <span className="text-wo-border hidden sm:inline">|</span>
          <TerminalTyping />
        </motion.div>

        {/* Main Headline — Brutalist Typography */}
        <div className="mb-12 md:mb-16">
          <motion.h1
            className="font-serif text-[clamp(3.5rem,12vw,11rem)] leading-[0.85] tracking-tighter text-wo-white"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block">We Build</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-wo-white via-wo-amber to-wo-orange">
              Digital
            </span>
            <span className="block">Empires.</span>
          </motion.h1>
        </div>

        {/* Subtext + CTA Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-20">
          <motion.p
            className="text-[15px] md:text-[17px] text-wo-text-muted max-w-[500px] leading-[1.8] font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            WebOvens is an elite digital product studio. We engineer
            highly lucrative web applications and extraordinary digital
            experiences for visionary brands that demand nothing less
            than excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link
              href="/work"
              id="hero-cta-primary"
              className="group relative overflow-hidden border border-wo-amber/30 bg-wo-amber/5 px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-wo-amber hover:bg-wo-amber hover:text-wo-bg transition-all duration-500"
            >
              <span className="relative z-10 flex items-center gap-3">
                View Our Work
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </Link>

            <Link
              href="#about"
              id="hero-cta-secondary"
              className="group flex items-center gap-3 py-4 font-mono text-wo-text-muted text-[11px] uppercase tracking-[0.2em] hover:text-wo-text transition-colors duration-300"
            >
              <span className="text-wo-amber/60">{'>'}_</span>
              The Manifesto
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Border with Info */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-wo-border">
        <motion.div
          className="flex items-center justify-between px-6 md:px-12 py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-wo-text-muted/30">
            SCROLL TO EXPLORE
          </span>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-wo-text-muted/30">
              EST. 2024
            </span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-wo-amber/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/** Terminal typing animation component */
function TerminalTyping() {
  const [text, setText] = useState('');
  const fullText = '>_ initializing webovens.studio...';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-mono text-[10px] md:text-[11px] tracking-[0.1em] text-wo-text-muted/50">
      {text}
      <span className="inline-block w-[6px] h-[14px] bg-wo-amber/60 ml-[2px] animate-[cursor-blink_1s_infinite]" />
    </span>
  );
}
