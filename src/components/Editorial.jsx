import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './Editorial.css'

export default function Editorial() {
    const ref = useRef(null)
    const imgRef = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const { scrollYProgress } = useScroll({
        target: imgRef,
        offset: ['start end', 'end start']
    })

    const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

    return (
        <section className="editorial" id="about" ref={ref}>
            <div className="container">
                {/* Large text block */}
                <motion.div
                    className="editorial-text"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="heading-2xl editorial-paragraph">
                        We are a team of engineers and designers who build production-grade digital products. From marketing sites and mobile apps to full-scale platforms, every product is built for speed, scale, and lasting quality.
                    </p>
                </motion.div>

                {/* Split layout: text + image */}
                <div className="editorial-split" ref={imgRef}>
                    <motion.div
                        className="editorial-left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.15 } }
                        }}
                    >
                        <motion.span
                            className="text-eyebrow editorial-eyebrow"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
                        >
                            About WebOvens
                        </motion.span>
                        <motion.h3
                            className="heading-md editorial-split-heading"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
                        >
                            We don't make promises.<br />We ship products.
                        </motion.h3>
                        <motion.p
                            className="text-md editorial-desc"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
                        >
                            Every project begins with a deep understanding of your goals. We combine rigorous engineering practices with intentional design to create products your users will love and your team can maintain.
                        </motion.p>
                        <motion.a
                            href="#contact"
                            className="btn btn-primary editorial-btn"
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
                        >
                            Learn More <ArrowRight size={16} />
                        </motion.a>
                    </motion.div>

                    <div className="editorial-right">
                        <div className="editorial-image-wrapper">
                            <motion.div className="editorial-image-inner" style={{ y: imgY }}>
                                <img src="/aesthetic/editorial.png" alt="WebOvens Quality" className="editorial-image-content" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
