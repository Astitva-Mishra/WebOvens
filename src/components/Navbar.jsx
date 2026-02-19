import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '/logo-new.png'
import './Navbar.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-inner">
                {/* Logo */}
                <a href="#" className="nav-logo">
                    <img src={logo} alt="WebOven" className="nav-logo-img" />
                    <span className="nav-logo-text">WebOvens</span>
                </a>

                {/* Links */}
                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                    <a href="#portfolio" onClick={() => setMenuOpen(false)}>Work</a>
                    <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
                    <a href="#contact" className="btn btn-fire nav-cta text-black" onClick={() => setMenuOpen(false)}>
                        Start a Project
                    </a>
                </nav>

                <button className="nav-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
                    {menuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div> 
        </header>
    )
}
