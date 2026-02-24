import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import './Portfolio.css'

const projects = [
  {
    title: 'Orderlo',
    category: 'Full-Stack Platform',
    tag: 'Food Ordering',
    image: '/project-orderlo.png',
    size: 'large',
  },
  {
    title: 'Ghar Ka Chulha',
    category: 'Mobile App',
    tag: 'Home Food Delivery',
    image: '/project-gharkachulha.png',
    size: 'medium',
  },
  {
    title: 'Feather',
    category: 'Landing Page',
    tag: 'SaaS Marketing',
    image: '/project-feather-landing.png',
    size: 'medium',
  },
  {
    title: 'Flowstrate',
    category: 'Web App',
    tag: 'AI Workflow Builder',
    image: '/project-flowstrate.png',
    size: 'large',
  },
  {
    title: 'Feather App',
    category: 'Mobile App',
    tag: 'Productivity Suite',
    image: '/project-feather-app.png',
    size: 'full',
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
              Selected Work
            </motion.span>
            <motion.h2
              className="heading-xl portfolio-heading"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            >
              Our Work
            </motion.h2>
          </div>
          <motion.a
            href="#contact"
            className="btn btn-primary portfolio-cta"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>

      {/* Bento Grid */}
      <div className="container">
        <div className="portfolio-bento">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              className={`portfolio-card portfolio-card--${project.size}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="portfolio-card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="portfolio-card-overlay">
                <div className="portfolio-card-info">
                  <span className="portfolio-card-tag">{project.tag}</span>
                  <h3 className="portfolio-card-title">{project.title}</h3>
                  <span className="portfolio-card-category">{project.category}</span>
                </div>
                <div className="portfolio-card-arrow">
                  <ArrowUpRight size={20} strokeWidth={1.5} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
