import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Work — WebOvens | Selected Projects & Case Studies',
  description:
    'Explore our portfolio of high-performance websites, web applications, and digital experiences engineered for ambitious brands worldwide.',
  openGraph: {
    title: 'Work — WebOvens | Selected Projects & Case Studies',
    description:
      'A collection of our finest digital products, engineered for performance and designed for impact.',
  },
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-wo-bg text-wo-text">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-wo-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50">
              {'// PORTFOLIO'}
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl xl:text-8xl tracking-tighter mb-6 text-wo-white">
            Selected <span className="italic text-wo-amber text-glow-amber">Work.</span>
          </h1>
          <p className="text-wo-text-muted text-[16px] md:text-[18px] max-w-2xl font-light leading-relaxed">
            A collection of our finest digital products, engineered for
            performance and designed for impact. Each project represents months
            of obsessive craftsmanship.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="max-w-[1600px] mx-auto">
        {projects.map((proj, i) => (
          <Link
            key={proj.slug}
            href={`/work/${proj.slug}`}
            className="group block border-b border-wo-border"
            id={`work-project-${proj.slug}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image — alternate left/right */}
              <div
                className={`relative aspect-[16/10] overflow-hidden bg-wo-surface project-image-wrapper ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <Image
                  src={proj.image}
                  alt={`${proj.title} — ${proj.category}`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wo-bg/60 via-transparent to-transparent" />
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out"
                  style={{ backgroundColor: proj.color }}
                />
              </div>

              {/* Info */}
              <div
                className={`p-8 md:p-12 xl:p-16 flex flex-col justify-center ${
                  i % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-wo-amber/50">
                    [{String(i + 1).padStart(2, '0')}]
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.15em] px-3 py-1 border border-wo-border text-wo-text-muted/40 group-hover:border-wo-amber/20 group-hover:text-wo-amber/60 transition-all duration-500">
                    {proj.category}
                  </span>
                  <span className="font-mono text-[10px] text-wo-text-muted/30">
                    {proj.year}
                  </span>
                </div>

                <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl tracking-tight text-wo-text group-hover:text-wo-white transition-colors duration-500 mb-4 leading-[1.05]">
                  {proj.title}
                </h2>

                <p className="text-[14px] md:text-[15px] text-wo-text-muted leading-relaxed font-light mb-8 max-w-[480px] group-hover:text-wo-text/70 transition-colors duration-500">
                  {proj.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-wo-text-muted/30 tracking-wider">
                    {proj.tech}
                  </span>
                  <div className="w-10 h-10 border border-wo-border flex items-center justify-center opacity-30 group-hover:opacity-100 group-hover:border-wo-amber/30 transition-all duration-500">
                    <svg
                      className="w-4 h-4 text-wo-text-muted group-hover:text-wo-amber transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* CTA Section */}
      <section className="border-b border-wo-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-24 md:py-32 text-center">
          <p className="font-mono text-[12px] text-wo-text-muted/50 tracking-wider mb-6">
            <span className="text-wo-amber/60">{'>'}_</span> have a project in mind?
          </p>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-wo-text mb-8">
            Let&apos;s build it <span className="italic text-wo-amber">together.</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 border border-wo-amber/30 bg-wo-amber/5 font-mono text-[11px] uppercase tracking-[0.2em] text-wo-amber hover:bg-wo-amber hover:text-wo-bg transition-all duration-500"
          >
            Start a Project
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
