import { motion } from 'framer-motion'
import { ArrowRight, Flame, Globe, Smartphone, TrendingUp, Settings } from 'lucide-react'
import './Hero.css'

const word = {
    hidden: { y: '110%', rotateX: -80 },
    show: (i) => ({
        y: '0%',
        rotateX: 0,
        transition: { duration: 0.8, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }
    })
}

const fade = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.7, delay: 1.2 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }
    })
}

const pillars = [
    { icon: Globe, label: 'Websites' },
    { icon: Smartphone, label: 'Apps' },
    { icon: TrendingUp, label: 'Growth' },
    { icon: Settings, label: 'ERPs' },
]

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-glow" aria-hidden />
            <div className="hero-glow-right" aria-hidden />

            <div className="container hero-layout">
                {/* LEFT — headline block */}
                <div className="hero-left">
                    <motion.div
                        className="pill hero-pill"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Flame size={10} /> Digital Engineering Studio
                    </motion.div>

                    <h1 className="hero-display">
                        {['We', 'build', 'things'].map((w, i) => (
                            <span key={w} className="word-wrap">
                                <motion.span
                                    className="word"
                                    variants={word}
                                    initial="hidden"
                                    animate="show"
                                    custom={i}
                                >{w}</motion.span>
                            </span>
                        ))}
                        <br />
                        {['the', 'web'].map((w, i) => (
                            <span key={w} className="word-wrap">
                                <motion.span
                                    className="word"
                                    variants={word}
                                    initial="hidden"
                                    animate="show"
                                    custom={i + 3}
                                >{w}</motion.span>
                            </span>
                        ))}
                        <span className="word-wrap">
                            <motion.span
                                className="word fire-text"
                                variants={word}
                                initial="hidden"
                                animate="show"
                                custom={5}
                            >remembers.</motion.span>
                        </span>
                    </h1>

                    <motion.p
                        className="hero-sub"
                        variants={fade}
                        initial="hidden"
                        animate="show"
                        custom={0}
                    >
                        From blazing-fast websites and mobile apps to enterprise
                        ERPs — we forge digital products built to last.
                    </motion.p>

                    <motion.div
                        className="hero-actions"
                        variants={fade}
                        initial="hidden"
                        animate="show"
                        custom={1}
                    >
                        <a href="#contact" className="btn btn-fire">
                            Start Your Project <ArrowRight size={15} />
                        </a>
                        <a href="#portfolio" className="btn btn-ghost">
                            View Our Work
                        </a>
                    </motion.div>
                </div>

                {/* RIGHT — stats + pillars */}
                <motion.div
                    className="hero-right"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="hero-metric-card">
                        <div className="metric-row">
                            <span className="metric-num">50+</span>
                            <span className="metric-label">Products<br />Shipped</span>
                        </div>
                        <div className="metric-div" />
                        <div className="metric-row">
                            <span className="metric-num">100%</span>
                            <span className="metric-label">Client<br />Retention</span>
                        </div>
                        <div className="metric-div" />
                        <div className="metric-row">
                            <span className="metric-num">5★</span>
                            <span className="metric-label">Average<br />Rating</span>
                        </div>
                    </div>

                    <div className="hero-pillars-card">
                        {pillars.map((p, i) => (
                            <div key={i} className="pillar-item">
                                <p.icon size={20} strokeWidth={1.4} className="pillar-ic" />
                                <span className="pillar-name">{p.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll cue */}
            <motion.div
                className="hero-scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                transition={{ delay: 2.5, duration: 1 }}
            >
                <div className="scroll-line" />
                <span className="label">Scroll</span>
            </motion.div>
        </section>
    )
}
