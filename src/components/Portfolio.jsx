import { useRef, useState, useEffect, useCallback } from 'react'
import './Portfolio.css'

/* ─────────────────────────────────────────────
   Project data
───────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    title: 'Orderlo',
    category: 'FOOD ORDERING',
    subtitle: 'Full-Stack Platform',
    image: '/project-orderlo.png',
    url: 'https://order-lo.vercel.app/',
  },
  {
    id: 2,
    title: 'Ghar Ka Chulha',
    category: 'HOME DELIVERY',
    subtitle: 'Mobile App',
    image: '/project-gharkachulha.png',
    url: 'https://www.gharkachulha.in/',
  },
  {
    id: 3,
    title: 'Feather',
    category: 'SAAS MARKETING',
    subtitle: 'Landing Page',
    image: '/project-feather-landing.png',
    url: 'https://feather-orcin.vercel.app/landing.html',
  },
  {
    id: 4,
    title: 'Flowstrate',
    category: 'AI WORKFLOW',
    subtitle: 'Web App',
    image: '/project-flowstrate.png',
    url: 'https://flowstate-rouge.vercel.app/',
  },
  {
    id: 5,
    title: 'Feather App',
    category: 'PRODUCTIVITY',
    subtitle: 'Mobile App',
    image: '/project-feather-app.png',
    url: 'https://feather-orcin.vercel.app/',
  },
]

/* ─────────────────────────────────────────────
   ParallaxCard — 3D tilt + hover overlay + redirect
───────────────────────────────────────────── */
function ParallaxCard({ project }) {
  const cardRef = useRef(null)
  const imgRef = useRef(null)
  const rafRef = useRef(null)
  const curr = useRef({ rx: 0, ry: 0, scale: 1, ix: 0, iy: 0 })
  const target = useRef({ rx: 0, ry: 0, scale: 1, ix: 0, iy: 0 })

  const lerp = (a, b, t) => a + (b - a) * t

  const animate = useCallback(() => {
    const c = curr.current
    const t = target.current
    const ease = 0.09

    c.rx = lerp(c.rx, t.rx, ease)
    c.ry = lerp(c.ry, t.ry, ease)
    c.scale = lerp(c.scale, t.scale, ease)
    c.ix = lerp(c.ix, t.ix, ease)
    c.iy = lerp(c.iy, t.iy, ease)

    if (cardRef.current) {
      cardRef.current.style.transform =
        `perspective(1000px) rotateX(${c.rx}deg) rotateY(${c.ry}deg) scale(${c.scale})`
    }
    if (imgRef.current) {
      imgRef.current.style.transform =
        `translate(${c.ix}px, ${c.iy}px) scale(1.08)`
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [animate])

  const onMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    target.current = { rx: -y * 8, ry: x * 12, scale: 1.04, ix: x * 14, iy: y * 10 }
  }

  const onMouseLeave = () => {
    target.current = { rx: 0, ry: 0, scale: 1, ix: 0, iy: 0 }
  }

  const handleClick = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className="pf-card"
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      aria-label={`Visit ${project.title}`}
    >
      {/* Image */}
      <div className="pf-card-image-wrap">
        <img
          ref={imgRef}
          src={project.image}
          alt={project.title}
          className="pf-card-img"
          draggable={false}
        />
      </div>

      {/* Hover overlay */}
      <div className="pf-card-overlay">
        <div className="pf-card-overlay-inner">
          <div className="pf-card-overlay-text">
            <span className="pf-card-category">{project.category}</span>
            <h3 className="pf-card-title">{project.title}</h3>
            <span className="pf-card-subtitle">{project.subtitle}</span>
          </div>
          <div className="pf-card-arrow" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 16L16 4M16 4H8M16 4V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Portfolio — scroll-hijack section
───────────────────────────────────────────── */
export default function Portfolio() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const translateXRef = useRef(0)
  const targetXRef = useRef(0)
  const rafRef = useRef(null)

  /* ── Set section height to enable scroll-driven horizontal ── */
  const calcHeight = useCallback(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return
    const maxTranslate = track.scrollWidth - window.innerWidth
    section.style.height = `calc(100vh + ${Math.max(0, maxTranslate)}px)`
  }, [])

  /* ── Smooth lerp loop ── */
  const lerpLoop = useCallback(() => {
    const EASE = 0.1
    const next = translateXRef.current + (targetXRef.current - translateXRef.current) * EASE
    translateXRef.current = next
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${next}px)`
    }
    rafRef.current = requestAnimationFrame(lerpLoop)
  }, [])

  /* ── Map vertical scroll → horizontal translation ── */
  const onScroll = useCallback(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return
    const maxTranslate = track.scrollWidth - window.innerWidth
    const scrolledIn = window.scrollY - section.offsetTop
    targetXRef.current = Math.max(0, Math.min(maxTranslate, scrolledIn))
  }, [])

  useEffect(() => {
    calcHeight()
    window.addEventListener('resize', calcHeight)
    window.addEventListener('scroll', onScroll, { passive: true })
    rafRef.current = requestAnimationFrame(lerpLoop)
    return () => {
      window.removeEventListener('resize', calcHeight)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [calcHeight, onScroll, lerpLoop])

  return (
    <section className="pf-section" id="portfolio" ref={sectionRef}>
      <div className="pf-sticky">
        <div className="pf-header">
          <span className="pf-eyebrow">PORTFOLIO</span>
          <h2 className="pf-heading">Our Work</h2>
        </div>

        <div className="pf-track" ref={trackRef}>
          {PROJECTS.map((project) => (
            <ParallaxCard key={project.id} project={project} />
          ))}
        </div>

        <div className="pf-fade-left" />
        <div className="pf-fade-right" />

        <div className="pf-scroll-hint">
          <span>Scroll to explore</span>
          <svg width="40" height="10" viewBox="0 0 40 10" fill="none">
            <path d="M0 5h38M33 1l5 4-5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}
