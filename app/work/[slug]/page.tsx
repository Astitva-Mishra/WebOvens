import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

// Extended project data for detail pages
const projectDetails: Record<
  string,
  {
    challenge: string;
    approach: string;
    results: string[];
    testimonial?: { quote: string; author: string; role: string };
    features: string[];
  }
> = {
  'orderlo': {
    challenge:
      'High-volume venues struggle with long lines and inefficient ordering processes, directly impacting their revenue. OrderLO needed a system that could be set up instantly without new hardware.',
    approach:
      'We engineered a robust SaaS platform focused on extreme ease of use and speed. With a 10-minute setup, we removed all friction. The dark, high-contrast UI ensures legibility in busy venue environments.',
    results: [
      '30% increase in order volume',
      '10-minute seamless setup',
      'Zero new hardware required',
      'Used by 500+ Indian venues',
    ],
    testimonial: {
      quote: 'System set hai. Line chhodo. Note chhaapo. It perfectly encapsulates what they built for us.',
      author: 'Rahul Sharma',
      role: 'Operations Head, OrderLO',
    },
    features: [
      'Instant QR ordering',
      'Real-time inventory sync',
      'Integrated payment gateways',
      'Venue analytics dashboard',
      'Staff management portal',
      'High-volume load balancing',
    ],
  },
  'ghar-ka-chulha': {
    challenge:
      'Ghar Ka Chulha needed a digital presence that reflected the rich, authentic, slow-cooked heritage of their food. The standard e-commerce templates felt too sterile.',
    approach:
      'We designed an editorial-style experience using deep, luxurious tones and elegant typography. We let the high-quality food photography take center stage, wrapping the ordering process in an experience that feels as crafted as the meals themselves.',
    results: [
      '140% increase in online orders',
      'Higher average order value',
      'Enhanced brand perception',
      'Seamless mobile ordering',
    ],
    testimonial: {
      quote: 'The website truly captures the authentic taste and nostalgia we want our customers to feel.',
      author: 'Anita Desai',
      role: 'Founder, Ghar Ka Chulha',
    },
    features: [
      'Editorial menu layout',
      'Scheduled deliveries',
      'Custom spice-level selectors',
      'Loyalty program integration',
      'Real-time order tracking',
      'Catering request portal',
    ],
  },
  'feather': {
    challenge:
      'Developers hate writing personal brand content but want the benefits. Feather needed to convert raw git commits into engaging social posts with zero fluff.',
    approach:
      'We built a developer-first tool that hooks directly into GitHub. The UI mimics the terminal aesthetic developers love, while the AI engine in the background crafts high-signal posts. The dark mode, tech-heavy interface speaks directly to the target audience.',
    results: [
      '10,000+ posts generated',
      '30s average generation time',
      '100% signal, no fluff',
      'Cult following among indie hackers',
    ],
    testimonial: {
      quote: 'Your code tells a story. Feather finally gave me a way to share that story without leaving my IDE.',
      author: 'Alex Dev',
      role: 'Indie Hacker',
    },
    features: [
      'GitHub integration',
      'AI commit analysis',
      'Tone customization',
      'Direct social posting',
      'Markdown support',
      'Terminal-style UI',
    ],
  },
  'macvaar-ai': {
    challenge:
      'Modern healthcare generates massive data, but clinicians need actionable intelligence, not just data points. Macvaar AI needed a platform to securely connect devices and provide AI-driven workflows.',
    approach:
      'We engineered a HIPAA-compliant platform with a focus on clinical workflows. The interface is clean, authoritative, and fast, ensuring that clinicians can access standardized medical insights reproducibly and securely.',
    results: [
      'Seamless device integration',
      'Reproducible medical insights',
      'Zero security breaches',
      'Adopted by top tier hospitals',
    ],
    testimonial: {
      quote: "We are not doctors. We are doctors' assistants. The platform embodies this perfectly.",
      author: 'Dr. Sarah Lin',
      role: 'Chief Medical Officer, Macvaar',
    },
    features: [
      'AI-driven workflows',
      'Secure data acquisition',
      'Clinical intelligence dashboard',
      'HIPAA compliant infrastructure',
      'Device connectivity',
      'Standardized reporting',
    ],
  },
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} — WebOvens Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — WebOvens Case Study`,
      description: project.description,
      images: [{ url: project.image, width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const details = projectDetails[slug];
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-wo-bg text-wo-text">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-0 relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 mb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-8">
            <Link
              href="/work"
              className="font-mono text-[10px] tracking-[0.2em] uppercase text-wo-text-muted/50 hover:text-wo-amber transition-colors"
            >
              Work
            </Link>
            <span className="font-mono text-[10px] text-wo-text-muted/30">/</span>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-wo-amber/60">
              {project.title}
            </span>
          </div>

          {/* Project Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="font-mono text-[9px] tracking-[0.15em] px-3 py-1.5 border border-wo-border text-wo-text-muted/50">
              {project.category}
            </span>
            <span className="font-mono text-[10px] text-wo-text-muted/30 tracking-wider">
              {project.year}
            </span>
            <span className="font-mono text-[10px] text-wo-text-muted/30 tracking-wider">
              {project.tech}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl md:text-7xl xl:text-8xl tracking-tighter text-wo-white mb-6 leading-[0.9]">
            {project.title}
          </h1>
          <p className="text-[16px] md:text-[18px] text-wo-text-muted font-light max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Full-Width Project Image */}
        <div className="relative aspect-[21/9] md:aspect-[21/8] overflow-hidden border-y border-wo-border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wo-bg/40 via-transparent to-wo-bg/20" />
          <div
            className="absolute bottom-0 left-0 w-full h-[2px]"
            style={{ backgroundColor: project.color }}
          />
        </div>
      </section>

      {/* Challenge & Approach */}
      {details && (
        <>
          <section className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-20 md:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Challenge */}
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50 block mb-6">
                  {'// THE CHALLENGE'}
                </span>
                <p className="text-[16px] md:text-[18px] text-wo-text leading-[1.8] font-light">
                  {details.challenge}
                </p>
              </div>

              {/* Approach */}
              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50 block mb-6">
                  {'// OUR APPROACH'}
                </span>
                <p className="text-[16px] md:text-[18px] text-wo-text leading-[1.8] font-light">
                  {details.approach}
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="border-y border-wo-border">
            <div className="max-w-[1600px] mx-auto">
              <div className="px-6 md:px-12 xl:px-16 py-6 border-b border-wo-border">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50">
                  {'// RESULTS'}
                </span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4">
                {details.results.map((result, i) => (
                  <div
                    key={i}
                    className={`p-8 md:p-12 xl:p-16 text-center ${
                      i !== details.results.length - 1
                        ? 'border-r border-wo-border'
                        : ''
                    } ${i < 2 ? 'border-b lg:border-b-0 border-wo-border' : ''}`}
                  >
                    <p className="font-serif text-[15px] md:text-[17px] text-wo-text leading-relaxed">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-20 md:py-28">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50 block mb-12">
              {'// KEY FEATURES'}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {details.features.map((feature, i) => (
                <div
                  key={i}
                  className={`p-6 md:p-8 border border-wo-border/50 -mt-[1px] -ml-[1px] flex items-center gap-4 group hover:bg-wo-surface transition-colors duration-500`}
                >
                  <div className="w-1.5 h-1.5 bg-wo-border group-hover:bg-wo-amber group-hover:shadow-[0_0_6px_rgba(255,171,64,0.4)] transition-all duration-500 rounded-full flex-shrink-0" />
                  <span className="font-mono text-[12px] md:text-[13px] text-wo-text-muted group-hover:text-wo-text transition-colors duration-500 tracking-wider">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonial */}
          {details.testimonial && (
            <section className="border-y border-wo-border">
              <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-20 md:py-28">
                <div className="max-w-3xl mx-auto text-center">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50 block mb-8">
                    {'// CLIENT TESTIMONIAL'}
                  </span>
                  <blockquote className="font-serif text-2xl md:text-3xl xl:text-4xl text-wo-text leading-[1.3] tracking-tight mb-8 italic">
                    &ldquo;{details.testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <p className="font-mono text-[12px] text-wo-text tracking-wider">
                      {details.testimonial.author}
                    </p>
                    <p className="font-mono text-[10px] text-wo-text-muted/50 tracking-wider mt-1">
                      {details.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* Next Project */}
      <section className="border-b border-wo-border">
        <Link href={`/work/${nextProject.slug}`} className="group block">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 py-16 md:py-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-wo-text-muted/30 block mb-3">
                  {'// NEXT PROJECT'}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl xl:text-6xl tracking-tight text-wo-text group-hover:text-wo-white transition-colors duration-500">
                  {nextProject.title}
                </h2>
              </div>
              <div className="w-12 h-12 border border-wo-border flex items-center justify-center group-hover:border-wo-amber/30 transition-all duration-500">
                <svg
                  className="w-5 h-5 text-wo-text-muted group-hover:text-wo-amber transform group-hover:translate-x-1 transition-all duration-500"
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
              </div>
            </div>
          </div>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
