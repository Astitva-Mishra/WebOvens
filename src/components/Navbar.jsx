import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#portfolio' },
]

const menuLinks = [
    { label: 'Websites', href: '#services', subtitle: 'React & Next.js' },
    { label: 'Apps', href: '#services', subtitle: 'React Native & Expo' },
    { label: 'Growth', href: '#services', subtitle: 'SEO & Performance' },
    { label: 'ERPs', href: '#services', subtitle: 'Enterprise systems' },
]

const secondaryLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--hero'} ${menuOpen ? 'navbar--menu-open' : ''}`}>
            <div className="navbar-inner">
                <div className="navbar-left">
                    <button
                        className="navbar-menu-btn"
                        onClick={() => setMenuOpen(v => !v)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span className={`navbar-menu-icon ${menuOpen ? 'is-open' : ''}`}>
                            <span className="navbar-menu-line" />
                            <span className="navbar-menu-line" />
                        </span>
                    </button>

                    <nav className="navbar-nav hide-mobile">
                        {navLinks.map(link => (
                            <a key={link.label} href={link.href} className="navbar-link text-sm">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <a href="#" className="navbar-logo">
                    <img src="/logo-new.png" alt="WebOvens" className="navbar-logo-img" />
                </a>

                <div className="navbar-right">
                    <a href="#contact" className="navbar-link text-sm hide-mobile">
                        Contact
                    </a>
                    <a href="#contact" className="btn navbar-cta">
                        Start a Project
                    </a>
                </div>
            </div>

            {/* Full-screen Menu */}
            <div className={`navbar-fullmenu ${menuOpen ? 'is-open' : ''}`}>
                <div className="navbar-fullmenu-inner">
                    <div className="navbar-fullmenu-content">
                        <nav className="navbar-fullmenu-primary">
                            <p className="text-eyebrow navbar-fullmenu-label">What We Build</p>
                            <ul className="navbar-fullmenu-list">
                                {menuLinks.map((link, i) => (
                                    <li key={i} className="navbar-fullmenu-item" style={{ '--index': i }}>
                                        <a
                                            href={link.href}
                                            className="navbar-fullmenu-link"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <span className="navbar-fullmenu-link-label">{link.label}</span>
                                            <span className="navbar-fullmenu-link-sub text-sm">{link.subtitle}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <nav className="navbar-fullmenu-secondary">
                            <ul>
                                {secondaryLinks.map((link, i) => (
                                    <li key={i} style={{ '--index': i }}>
                                        <a
                                            href={link.href}
                                            className="navbar-fullmenu-sec-link text-sm hover-underline"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="navbar-fullmenu-cards">
                        <a href="#contact" className="navbar-fullmenu-card" onClick={() => setMenuOpen(false)}>
                            <span className="text-lg">Start a Project</span>
                            <span className="text-sm" style={{ opacity: 0.6 }}>Let's build something great</span>
                        </a>
                        <a href="#portfolio" className="navbar-fullmenu-card" onClick={() => setMenuOpen(false)}>
                            <span className="text-lg">Our Work</span>
                            <span className="text-sm" style={{ opacity: 0.6 }}>See what we've built</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
