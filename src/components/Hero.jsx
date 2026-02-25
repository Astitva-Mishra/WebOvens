import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import './Hero.css'

export default function Hero() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start']
    })

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // ── 1. Hero Mask Morphs ──
    const pl = useTransform(scrollYProgress, [0, 0.45], ['0vw', isMobile ? '5vw' : '35vw'])
    const pr = useTransform(scrollYProgress, [0, 0.45], ['0vw', isMobile ? '5vw' : '35vw'])
    const pt = useTransform(scrollYProgress, [0, 0.45], ['0vh', isMobile ? '30vh' : '15vh'])
    const pb = useTransform(scrollYProgress, [0, 0.45], ['0vh', isMobile ? '30vh' : '15vh'])
    const maskRadius = useTransform(scrollYProgress, [0, 0.4], [0, 24])
    const maskPadding = useMotionTemplate`${pt} ${pr} ${pb} ${pl}`

    // ── 2. Title fade out ──
    const titleY = useTransform(scrollYProgress, [0, 0.25], [0, -100])
    const titleOpacity = useTransform(scrollYProgress, [0.05, 0.25], [1, 0])
    const cueOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

    // ── 3. Grid Images — 4-panel bento ──
    // Left column — fly in from left
    const imgTLX = useTransform(scrollYProgress, [0.15, 0.45], ['-50vw', '0vw'])
    const imgBLX = useTransform(scrollYProgress, [0.18, 0.48], ['-40vw', '0vw'])
    const imgBLY = useTransform(scrollYProgress, [0.18, 0.48], ['20vh', '0vh'])

    // Right column — fly in from right
    const imgTRX = useTransform(scrollYProgress, [0.15, 0.45], ['50vw', '0vw'])
    const imgBRX = useTransform(scrollYProgress, [0.18, 0.48], ['40vw', '0vw'])
    const imgBRY = useTransform(scrollYProgress, [0.18, 0.48], ['20vh', '0vh'])

    const gridOpacity = useTransform(scrollYProgress, [0.12, 0.32], [0, 1])

    return (
        <section className="hero" ref={sectionRef}>
            <div className="hero-sticky">
                <div className="hero-page-bg" />

                <motion.div
                    className="hero-mask-wrapper"
                    style={{ padding: maskPadding }}
                >
                    <motion.div
                        className="hero-mask"
                        style={{ borderRadius: maskRadius }}
                    >
                        <div className="hero-bg">
                            <video
                                src="/bg-video.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="hero-bg-img"
                            />
                            <div className="hero-bg-overlay" />
                        </div>

                        {/* ── Centered Content Block ── */}
                        <motion.div
                            className="hero-content"
                            style={{ y: titleY, opacity: titleOpacity }}
                        >
                            <div className="hero-center-block">
                                {/* Eyebrow */}
                                <motion.span
                                    className="hero-eyebrow"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                >
                                    Digital Product Studio
                                </motion.span>

                                {/* Main Title */}
                                <h1 className="hero-title" id="page-heading">
                                    <span className="sr-only">We Build</span>
                                    <motion.svg
                                        className="hero-svg"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1000 200"
                                        aria-hidden="true"
                                        initial={{ opacity: 0, y: 60, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                    >
                                        <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle"
                                            fontFamily="'Outfit', sans-serif" fontWeight="900" fontSize="180"
                                            letterSpacing="-8" fill="white">
                                            WE BUILD
                                        </text>
                                    </motion.svg>
                                </h1>

                                {/* Subtitle */}
                                <motion.p
                                    className="hero-subtitle"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                                >
                                    Websites, apps, and platforms that give your business an unfair advantage.
                                    <br />
                                    <span className="hero-subtitle-accent">One team. Full stack. Zero handoffs.</span>
                                </motion.p>

                                {/* CTA Button */}
                                <motion.a
                                    href="#contact"
                                    className="btn hero-cta"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
                                >
                                    Start a Project <ArrowRight size={16} />
                                </motion.a>
                            </div>
                        </motion.div>

                        <motion.div
                            className="hero-scroll-cue"
                            style={{ opacity: cueOpacity }}
                        >
                            <ArrowDown size={14} strokeWidth={1.5} />
                            <span>Scroll to explore</span>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* ── 4-Panel Grid Assembly ── */}
                <motion.div
                    className="hero-assemble-grid"
                    style={{ opacity: gridOpacity }}
                >
                    {/* Left column — 2 stacked */}
                    <motion.div className="hg-item hg-tl" style={{ x: imgTLX }}>
                        <img src="/hero-grid/custom_1.png" alt="" loading="eager" />
                    </motion.div>
                    <motion.div className="hg-item hg-bl" style={{ x: imgBLX, y: imgBLY }}>
                        <img src="/hero-grid/custom_2.png" alt="" loading="eager" />
                    </motion.div>

                    {/* Right column — 2 stacked */}
                    <motion.div className="hg-item hg-tr" style={{ x: imgTRX }}>
                        <img src="/hero-grid/custom_3.png" alt="" loading="eager" />
                    </motion.div>
                    <motion.div className="hg-item hg-br" style={{ x: imgBRX, y: imgBRY }}>
                        <img src="/hero-grid/custom_4.png" alt="" loading="eager" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
