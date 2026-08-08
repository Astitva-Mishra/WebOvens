import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Insights | WebOvens',
  description: 'Thoughts on digital product engineering, design, and business.',
};

export default function BlogPage() {
  const posts = [
    {
      title: 'The Death of the Template: Why Custom Engineering Wins',
      date: 'May 12, 2026',
      category: 'Engineering',
      excerpt: 'In an era of rapid deployment tools, bespoke engineering remains the only path to true digital distinctiveness.'
    },
    {
      title: 'Dark Mode as a Premium Brand Signal',
      date: 'April 28, 2026',
      category: 'Design',
      excerpt: 'How deeply considered dark interfaces communicate luxury and technical competence.'
    },
    {
      title: 'Optimizing Next.js for Absolute Performance',
      date: 'March 15, 2026',
      category: 'Engineering',
      excerpt: 'Our internal playbook for achieving perfect Lighthouse scores on complex web applications.'
    }
  ];

  return (
    <main className="min-h-screen bg-wo-bg text-wo-text">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 border-b border-wo-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-wo-amber/50">
              {'// INSIGHTS'}
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl xl:text-8xl tracking-tighter mb-6 text-wo-white">
            Our <span className="italic text-transparent bg-clip-text bg-gradient-to-br from-wo-white via-wo-amber to-wo-orange">Thinking.</span>
          </h1>
          <p className="text-wo-text-muted text-[16px] md:text-[18px] max-w-2xl font-light leading-relaxed">
            Our thoughts on design, engineering, and the future of digital products. We share what we learn from building for the best.
          </p>
        </div>
      </section>
      
      <section className="py-20 md:py-32 border-b border-wo-border">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {posts.map((post, i) => (
              <Link href="#" key={i} className="group block">
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-wo-border group-hover:border-wo-amber/50 transition-colors duration-500">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-wo-amber/70 group-hover:text-wo-amber transition-colors duration-500">
                    {post.category}
                  </span>
                  <span className="font-mono text-[10px] text-wo-text-muted/50 tracking-wider">
                    {post.date}
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl mb-4 text-wo-white group-hover:text-wo-amber transition-colors duration-500 leading-tight">
                  {post.title}
                </h2>
                <p className="text-wo-text-muted font-light leading-relaxed group-hover:text-wo-text/80 transition-colors duration-500">
                  {post.excerpt}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-wo-border group-hover:bg-wo-amber/50 transition-colors duration-500" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-wo-text-muted/50 group-hover:text-wo-amber transition-colors duration-500">
                    Read More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
