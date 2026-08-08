'use client';

import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      num: '01',
      title: 'Product Strategy',
      desc: 'Turning ambitious ideas into clear, executable roadmaps that create real business value and competitive advantage.',
      tags: ['DISCOVERY', 'ROADMAP', 'MVP'],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Web Development',
      desc: 'High-performance websites and web applications built with precision engineering, scalable architecture, and immaculate code quality.',
      tags: ['NEXT.JS', 'REACT', 'NODE'],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'UI/UX Design',
      desc: 'Beautiful, intuitive interfaces that engage users, strengthen brands, and convert visitors into loyal customers.',
      tags: ['FIGMA', 'PROTOTYPING', 'SYSTEMS'],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Brand Experience',
      desc: 'Crafting cohesive digital experiences that build trust, forge emotional connections, and leave a lasting impression.',
      tags: ['IDENTITY', 'MOTION', 'STORY'],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="bg-wo-bg relative" aria-labelledby="services-heading">
      {/* Section Header */}
      <div className="border-b border-wo-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-6 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50">{'// CAPABILITIES'}</span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-text-muted/30">[02]</span>
        </div>
      </div>

      {/* Title */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-16 md:py-20 border-b border-wo-border">
        <h2 id="services-heading" className="font-serif text-4xl md:text-6xl xl:text-7xl tracking-tight text-wo-text">
          What We <span className="italic text-wo-amber text-glow-amber">Build.</span>
        </h2>
      </div>

      {/* Service Cards */}
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`terminal-card group p-8 md:p-12 xl:p-16 border-b border-wo-border flex flex-col justify-between min-h-[340px] ${
                i % 2 === 0 ? 'md:border-r' : ''
              }`}
              id={`service-card-${i + 1}`}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="text-wo-text-muted/30 group-hover:text-wo-amber/70 transition-colors duration-500">
                    {svc.icon}
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-wo-text-muted/50 group-hover:text-wo-amber/60 transition-colors duration-500">
                    [{svc.num}]
                  </span>
                </div>
                <div className="w-1.5 h-1.5 bg-wo-border group-hover:bg-wo-amber group-hover:shadow-[0_0_8px_rgba(255,171,64,0.6)] transition-all duration-500 rounded-full" />
              </div>

              {/* Card Content */}
              <div>
                <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-wo-text group-hover:text-wo-white transition-colors duration-500 mb-5 leading-[1.1]">
                  {svc.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-wo-text-muted leading-relaxed font-light mb-8 max-w-[400px] group-hover:text-wo-text/70 transition-colors duration-500">
                  {svc.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] tracking-[0.15em] px-3 py-1.5 border border-wo-border text-wo-text-muted/40 group-hover:border-wo-amber/20 group-hover:text-wo-amber/50 transition-all duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
