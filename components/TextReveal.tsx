'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface TextRevealProps {
  /** Array of lines/paragraphs to reveal */
  lines: string[];
  className?: string;
  lineClassName?: string;
  /** Where in the viewport the reveal starts — 0 = top, 1 = bottom */
  revealStart?: number;
  /** Where in the viewport the reveal ends — 0 = top, 1 = bottom */
  revealEnd?: number;
}

/**
 * Paragraph-level scroll reveal for manifesto-style text blocks.
 * Each line reveals sequentially with a staggered ghost → visible transition.
 * Includes a subtle amber highlight on the currently-revealing line.
 */
export default function TextReveal({
  lines,
  className = '',
  lineClassName = '',
  revealStart = 0.85,
  revealEnd = 0.2,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [`start ${revealStart}`, `end ${revealEnd}`],
  });

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {lines.map((line, i) => (
        <RevealLine
          key={i}
          line={line}
          index={i}
          totalLines={lines.length}
          scrollProgress={scrollYProgress}
          lineClassName={lineClassName}
        />
      ))}
    </div>
  );
}

function RevealLine({
  line,
  index,
  totalLines,
  scrollProgress,
  lineClassName,
}: {
  line: string;
  index: number;
  totalLines: number;
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  lineClassName: string;
}) {
  const start = index / totalLines;
  const mid = (index + 0.5) / totalLines;
  const end = (index + 1) / totalLines;

  // Start more visible (0.15) so ghost text is readable
  const opacity = useTransform(scrollProgress, [start, end], [0.15, 1]);
  const color = useTransform(
    scrollProgress,
    [start, mid, end],
    ['#303030', '#FFAB40', '#E8E6E3']
  );
  const textShadow = useTransform(
    scrollProgress,
    [start, mid, end],
    [
      '0 0 0px transparent',
      '0 0 20px rgba(255, 171, 64, 0.3)',
      '0 0 0px transparent',
    ]
  );

  return (
    <motion.p
      style={{ opacity, color, textShadow }}
      className={`transition-none ${lineClassName}`}
    >
      {line}
    </motion.p>
  );
}
