import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import './CTA.css'

export default function CTA() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-200px' })

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

    return (
        <section className="cta-section" ref={sectionRef}>
            <motion.div className="cta-bg" style={{ y: bgY }}>
                <video
                    src="/bg-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="cta-bg-video"
                />
                <div className="cta-bg-gradient" />
            </motion.div>

            <div className="cta-inner">
                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Sparkles size={28} strokeWidth={1.2} className="cta-icon" />
                    <h2 className="heading-xl cta-heading">Experience the<br />WebOvens Difference.</h2>
                    <a href="#contact" className="btn btn-blur cta-btn">
                        Start a Project
                        <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
