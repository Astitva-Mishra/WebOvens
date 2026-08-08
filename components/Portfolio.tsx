'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import { projects } from '@/data/projects';

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-wo-bg relative" aria-labelledby="portfolio-heading">
      {/* Section Header */}
      <div className="border-b border-wo-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-6 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50">{'// SELECTED WORK'}</span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-text-muted/30">[04]</span>
        </div>
      </div>

      {/* Title + CTA */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-16 md:py-20 border-b border-wo-border flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <div>
          <h2 id="portfolio-heading" className="font-serif text-4xl md:text-6xl xl:text-7xl tracking-tight text-wo-text mb-4">
            Featured <span className="italic text-wo-amber text-glow-amber">Projects.</span>
          </h2>
          <p className="text-[14px] md:text-[15px] text-wo-text-muted font-light max-w-[500px]">
            Digital products crafted with purpose, precision, and an obsessive attention to detail.
          </p>
        </div>
        <Link
          href="/work"
          className="group flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-wo-text-muted hover:text-wo-amber transition-colors border-b border-wo-border hover:border-wo-amber/30 pb-2"
          id="portfolio-view-all"
        >
          Explore All Projects
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
        </Link>
      </div>

      {/* Project Grid — Visual Cards */}
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className={`group border-b border-wo-border ${i % 2 === 0 ? 'md:border-r' : ''}`}
              id={`project-${i + 1}`}
            >
              <Link href={`/work/${proj.slug}`} className="block">
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-wo-surface project-image-wrapper">
                  <Image
                    src={proj.image}
                    alt={`${proj.title} — ${proj.category}`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wo-bg/80 via-wo-bg/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Hover Accent */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"
                    style={{ backgroundColor: proj.color }}
                  />
                </div>

                {/* Project Info */}
                <div className="p-6 md:p-8 xl:p-10 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[9px] tracking-[0.15em] px-2 py-1 border border-wo-border text-wo-text-muted/40 group-hover:border-wo-amber/20 group-hover:text-wo-amber/60 transition-all duration-500">
                        {proj.category}
                      </span>
                      <span className="font-mono text-[10px] text-wo-text-muted/30 tracking-wider">
                        {proj.year}
                      </span>
                    </div>
                    <div className="w-8 h-8 border border-wo-border flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-wo-amber/30 transition-all duration-500">
                      <svg className="w-3 h-3 text-wo-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-wo-text group-hover:text-wo-white transition-colors duration-500 mb-2 leading-[1.1]">
                    {proj.title}
                  </h3>
                  <p className="font-mono text-[10px] text-wo-text-muted/30 tracking-wider hidden lg:block">
                    {proj.tech}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
