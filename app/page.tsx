import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-wo-bg text-wo-text">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
