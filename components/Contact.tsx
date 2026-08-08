'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import ScrollRevealText from './ScrollRevealText';
import logo from '../logo.png';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 0.8', 'end end'] });
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.3]);

  return (
    <section ref={sectionRef} id="contact" className="bg-wo-bg relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Ambient Glow */}
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wo-amber/10 rounded-full blur-[200px] pointer-events-none" style={{ opacity: glowOpacity }} aria-hidden="true" />

      {/* Section Header */}
      <div className="border-b border-wo-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-6 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50">{'// INITIATE'}</span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-text-muted/30">[05]</span>
        </div>
      </div>

      {/* Main CTA */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <ScrollRevealText
            text="Let's build something iconic together. Your vision deserves nothing less than extraordinary."
            as="h2"
            className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-[84px] leading-[1.05] tracking-tight"
            revealStart={0.9}
            revealEnd={0.3}
          />
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col items-center gap-12">
          <p className="font-mono text-[12px] md:text-[14px] text-wo-text-muted/50 tracking-wider text-center">
            <span className="text-wo-amber/60">{'>'}_</span> ready to start? let&apos;s talk about your vision...
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="mailto:hello@webovens.com" id="contact-email" className="group relative px-8 py-4 border border-wo-amber/30 bg-wo-amber/5 font-mono text-[11px] uppercase tracking-[0.2em] text-wo-amber hover:bg-wo-amber hover:text-wo-bg transition-all duration-500">
              <span className="flex items-center gap-3">
                hello@webovens.com
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
              </span>
            </a>
            <span className="hidden sm:block font-mono text-wo-text-muted/20 text-[12px]">//</span>
            <a href="/contact" id="contact-form-link" className="font-mono text-[11px] uppercase tracking-[0.2em] text-wo-text-muted hover:text-wo-amber transition-colors duration-300 border-b border-wo-border hover:border-wo-amber/30 pb-1">
              Or fill out a brief →
            </a>
          </div>
        </motion.div>
      </div>

      {/* Info Grid */}
      <div className="border-t border-wo-border">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3">
          <div className="p-8 md:p-12 xl:p-16 border-b md:border-b-0 md:border-r border-wo-border">
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-wo-amber/40 block mb-4">{'// LOCATION'}</span>
            <p className="font-serif text-xl text-wo-text mb-2">Based in India</p>
            <p className="font-mono text-[12px] text-wo-text-muted/50 leading-relaxed">Working with founders and teams<br />around the globe.</p>
          </div>

          <div className="p-8 md:p-12 xl:p-16 border-b md:border-b-0 md:border-r border-wo-border">
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-wo-amber/40 block mb-4">{'// AVAILABILITY'}</span>
            <p className="font-serif text-xl text-wo-text mb-2">Currently Accepting</p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wo-amber opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-wo-amber shadow-[0_0_6px_rgba(255,171,64,0.6)]" />
              </span>
              <span className="font-mono text-[11px] text-wo-amber/70 tracking-wider">2 slots open for Q3</span>
            </div>
          </div>

          {/* Logo + Rotating Badge */}
          <div className="p-8 md:p-12 xl:p-16 flex items-center justify-center">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_15s_linear_infinite] opacity-40 text-wo-text">
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text className="text-[8px] font-mono tracking-[0.3em] uppercase" fill="currentColor">
                  <textPath href="#circlePath" startOffset="0%">FORGED WITH PRECISION • CRAFTED WITH CARE • </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-12 h-12">
                  <Image src={logo} alt="WebOvens" fill className="object-contain drop-shadow-[0_0_10px_rgba(255,171,64,0.4)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
