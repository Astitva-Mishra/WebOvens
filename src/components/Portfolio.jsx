import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import './Portfolio.css'

const projects = [
  {
    title: 'Orderlo',
    category: 'Full-Stack Platform',
    date: 'Food ordering platform',
    image: '/project-orderlo.png',
  },
  {
    title: 'Ghar Ka Chulha',
    category: 'Mobile App',
    date: 'Home food delivery',
    image: '/project-gharkachulha.png',
  },
  {
    title: 'Feather',
    category: 'Landing Page',
    date: 'SaaS Marketing',
    image: '/project-feather-landing.png',
  },
  {
    title: 'Flowstrate',
    category: 'Web App',
    date: 'AI Workflow Builder',
    image: '/project-flowstrate.png',
  },
  {
    title: 'Feather App',
    category: 'Mobile App',
    date: 'Productivity Suite',
    image: '/project-feather-app.png',
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const trackRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [pos, setPos] = useState(0)

  const scroll = (dir) => {
    if (!trackRef.current) return
    const item = trackRef.current.children[0]
    if (!item) return
    const w = item.offsetWidth + 20
    const newPos = dir === 'next'
      ? Math.min(pos + 1, projects.length - 2)
      : Math.max(pos - 1, 0)
    setPos(newPos)
    trackRef.current.scrollTo({ left: newPos * w, behavior: 'smooth' })
  }

  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <div className="container">
        <motion.div
          className="portfolio-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <div>
            <motion.span
              className="text-eyebrow portfolio-eyebrow"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            >
              Portfolio
            </motion.span>
            <motion.h2
              className="heading-xl portfolio-heading"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            >
              Our Work
            </motion.h2>
          </div>
          <motion.nav
            className="portfolio-nav"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
          >
            <button className="btn-icon btn-grey" onClick={() => scroll('prev')} aria-label="Previous">
              <ArrowLeft size={18} />
            </button>
            <button className="btn-icon btn-grey" onClick={() => scroll('next')} aria-label="Next">
              <ArrowRight size={18} />
            </button>
          </motion.nav>
        </motion.div>
      </div>

      <div className="portfolio-track" ref={trackRef}>
        {projects.map((project, i) => (
          <motion.article
            key={i}
            className="portfolio-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="portfolio-card-image">
              <img src={project.image} alt={project.title} className="img-cover" loading="lazy" />
            </div>
            <div className="portfolio-card-info">
              <h3 className="heading-xs portfolio-card-title">{project.title}</h3>
              <div className="portfolio-card-meta">
                <span className="text-sm">{project.category}</span>
                <span className="portfolio-card-dot" />
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{project.date}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
