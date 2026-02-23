import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './IntroText.css'

const text = "Engineering-first, design-obsessed and adventure-ready."

export default function IntroText() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const words = text.split(' ')

    return (
        <section className="intro-text container" ref={ref}>
            <div className="intro-text-inner">
                <h2 className="sr-only">{text}</h2>
                <div aria-hidden="true" className="intro-text-heading heading-xl">
                    {words.map((word, wi) => (
                        <span key={wi} className="intro-word" style={{ '--word-index': wi }}>
                            {word.split('').map((char, ci) => {
                                const globalIndex = words.slice(0, wi).join(' ').length + (wi > 0 ? 1 : 0) + ci
                                return (
                                    <motion.span
                                        key={ci}
                                        className="intro-char"
                                        initial={{ opacity: 0, y: '100%' }}
                                        animate={isInView ? { opacity: 1, y: '0%' } : {}}
                                        transition={{
                                            duration: 0.5,
                                            delay: globalIndex * 0.025,
                                            ease: [0.16, 1, 0.3, 1]
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                )
                            })}
                            {wi < words.length - 1 && <span className="intro-space">&nbsp;</span>}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
