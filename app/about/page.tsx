import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About | WebOvens',
  description: 'The manifesto and philosophy behind WebOvens.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-wo-bg text-wo-text">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-wo-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50">
              {'// THE AGENCY'}
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl xl:text-8xl tracking-tighter mb-6 text-wo-white">
            We are <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-wo-white via-wo-amber to-wo-orange">Craftsmen.</span>
          </h1>
          <p className="text-wo-text-muted text-[16px] md:text-[18px] max-w-2xl font-light leading-relaxed">
            We are an elite collective of digital architects, engineers, and designers focused on absolute quality.
          </p>
        </div>
      </section>

      <About />
      <Footer />
    </main>
  );
}
