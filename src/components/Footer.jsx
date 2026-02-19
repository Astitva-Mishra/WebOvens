import logo from '/logo-new.png'
import './Footer.css'
import { Phone, Mail, Globe, ArrowUpRight } from 'lucide-react'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={logo} alt="WebOvens" className="footer-logo-img" />
                            <span className="footer-logo-text">WebOvens</span>
                        </div>
                        <p className="footer-tagline">
                            We build digital products<br />that leave a mark.
                        </p>

                        {/* Real contact details from business card */}
                        <div className="footer-contact">
                            <a href="tel:+919119734890" className="footer-contact-row">
                                <Phone size={13} /> +91 9119734890
                            </a>
                            <a href="mailto:webovens.in@gmail.com" className="footer-contact-row">
                                <Mail size={13} /> webovens.in@gmail.com
                            </a>
                            <a href="https://www.webovens.in" target="_blank" rel="noopener noreferrer" className="footer-contact-row">
                                <Globe size={13} /> www.webovens.in
                            </a>
                        </div>
                    </div>

                    {/* Navigation links */}
                    <div className="footer-cols">
                        <div className="footer-col">
                            <h4 className="footer-col-title">Services</h4>
                            <a href="#services">Websites</a>
                            <a href="#services">Mobile Apps</a>
                            <a href="#services">Growth</a>
                            <a href="#services">ERPs</a>
                        </div>
                        <div className="footer-col">
                            <h4 className="footer-col-title">Company</h4>
                            <a href="#portfolio">Our Work</a>
                            <a href="#pricing">Pricing</a>
                            <a href="mailto:webovens.in@gmail.com" className="flex-footer-link">
                                Contact Us <ArrowUpRight size={11} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {year} WebOvens Studio. All rights reserved.</span>
                    <span className="footer-craft">Crafted with fire.</span>
                </div>
            </div>
        </footer>
    )
}
