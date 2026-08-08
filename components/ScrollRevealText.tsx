'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  /** Where in the viewport the reveal starts — 0 = top, 1 = bottom */
  revealStart?: number;
  /** Where in the viewport the reveal ends — 0 = top, 1 = bottom */
  revealEnd?: number;
  /** Color to use for the revealed text */
  revealColor?: string;
}

/**
 * Awwwards-style scroll-driven text reveal.
 * 
 * Text starts as subtly-visible ghost characters on the dark background.
 * As the user scrolls, each word progressively transitions from ghost → visible,
 * creating the signature "text painting" effect.
 */
export default function ScrollRevealText({
  text,
  className = '',
  as: Tag = 'p',
  revealStart = 0.9,
  revealEnd = 0.3,
  revealColor = '#E8E6E3',
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [`start ${revealStart}`, `start ${revealEnd}`],
  });

  const words = text.split(' ');

  return (
    <div ref={containerRef} className="relative">
      <Tag className={className}>
        {words.map((word, i) => (
          <Word
            key={`${word}-${i}`}
            word={word}
            index={i}
            totalWords={words.length}
            scrollProgress={scrollYProgress}
            revealColor={revealColor}
          />
        ))}
      </Tag>
    </div>
  );
}

function Word({
  word,
  index,
  totalWords,
  scrollProgress,
  revealColor,
}: {
  word: string;
  index: number;
  totalWords: number;
  scrollProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  revealColor: string;
}) {
  // Each word reveals at a slightly different point in the scroll progress
  const start = index / totalWords;
  const end = (index + 1) / totalWords;

  // Ghost text starts at 0.18 opacity (visible but subtle) then goes to full
  const opacity = useTransform(scrollProgress, [start, end], [0.18, 1]);
  const color = useTransform(
    scrollProgress,
    [start, end],
    ['#303030', revealColor]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.3em] transition-none"
    >
      {word}
    </motion.span>
  );
}
