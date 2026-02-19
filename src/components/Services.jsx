import { motion } from 'framer-motion'
import { Globe, Smartphone, TrendingUp, Settings, ArrowUpRight } from 'lucide-react'
import './Services.css'

const services = [
    {
        icon: Globe,
        num: '01',
        title: 'Websites',
        description: 'High-performance websites on Next.js & React. Marketing sites, SaaS platforms, and e-commerce — all built for speed, SEO, and conversion.',
        tech: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    },
    {
        icon: Smartphone,
        num: '02',
        title: 'Apps',
        description: 'Cross-platform mobile apps using React Native. Native speed, beautiful interfaces, published on both iOS & Android app stores.',
        tech: ['React Native', 'Expo', 'iOS', 'Android'],
    },
    {
        icon: TrendingUp,
        num: '03',
        title: 'Growth',
        description: 'Full-stack growth engineering — from SEO architecture and analytics to paid acquisition funnels that turn traffic into revenue.',
        tech: ['SEO', 'Analytics', 'CRO', 'Performance'],
    },
    {
        icon: Settings,
        num: '04',
        title: 'ERPs',
        description: 'Custom enterprise systems that unify your operations. Inventory, HR, billing, CRM, and reporting — all in one tailored platform.',
        tech: ['Custom ERP', 'Automation', 'API Integration'],
    },
]

export default function Services() {
    return (
        <section className="services section" id="services">
            <div className="container">
                <div className="section-eyebrow">
                    <div className="pill">What we build</div>
                    <h2 className="display-lg">Capabilities</h2>
                </div>

                <div className="services-stack">
                    {services.map((svc, i) => (
                        <motion.div
                            key={i}
                            className="service-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="service-left">
                                <span className="service-num">{svc.num}</span>
                                <div className="service-icon-wrap">
                                    <svc.icon size={22} strokeWidth={1.4} />
                                </div>
                            </div>

                            <div className="service-body">
                                <h3 className="service-title">{svc.title}</h3>
                                <p className="service-desc">{svc.description}</p>
                                <div className="service-tech">
                                    {svc.tech.map(t => (
                                        <span key={t} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="service-arrow">
                                <ArrowUpRight size={20} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
