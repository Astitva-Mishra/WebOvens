import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Services | WebOvens',
  description: 'Our digital engineering services and methodology.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-wo-bg text-wo-text">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-wo-border relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-[80%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wo-amber/5 rounded-full blur-[200px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50">
              {'// EXPERTISE'}
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl xl:text-8xl tracking-tighter mb-6 text-wo-white">
            What We <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-wo-white via-wo-amber to-wo-orange">Build.</span>
          </h1>
          <p className="text-wo-text-muted text-[16px] md:text-[18px] max-w-2xl font-light leading-relaxed">
            Comprehensive digital product development, from strategic architecture to flawless deployment.
          </p>
        </div>
      </section>

      <Services />
      <Process />
      <Footer />
    </main>
  );
}
