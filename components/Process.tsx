'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Process() {
  const steps = [
    { num: '01', title: 'Architecture', desc: 'Defining the blueprint. We dissect your business objectives and engineer a digital framework built to scale from day one.', status: 'DEFINE' },
    { num: '02', title: 'Sartorial Design', desc: 'Aesthetic precision. Interfaces crafted like bespoke suits — minimal, iconic, and ruthlessly effective at converting.', status: 'DESIGN' },
    { num: '03', title: 'Engineering', desc: 'No-compromise development. We forge robust, high-performance web applications with immaculate code quality and modern architecture.', status: 'BUILD' },
    { num: '04', title: 'Deployment', desc: 'The grand reveal. Flawless execution, continuous refinement, and ongoing optimization for inevitable, compounding impact.', status: 'LAUNCH' },
  ];

  return (
    <section id="process" className="bg-wo-bg relative overflow-hidden" aria-labelledby="process-heading">
      <div className="border-b border-wo-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-6 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50">{'// METHODOLOGY'}</span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-text-muted/30">[03]</span>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-16 md:py-20 border-b border-wo-border">
        <h2 id="process-heading" className="font-serif text-4xl md:text-6xl xl:text-7xl tracking-tight text-wo-text">
          How We <span className="italic text-wo-amber text-glow-amber">Operate.</span>
        </h2>
      </div>

      <div className="max-w-[1600px] mx-auto">
        {steps.map((step, i) => (
          <ProcessStep key={i} step={step} index={i} isLast={i === steps.length - 1} />
        ))}
      </div>
    </section>
  );
}

function ProcessStep({ step, index, isLast }: { step: { num: string; title: string; desc: string; status: string }; index: number; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'start 0.3'] });

  const ghostOpacity = useTransform(scrollYProgress, [0, 1], [0.06, 0.2]);
  const ghostColor = useTransform(scrollYProgress, [0, 0.5, 1], ['#1A1A1A', '#FFAB40', 'rgba(255,171,64,0.15)']);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`group relative flex flex-col lg:flex-row ${!isLast ? 'border-b border-wo-border' : ''}`}
    >
      {/* Giant Ghost Number */}
      <div className="absolute top-1/2 -translate-y-1/2 right-8 xl:right-16 pointer-events-none select-none hidden lg:block">
        <motion.span className="font-serif text-[180px] xl:text-[240px] leading-none tracking-tighter" style={{ opacity: ghostOpacity, color: ghostColor }}>
          {step.num}
        </motion.span>
      </div>

      <div className="lg:w-[200px] xl:w-[250px] flex-shrink-0 p-8 md:p-12 xl:p-16 flex flex-row lg:flex-col items-start gap-4 lg:border-r border-wo-border">
        <span className="font-mono text-wo-amber text-[12px] tracking-[0.15em]">STEP_{step.num}:</span>
        <span className="font-mono text-[9px] tracking-[0.2em] text-wo-text-muted/30 border border-wo-border px-2 py-1 group-hover:border-wo-amber/30 group-hover:text-wo-amber/50 transition-all duration-500">
          {step.status}
        </span>
      </div>

      <div className="flex-grow p-8 md:p-12 xl:p-16 flex flex-col justify-center relative z-10">
        <h3 className="font-serif text-3xl md:text-4xl xl:text-5xl tracking-tight text-wo-text group-hover:text-wo-white transition-colors duration-500 mb-5 leading-[1.1]">
          {step.title}
        </h3>
        <p className="text-[14px] md:text-[15px] text-wo-text-muted leading-[1.8] font-light max-w-[600px] group-hover:text-wo-text/70 transition-colors duration-500">
          {step.desc}
        </p>
      </div>

      {!isLast && (
        <div className="hidden lg:block absolute -bottom-[5px] left-[125px] xl:left-[150px] w-2.5 h-2.5 border border-wo-border bg-wo-bg rounded-full group-hover:border-wo-amber group-hover:bg-wo-amber/20 transition-all duration-500 z-20" />
      )}
    </motion.div>
  );
}
