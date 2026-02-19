import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import './Portfolio.css'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Website · React · Node.js',
    description: 'Full-stack marketplace with real-time inventory, payment gateway, and 3x faster load times.',
    color: 'rgba(245, 166, 35, 0.08)',
    year: '2024',
  },
  {
    title: 'Restaurant ERP System',
    category: 'Enterprise · React Native · Firebase',
    description: 'End-to-end operations management — POS, KDS, inventory tracking, and multi-branch analytics.',
    color: 'rgba(255, 107, 0, 0.06)',
    year: '2024',
  },
  {
    title: 'FinTech Mobile App',
    category: 'App · React Native · AI',
    description: 'AI-powered personal finance assistant with OCR receipt scanning and smart budget recommendations.',
    color: 'rgba(201, 169, 110, 0.06)',
    year: '2025',
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="section-eyebrow">
          <div className="pill">Selected Work</div>
          <h2 className="display-lg">Case studies.</h2>
        </div>

        <div className="portfolio-stack">
          {projects.map((proj, i) => (
            <motion.article
              key={i}
              className="project-card"
              style={{ '--card-glow': proj.color }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="project-header">
                <span className="project-year">{proj.year}</span>
                <div className="project-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="project-content">
                <span className="project-category">{proj.category}</span>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>
              </div>

              <div className="project-footer">
                <a className="project-link" href="#contact">
                  <ExternalLink size={13} /> View Case Study
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
