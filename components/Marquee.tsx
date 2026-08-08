'use client';

import { useEffect, useRef } from 'react';

export default function Marquee() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(-${(scrollY * 0.15) % 2000}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${(scrollY * 0.1) % 2000 - 1000}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const line1 =
    'DIGITAL CRAFTSMANSHIP // UNCOMPROMISING ENGINEERING // ICONIC DESIGN // BESPOKE EXPERIENCES // ';
  const line2 =
    'WEB DEVELOPMENT // BRAND STRATEGY // UI/UX DESIGN // PRODUCT ENGINEERING // CREATIVE DIRECTION // ';

  return (
    <div
      className="relative bg-wo-bg border-y border-wo-border py-5 overflow-hidden"
      aria-hidden="true"
    >
      <div ref={row1Ref} className="flex whitespace-nowrap mb-2 will-change-transform">
        <span className="font-mono text-[11px] md:text-[13px] font-medium tracking-[0.3em] uppercase text-wo-amber/20">
          {line1.repeat(8)}
        </span>
      </div>
      <div ref={row2Ref} className="flex whitespace-nowrap will-change-transform">
        <span className="font-mono text-[11px] md:text-[13px] font-medium tracking-[0.3em] uppercase text-wo-text-muted/15">
          {line2.repeat(8)}
        </span>
      </div>
    </div>
  );
}
