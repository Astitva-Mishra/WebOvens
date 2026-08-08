import Link from 'next/link';
import Image from 'next/image';
import logo from '../logo.png';

export default function Footer() {
  const brands = [
    { name: 'LUMEN', symbol: '◒' },
    { name: 'NEXORA', symbol: '◆' },
    { name: 'FortuneFlow', symbol: '▲' },
    { name: 'PULSE.', symbol: '●' },
    { name: 'PARALLAX', symbol: '✺' },
  ];

  const socials = [
    { name: 'LINKEDIN', href: '#' },
    { name: 'TWITTER', href: '#' },
    { name: 'DRIBBBLE', href: '#' },
    { name: 'INSTAGRAM', href: '#' },
  ];

  return (
    <footer className="bg-wo-bg border-t border-wo-border" role="contentinfo">
      {/* Trusted By Section */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16">
        <div className="py-12 md:py-16 border-b border-wo-border">
          <div className="flex flex-col xl:flex-row items-center gap-8 lg:gap-16">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-wo-text-muted/30 whitespace-nowrap flex-shrink-0">{'// TRUSTED BY'}</span>
            <div className="flex flex-wrap justify-center xl:justify-between items-center w-full gap-8 md:gap-12 opacity-20 hover:opacity-50 transition-all duration-700">
              {brands.map((brand, i) => (
                <div key={i} className="flex items-center gap-2 text-wo-text font-mono text-[14px] md:text-[16px] tracking-[0.15em] uppercase">
                  <span className="text-[12px] text-wo-text-muted/50">{brand.symbol}</span>
                  <span>{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Column 1: Brand + Logo */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image src={logo} alt="WebOvens" fill className="object-contain drop-shadow-[0_0_8px_rgba(255,171,64,0.3)]" />
              </div>
              <span className="font-serif text-xl tracking-tight text-wo-text">WebOvens</span>
            </div>
            <p className="font-mono text-[11px] text-wo-text-muted/40 leading-relaxed max-w-[280px]">
              Elite digital product studio engineering iconic web applications for visionary brands.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-wo-amber/30 block mb-6">{'// NAVIGATE'}</span>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Work', href: '/work' },
                { name: 'Services', href: '/services' },
                { name: 'About', href: '/about' },
                { name: 'Insights', href: '/blog' },
                { name: 'Contact', href: '/contact' },
                { name: 'Careers', href: '#' },
              ].map((link) => (
                <Link key={link.name} href={link.href} className="font-mono text-[11px] tracking-[0.1em] text-wo-text-muted/50 hover:text-wo-amber transition-colors duration-300">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-wo-amber/30 block mb-6">{'// CONNECT'}</span>
            <a href="mailto:hello@webovens.com" className="font-mono text-[12px] text-wo-text-muted/60 hover:text-wo-amber transition-colors duration-300 block mb-4">
              hello@webovens.com
            </a>
            <div className="flex flex-wrap gap-4">
              {socials.map((social, i) => (
                <span key={i} className="flex items-center gap-1">
                  <a href={social.href} className="font-mono text-[10px] tracking-[0.1em] text-wo-text-muted/40 hover:text-wo-amber transition-colors duration-300" aria-label={`Visit our ${social.name} page`}>
                    {social.name}
                  </a>
                  {i < socials.length - 1 && <span className="text-wo-text-muted/15 ml-3 font-mono text-[10px]">/</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-wo-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-wo-text-muted/30">
            © {new Date().getFullYear()} WEBOVENS.STUDIO // ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[9px] tracking-[0.15em] text-wo-text-muted/20">ENGINEERED WITH OBSESSION</span>
            <div className="w-1.5 h-1.5 bg-wo-amber/40 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}
