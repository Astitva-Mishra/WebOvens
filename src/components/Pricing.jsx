import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import './Pricing.css'

const plans = [
    {
        id: 'Starter',
        price: '₹50,000',
        period: 'per project',
        desc: 'For founders and early-stage teams needing a strong digital footprint.',
        features: [
            'Up to 5 pages',
            'Responsive design',
            'Core CMS integration',
            'SEO foundations',
            '30 days support',
        ],
    },
    {
        id: 'Studio',
        price: '₹1,50,000',
        period: 'per project',
        desc: 'For growth-stage companies building their flagship product.',
        features: [
            'Full custom product',
            'User auth & billing',
            'Admin dashboard',
            'API integrations',
            'Priority delivery',
            '90 days support',
        ],
        highlight: true,
    },
    {
        id: 'Enterprise',
        price: 'Custom',
        period: 'contact us',
        desc: 'For organisations requiring a long-term, deeply integrated engineering partner.',
        features: [
            'Everything in Studio',
            'Multi-platform dev',
            'Security architecture',
            'Dedicated team pod',
            'SLA guarantee',
            '24/7 support',
        ],
    },
]

export default function Pricing() {
    return (
        <section className="pricing section" id="pricing">
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center' }}>
                    <div className="pill" style={{ margin: '0 auto 28px' }}>Investment</div>
                    <h2 className="display-lg">Transparent pricing.</h2>
                    <p className="body-lg" style={{ maxWidth: 500, margin: '20px auto 0' }}>
                        Every plan is a fixed-scope project. No surprises, no hourly billing.
                    </p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            className={`pricing-card card ${plan.highlight ? 'pricing-card--highlight' : ''}`}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            {plan.highlight && (
                                <div className="pricing-popular-badge">Most Popular</div>
                            )}

                            <div className="pricing-header-row">
                                <span className="pricing-plan-name">{plan.id}</span>
                                <div className="pricing-price-wrap">
                                    <span className="pricing-price">{plan.price}</span>
                                    <span className="label pricing-period">{plan.period}</span>
                                </div>
                            </div>

                            <p className="pricing-desc body-md">{plan.desc}</p>

                            <div className="pricing-divider" />

                            <ul className="pricing-features">
                                {plan.features.map((f, j) => (
                                    <li key={j}>
                                        <Check size={13} className="pricing-check" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href="#contact" className={`btn ${plan.highlight ? 'btn-fire' : 'btn-ghost'} pricing-cta`}>
                                Get Started
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
