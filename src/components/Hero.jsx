import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import './Hero.css'

export default function Hero() {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'] // Tracks the 300vh section
    })

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // ── 1. Hero Mask Morphs into the Tall Center Grid Cell ──
    // In Lightship, the center image stays tall and is flanked by smaller landscapes
    // We shrink down to a centered vertical rectangle on desktop, and a wider block on mobile.
    const pl = useTransform(scrollYProgress, [0, 0.45], ['0vw', isMobile ? '5vw' : '35vw'])
    const pr = useTransform(scrollYProgress, [0, 0.45], ['0vw', isMobile ? '5vw' : '35vw'])
    const pt = useTransform(scrollYProgress, [0, 0.45], ['0vh', isMobile ? '30vh' : '15vh'])
    const pb = useTransform(scrollYProgress, [0, 0.45], ['0vh', isMobile ? '30vh' : '15vh'])
    const maskRadius = useTransform(scrollYProgress, [0, 0.4], [0, 24])

    // Animate the padding as a combined string for performance
    const maskPadding = useMotionTemplate`${pt} ${pr} ${pb} ${pl}`

    // ── 2. Title and Overlay fade out ──
    const titleY = useTransform(scrollYProgress, [0, 0.25], [0, -100])
    const titleOpacity = useTransform(scrollYProgress, [0.05, 0.25], [1, 0])
    const cueOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

    // ── 3. The 4 satellite images fly in to wrap around the center hero ──
    // They come from out of bounds (different depths/sides) into their grid positions
    const img1X = useTransform(scrollYProgress, [0.15, 0.45], ['-40vw', '0vw']) // Left Top
    const img2X = useTransform(scrollYProgress, [0.15, 0.45], ['-30vw', '0vw']) // Left Bottom

    const img3X = useTransform(scrollYProgress, [0.15, 0.45], ['40vw', '0vw']) // Right Top
    const img3Y = useTransform(scrollYProgress, [0.15, 0.45], ['20vh', '0vh'])

    const img4X = useTransform(scrollYProgress, [0.15, 0.45], ['30vw', '0vw']) // Right Bottom
    const img4Y = useTransform(scrollYProgress, [0.15, 0.45], ['80vh', '0vh'])

    // The grid cells fade in smoothly as they fly
    const gridOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1])

    return (
        <section className="hero" ref={sectionRef}>
            <div className="hero-sticky">

                {/* ── Background: Light theme page color ── */}
                <div className="hero-page-bg" />

                {/* ── Center Stage: The Shrinking Hero ── */}
                <motion.div
                    className="hero-mask-wrapper"
                    style={{ padding: maskPadding }}
                >
                    <motion.div
                        className="hero-mask"
                        style={{ borderRadius: maskRadius }}
                    >
                        {/* The new dark aesthetic video */}
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

                        {/* Title goes here */}
                        <motion.div
                            className="hero-content"
                            style={{ y: titleY, opacity: titleOpacity }}
                        >
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
                            <motion.p
                                className="hero-subtitle text-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                            >
                                Extraordinary digital products that outpace the competition.
                            </motion.p>
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

                {/* ── The Flying Grid Elements (Lightship Cluster Pattern) ── */}
                <motion.div
                    className="hero-assemble-grid"
                    style={{ opacity: gridOpacity }}
                >
                    {/* Item 1: Top Left Landscape (Large) */}
                    <motion.div
                        className="hg-item hg-tl"
                        style={{ x: img1X }}
                    >
                        <img src="/hero-grid/custom_1.png" alt="Aesthetic agency tech 1" loading="eager" />
                    </motion.div>

                    {/* Item 2: Bottom Left Landscape (Small) */}
                    <motion.div
                        className="hg-item hg-bl"
                        style={{ x: img2X }}
                    >
                        <img src="/hero-grid/custom_2.png" alt="Aesthetic agency tech 2" loading="eager" />
                    </motion.div>

                    {/* Item 3: Top Right Landscape (Medium) */}
                    <motion.div
                        className="hg-item hg-tr"
                        style={{ x: img3X, y: img3Y }}
                    >
                        <img src="/hero-grid/custom_3.png" alt="Aesthetic agency tech 3" loading="eager" />
                    </motion.div>

                    {/* Item 4: Bottom Right Landscape (Large) */}
                    <motion.div
                        className="hg-item hg-br"
                        style={{ x: img4X, y: img4Y }}
                    >
                        <img src="/hero-grid/custom_4.png" alt="Aesthetic agency tech 4" loading="lazy" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
