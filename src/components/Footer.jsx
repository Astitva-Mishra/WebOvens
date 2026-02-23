import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, Linkedin, Github, Twitter, Instagram, Code2, Zap } from 'lucide-react'
import './Footer.css'

const services = [
    { label: 'Websites', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
    { label: 'Growth & SEO', href: '#services' },
    { label: 'ERPs & Platforms', href: '#services' },
]

const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

const socials = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
]

export default function Footer() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    return (
        <footer className="footer" id="contact" ref={ref}>
            <div className="container">
                {/* Top: decorative symbol + tagline */}
                <motion.div
                    className="footer-top"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Zap size={48} strokeWidth={1} className="footer-symbol" />
                    <h3 className="heading-md footer-tagline">
                        Products that launch fast, convert better,<br />and scale without chaos.
                    </h3>
                    <p className="text-md footer-desc">
                        We partner with startups and enterprises to build digital products that actually work—from concept to production.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="footer-grid">
                    <div className="footer-col">
                        <span className="text-eyebrow footer-col-label">Services</span>
                        <ul className="footer-col-list">
                            {services.map((item, i) => (
                                <li key={i}>
                                    <a href={item.href} className="text-sm hover-underline footer-link">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <span className="text-eyebrow footer-col-label">Navigate</span>
                        <ul className="footer-col-list">
                            {navItems.map((item, i) => (
                                <li key={i}>
                                    <a href={item.href} className="text-sm hover-underline footer-link">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <span className="text-eyebrow footer-col-label">Get Started</span>
                        <p className="text-sm footer-col-desc">Ready to build something? Let's talk about your next project.</p>
                        <a href="mailto:hello@webovens.com" className="btn btn-primary footer-cta">
                            hello@webovens.com <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>

                {/* Social */}
                <div className="footer-social">
                    {socials.map((s, i) => (
                        <a
                            key={i}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                            aria-label={s.label}
                        >
                            <s.icon size={20} strokeWidth={1.5} />
                        </a>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="footer-bottom">
                    <span className="text-xs footer-copyright">
                        © {new Date().getFullYear()} WebOvens. All rights reserved.
                    </span>
                    <span className="text-xs footer-credit">
                        Crafted with <Code2 size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> + obsession
                    </span>
                </div>
            </div>
        </footer>
    )
}
