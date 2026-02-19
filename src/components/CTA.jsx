import { motion } from 'framer-motion'
import { ArrowRight, Flame } from 'lucide-react'
import './CTA.css'

export default function CTA() {
    return (
        <section className="cta-section section" id="contact">
            <div className="container">
                <motion.div
                    className="cta-inner"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <div className="pill cta-pill">
                        <Flame size={10} />  Start a Project
                    </div>
                    <h2 className="display-lg cta-headline">
                        Ready to build <br />
                        <span className="fire-text">something great?</span>
                    </h2>
                    <p className="body-lg cta-desc">
                        Tell us about your project. We'll schedule a free strategy call
                        and outline exactly how we'd approach it.
                    </p>
                    <div className="cta-actions">
                        <a href="mailto:webovens.in@gmail.com" className="btn btn-fire btn-lg">
                            webovens.in@gmail.com <ArrowRight size={16} />
                        </a>
                        <p className="cta-note">Free strategy call. No commitment.</p>
                    </div>
                </motion.div>
            </div>
            {/* Ambient glow */}
            <div className="cta-glow" />
        </section>
    )
}
