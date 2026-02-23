import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import './Marquee.css'

export default function Newsletter() {
    const ref = useRef(null)
    const imgRef = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [email, setEmail] = useState('')

    const { scrollYProgress } = useScroll({
        target: imgRef,
        offset: ['start end', 'end start']
    })

    const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle newsletter signup
        setEmail('')
    }

    return (
        <section className="newsletter" ref={ref}>
            <div className="newsletter-inner container">
                {/* Form side */}
                <motion.div
                    className="newsletter-form-side"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-eyebrow newsletter-eyebrow">Stay Connected</span>
                    <h2 className="heading-lg newsletter-heading">
                        Get updates on our<br />latest work.
                    </h2>
                    <p className="text-md newsletter-desc">
                        No spam, no noise. Just updates on new projects, insights, and the occasional behind-the-scenes.
                    </p>
                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <div className="newsletter-input-wrap">
                            <Mail size={18} className="newsletter-input-icon" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="newsletter-input"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary newsletter-submit">
                            Subscribe <ArrowRight size={16} />
                        </button>
                    </form>
                </motion.div>

                {/* Image side */}
                <div className="newsletter-image-side" ref={imgRef}>
                    <div className="newsletter-image-wrapper">
                        <motion.div className="newsletter-image-inner" style={{ y: imgY }}>
                            <img src="/aesthetic/feature_1.png" alt="Get Updates" className="newsletter-image-content" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
