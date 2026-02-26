import { useRef, useState, useCallback } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, User, Mail, Briefcase, MessageSquare, Phone } from 'lucide-react'
import emailjs from '@emailjs/browser'
import './Marquee.css'

export default function ProjectInquiry() {
    const ref = useRef(null)
    const imgRef = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        message: '',
        contactNumber: ''
    })
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

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (successMessage) setSuccessMessage('')
        if (errorMessage) setErrorMessage('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setSuccessMessage('')
        setErrorMessage('')

        const trimmedName = formData.name.trim()
        const trimmedEmail = formData.email.trim()
        const trimmedProjectType = formData.projectType.trim()
        const trimmedMessage = formData.message.trim()
        const trimmedContact = formData.contactNumber.trim()

        if (!trimmedName) {
            setErrorMessage('Please enter your name.')
            return
        }

        if (!validateEmail(trimmedEmail)) {
            setErrorMessage('Please enter a valid email address.')
            return
        }

        if (!trimmedProjectType) {
            setErrorMessage('Please specify your project type.')
            return
        }

        if (!trimmedMessage) {
            setErrorMessage('Please enter your project message.')
            return
        }

        if (!canSubmit()) {
            setErrorMessage('Please wait a few seconds before submitting again.')
            return
        }

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            setErrorMessage('Service is currently unavailable. Please try again later.')
            return
        }

        setIsLoading(true)

        try {
            const templateParams = {
                user_name: trimmedName,
                user_email: trimmedEmail,
                project_type: trimmedProjectType,
                project_message: trimmedMessage,
                contact_number: trimmedContact || '',
                submitted_at: new Date().toLocaleString()
            }

            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)

            setSuccessMessage('Your inquiry has been sent successfully! We\'ll get back to you soon.')
            setFormData({ name: '', email: '', projectType: '', message: '', contactNumber: '' })
            setLastSubmittedAt(Date.now())
        } catch {
            setErrorMessage('Something went wrong. Please try again in a moment.')
        } finally {
            setIsLoading(false)
        }
    }

    const isButtonDisabled = isLoading || !formData.name.trim() || !formData.email.trim() || !formData.projectType.trim() || !formData.message.trim()

    return (
        <section className="newsletter" id="start-project" ref={ref}>
            <div className="newsletter-inner container">
                {/* Form side */}
                <motion.div
                    className="newsletter-form-side"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-eyebrow newsletter-eyebrow">Start a project</span>
                    <h2 className="heading-lg newsletter-heading">
                        Tell us about<br />your idea.
                    </h2>
                    <p className="text-md newsletter-desc">
                        Share your project details and we'll get back to you with a tailored plan.
                    </p>
                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <div className="newsletter-input-wrap">
                            <User size={18} className="newsletter-input-icon" />
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="newsletter-input"
                                required
                                autoComplete="name"
                            />
                        </div>
                        <div className="newsletter-input-wrap">
                            <Mail size={18} className="newsletter-input-icon" />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your email"
                                className="newsletter-input"
                                required
                                autoComplete="email"
                            />
                        </div>
                        <div className="newsletter-input-wrap">
                            <Briefcase size={18} className="newsletter-input-icon" />
                            <input
                                type="text"
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                placeholder="Project type (e.g. Website, App, Branding)"
                                className="newsletter-input"
                                required
                            />
                        </div>
                        <div className="newsletter-input-wrap newsletter-textarea-wrap">
                            <MessageSquare size={18} className="newsletter-input-icon newsletter-textarea-icon" />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Describe your project..."
                                className="newsletter-input newsletter-textarea"
                                required
                                rows={4}
                            />
                        </div>
                        <div className="newsletter-input-wrap">
                            <Phone size={18} className="newsletter-input-icon" />
                            <input
                                type="tel"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                placeholder="Contact number (optional)"
                                className="newsletter-input"
                                autoComplete="tel"
                            />
                        </div>
                        <button
                            type="submit"
                            className={`btn btn-primary newsletter-submit${isButtonDisabled ? ' is-disabled' : ''}`}
                            disabled={isButtonDisabled}
                        >
                            {isLoading ? 'Sending…' : 'Send Inquiry'} <ArrowRight size={16} />
                        </button>
                        <p className="newsletter-trust-text">We typically respond within 24 hours.</p>
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
                            <img src="/aesthetic/feature_1.png" alt="Start a Project" className="newsletter-image-content" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
