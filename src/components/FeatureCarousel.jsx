import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, ArrowRight, Plus, X } from 'lucide-react'
import './FeatureCarousel.css'

const features = [
    {
        eyebrow: 'End-to-End Ownership',
        title: 'One team owns everything.',
        description: 'Frontend, backend, database, deployment, CI/CD — we own the entire stack. No handoffs. No miscommunication. One team that ships.',
        image: '/aesthetic/feature_1.png',
    },
    {
        eyebrow: 'Speed to Market',
        title: 'Launch in weeks. Scale when ready.',
        description: 'We ship MVPs in weeks, not quarters. But fast doesn\'t mean fragile — every product is built on clean architecture that scales when you need it to.',
        image: '/aesthetic/feature_2.png',
    },
    {
        eyebrow: 'Pixel-Perfect Engineering',
        title: 'Design that converts. Code that scales.',
        description: 'We combine design thinking with engineering precision. Every pixel is intentional, every interaction is smooth, and every product drives results.',
        image: '/aesthetic/feature_3.png',
    },
]

export default function FeatureCarousel() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const containerRef = useRef(null)
    const [activeDetail, setActiveDetail] = useState(null)
    const [scrollPos, setScrollPos] = useState(0)

    const scroll = (dir) => {
        if (!containerRef.current) return
        const itemW = containerRef.current.children[0]?.offsetWidth || 400
        const gap = 20
        const newPos = dir === 'next'
            ? Math.min(scrollPos + 1, features.length - 1)
            : Math.max(scrollPos - 1, 0)
        setScrollPos(newPos)
        containerRef.current.scrollTo({
            left: newPos * (itemW + gap),
            behavior: 'smooth',
        })
    }

    return (
        <section className="feature-carousel-section" ref={ref}>
            {/* Heading */}
            <div className="container">
                <motion.div
                    className="feature-carousel-header"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } }
                    }}
                >
                    <motion.h2
                        className="heading-xl"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
                    >
                        The WebOvens advantage.
                    </motion.h2>
                    <motion.a
                        href="#contact"
                        className="btn btn-primary"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
                    >
                        Get in Touch
                    </motion.a>
                </motion.div>
            </div>

            {/* Carousel */}
            <div className="feature-carousel-track" ref={containerRef}>
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        className="feature-tile"
                        style={{ '--index': i }}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <img src={feature.image} className="feature-tile-bg" alt={feature.title} loading="lazy" />
                        <div className="feature-tile-overlay" />
                        <div className="feature-tile-inner">
                            <div className="feature-tile-content">
                                <p className="text-eyebrow feature-tile-eyebrow">{feature.eyebrow}</p>
                                <h3 className="heading-xs feature-tile-title">{feature.title}</h3>
                            </div>
                            <button
                                className="btn-icon feature-tile-btn"
                                onClick={() => setActiveDetail(i)}
                                aria-label={`More about ${feature.title}`}
                            >
                                <Plus size={18} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Controls */}
            <div className="container">
                <div className="feature-carousel-controls">
                    <nav className="feature-carousel-nav">
                        <button className="btn-icon btn-grey" onClick={() => scroll('prev')} aria-label="Previous">
                            <ArrowLeft size={18} />
                        </button>
                        <button className="btn-icon btn-grey" onClick={() => scroll('next')} aria-label="Next">
                            <ArrowRight size={18} />
                        </button>
                    </nav>
                    <div className="feature-carousel-dots">
                        {features.map((_, i) => (
                            <button
                                key={i}
                                className={`feature-dot ${scrollPos === i ? 'active' : ''}`}
                                onClick={() => {
                                    setScrollPos(i)
                                    if (containerRef.current) {
                                        const itemW = containerRef.current.children[0]?.offsetWidth || 400
                                        containerRef.current.scrollTo({ left: i * (itemW + 20), behavior: 'smooth' })
                                    }
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Detail Modal */}
            {activeDetail !== null && (
                <motion.div
                    className="feature-modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setActiveDetail(null)}
                >
                    <motion.div
                        className="feature-modal-inner"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button className="btn-icon feature-modal-close" onClick={() => setActiveDetail(null)}>
                            <X size={18} />
                        </button>
                        <span className="text-eyebrow">
                            {features[activeDetail].eyebrow}
                        </span>
                        <h2 className="heading-md">{features[activeDetail].title}</h2>
                        <p className="text-md" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            {features[activeDetail].description}
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </section>
    )
}
