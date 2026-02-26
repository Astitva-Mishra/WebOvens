import { useRef, useState, useCallback } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'
import './Marquee.css'

export default function Newsletter() {
    const ref = useRef(null)
    const imgRef = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })
    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [lastSubmittedAt, setLastSubmittedAt] = useState(null)

    const { scrollYProgress } = useScroll({
        target: imgRef,
        offset: ['start end', 'end start']
    })

    const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    const TO_EMAIL = import.meta.env.VITE_NEWSLETTER_TO_EMAIL

    const validateEmail = useCallback((value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(value.trim())
    }, [])

    const canSubmit = useCallback(() => {
        if (!lastSubmittedAt) return true
        const now = Date.now()
        const diffSeconds = (now - lastSubmittedAt) / 1000
        return diffSeconds >= 10
    }, [lastSubmittedAt])

    const handleSubmit = async (e) => {
        e.preventDefault()

        setSuccessMessage('')
        setErrorMessage('')

        const trimmedEmail = email.trim()

        if (!validateEmail(trimmedEmail)) {
            setErrorMessage('Please enter a valid email address.')
            return
        }

        if (!canSubmit()) {
            setErrorMessage('Please wait a few seconds before subscribing again.')
            return
        }

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !TO_EMAIL) {
            setErrorMessage('Subscription service is currently unavailable. Please try again later.')
            return
        }

        setIsLoading(true)

        try {
            const now = new Date()
            const formattedDateTime = now.toLocaleString(undefined, {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            })

            const templateParams = {
                to_email: TO_EMAIL,
                user_email: trimmedEmail,
                submitted_at: formattedDateTime
            }

            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)

            setSuccessMessage('You are subscribed! We will keep you posted.')
            setEmail('')
            setLastSubmittedAt(Date.now())
        } catch (err) {
            setErrorMessage('Something went wrong while subscribing. Please try again in a moment.')
        } finally {
            setIsLoading(false)
        }
    }

    const isButtonDisabled = isLoading || !email.trim()

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
                    <span className="text-eyebrow newsletter-eyebrow">Stay in the loop</span>
                    <h2 className="heading-lg newsletter-heading">
                        Get notified when<br />we ship.
                    </h2>
                    <p className="text-md newsletter-desc">
                        No spam. No fluff. Just real updates when we launch something worth seeing.
                    </p>
                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <div className="newsletter-input-wrap">
                            <Mail size={18} className="newsletter-input-icon" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    if (successMessage) setSuccessMessage('')
                                    if (errorMessage) setErrorMessage('')
                                }}
                                placeholder="Enter your email"
                                className="newsletter-input"
                                required
                                autoComplete="email"
                            />
                        </div>
                        <button
                            type="submit"
                            className={`btn btn-primary newsletter-submit${isButtonDisabled ? ' is-disabled' : ''}`}
                            disabled={isButtonDisabled}
                        >
                            {isLoading ? 'Subscribing…' : 'Subscribe'} <ArrowRight size={16} />
                        </button>
                    </form>
                    <div className="newsletter-status">
                        {successMessage && (
                            <p className="newsletter-status-text newsletter-status-success">
                                {successMessage}
                            </p>
                        )}
                        {errorMessage && (
                            <p className="newsletter-status-text newsletter-status-error">
                                {errorMessage}
                            </p>
                        )}
                    </div>
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
