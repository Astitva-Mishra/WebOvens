'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import ScrollRevealText from './ScrollRevealText';
import TextReveal from './TextReveal';
import logo from '../logo.png';

export default function About() {
  const stats = [
    { value: '47+', label: 'Projects Delivered' },
    { value: '12', label: 'Countries Served' },
    { value: '98%', label: 'Client Retention' },
    { value: '∞', label: 'Attention to Detail' },
  ];

  return (
    <section
      id="about"
      className="bg-wo-bg relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Section Label Bar */}
      <div className="border-b border-wo-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-6 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50">
            {'// MANIFESTO'}
          </span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-text-muted/30">
            [01]
          </span>
        </div>
      </div>

      {/* Main Scroll Reveal Section */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-24 md:py-32 lg:py-40 relative">
        {/* Decorative Logo Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] pointer-events-none opacity-[0.04] hidden md:block" aria-hidden="true">
          <Image src={logo} alt="" fill className="object-contain" />
        </div>

        {/* The Signature Scroll-Reveal Headline */}
        <div className="mb-20 md:mb-28 relative z-10">
          <ScrollRevealText
            text="We are not vendors. We are not contractors. We are craftsmen who architect digital empires with surgical precision and relentless obsession."
            as="h2"
            className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-[84px] leading-[1.05] tracking-tight max-w-5xl"
            revealStart={0.95}
            revealEnd={0.25}
          />
        </div>

        {/* Philosophy Text — Line by Line Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 md:mb-32 relative z-10">
          <div>
            <TextReveal
              lines={[
                'In a landscape of templates and temporary solutions, we choose permanence.',
                'We forge digital products with the exactitude of industrial design and the elegance of haute couture.',
                'Every pixel is deliberate. Every transition is choreographed. Every line of code is considered.',
              ]}
              lineClassName="text-[15px] md:text-[17px] leading-[1.9] font-light mb-6"
              revealStart={0.9}
              revealEnd={0.2}
            />
          </div>

          <div>
            <TextReveal
              lines={[
                'We embrace absolute design restraint — removing the non-essential until only what is powerful remains.',
                'Our work is not decoration. It is architecture. It is engineering. It is craft elevated to art.',
                'When you work with WebOvens, you are investing in a digital asset that compounds in value.',
              ]}
              lineClassName="text-[15px] md:text-[17px] leading-[1.9] font-light mb-6"
              revealStart={0.9}
              revealEnd={0.2}
            />
          </div>
        </div>

        {/* Stats Row — Brutalist Numbers */}
        <div className="border-t border-wo-border pt-16 md:pt-20 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`py-8 md:py-12 ${
                  i !== stats.length - 1 ? 'border-r border-wo-border' : ''
                } ${i < 2 ? 'border-b lg:border-b-0 border-wo-border' : ''} text-center`}
              >
                <span className="block font-serif text-5xl md:text-6xl xl:text-7xl tracking-tighter text-wo-white mb-3">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-wo-text-muted/50">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-b border-wo-border" />
    </section>
  );
}
