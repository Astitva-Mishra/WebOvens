import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Smartphone, TrendingUp, Settings } from 'lucide-react'
import './Services.css'

const services = [
    {
        icon: Globe,
        title: 'Websites',
        subtitle: 'React & Next.js',
        description: 'Lightning-fast sites engineered to convert visitors into customers. Built on React & Next.js.',
        image: '/aesthetic/service_1.png',
    },
    {
        icon: Smartphone,
        title: 'Mobile Apps',
        subtitle: 'React Native & Expo',
        description: 'One codebase. Two platforms. Native performance your users can feel.',
        image: '/aesthetic/service_2.png',
    },
    {
        icon: TrendingUp,
        title: 'Growth & SEO',
        subtitle: 'Performance Marketing',
        description: 'The traffic engine behind your growth. SEO, analytics, and performance marketing that compounds.',
        image: '/aesthetic/service_3.png',
    },
    {
        icon: Settings,
        title: 'ERPs & Platforms',
        subtitle: 'Enterprise Systems',
        description: 'The operational backbone your business runs on. Dashboards, ERPs, and internal tools built to last.',
        image: '/aesthetic/service_4.png',
    },
]

const blocks = [
    {
        heading: 'Built different. Shipped faster.',
        description: 'Go further, move faster, and ship products that actually matter to the people who use them.',
    },
    {
        heading: 'From MVP to enterprise. Without switching teams.',
        description: 'One team takes you from first line of code to production — and stays with you as you scale.',
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
