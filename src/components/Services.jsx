import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Smartphone, TrendingUp, Settings } from 'lucide-react'
import './Services.css'

const services = [
    {
        icon: Globe,
        title: 'Websites',
        subtitle: 'React & Next.js',
        description: 'High-performance marketing sites, SaaS platforms, and e-commerce — built for speed, SEO, and conversion.',
        image: '/aesthetic/service_1.png',
    },
    {
        icon: Smartphone,
        title: 'Mobile Apps',
        subtitle: 'React Native & Expo',
        description: 'Cross-platform mobile apps with native speed and beautiful interfaces on both iOS & Android.',
        image: '/aesthetic/service_2.png',
    },
    {
        icon: TrendingUp,
        title: 'Growth & SEO',
        subtitle: 'Performance Marketing',
        description: 'Data-driven strategies that boost organic traffic, improve rankings, and accelerate user acquisition.',
        image: '/aesthetic/service_3.png',
    },
    {
        icon: Settings,
        title: 'ERPs & Platforms',
        subtitle: 'Enterprise Systems',
        description: 'Custom admin panels, dashboards, and internal tools — the backend infrastructure that powers your business.',
        image: '/aesthetic/service_4.png',
    },
]

const blocks = [
    {
        heading: 'Unique by design. Connected by purpose.',
        description: 'Go further, move faster, and ship products that actually matter to the people who use them.',
    },
    {
        heading: 'For projects near and far.',
        description: 'No matter where you are, every project is designed to launch flawlessly — from MVPs to enterprise platforms.',
    },
]

export default function Services() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="services-section" id="services" ref={ref}>
            <div className="services-sticky-container">
                <motion.div
                    className="services-heading"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h2 className="heading-xl services-title-text">What We Build</h2>
                </motion.div>

                {/* Product Cards Grid */}
                <div className="services-cards">
                    {services.map((svc, i) => (
                        <motion.a
                            key={i}
                            href="#contact"
                            className="service-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="service-card-image">
                                <img src={svc.image} alt={svc.title} loading="lazy" />
                            </div>
                            <div className="service-card-content">
                                <div className="service-card-icon">
                                    <svc.icon size={20} strokeWidth={1.5} />
                                </div>
                                <h3 className="service-card-title">{svc.title}</h3>
                                <p className="service-card-subtitle">{svc.subtitle}</p>
                                <p className="service-card-desc">{svc.description}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Tagline Blocks */}
                <div className="services-blocks">
                    {blocks.map((block, i) => (
                        <motion.div
                            key={i}
                            className="services-block"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.1, delayChildren: i * 0.12 } }
                            }}
                        >
                            <motion.p
                                className="services-block-heading heading-md"
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
                            >
                                {block.heading}
                            </motion.p>
                            <motion.p
                                className="services-block-desc text-md"
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
                            >
                                {block.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
