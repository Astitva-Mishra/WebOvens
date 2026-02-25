import { useRef, useState, useEffect, useCallback } from 'react'
import './Portfolio.css'

/* ─────────────────────────────────────────────
   Project data
───────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    title: 'Orderlo',
    tag: 'Full Stack',
    year: '2024',
    description:
      'A high-performance food ordering platform built for speed and scale. Features real-time order tracking, restaurant dashboards, and AI-powered menu recommendations — serving thousands of daily active users.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'Socket.io'],
    image: '/project-orderlo.png',
    size: 'large',
  },
  {
    id: 2,
    title: 'Ghar Ka Chulha',
    tag: 'Mobile App',
    year: '2024',
    description:
      'Connecting home cooks with food lovers in their neighbourhood. A hyper-local platform that empowers home chefs to monetize their culinary skills with beautiful UX and seamless logistics.',
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'Razorpay', 'Node.js'],
    image: '/project-gharkachulha.png',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Feather',
    tag: 'Landing Page',
    year: '2025',
    description:
      'A cinematic SaaS marketing site engineered to convert. Built with scroll-driven animations, 3D elements, and a design language that communicates trust and modernity from the first pixel.',
    technologies: ['React', 'Framer Motion', 'GSAP', 'Three.js', 'Vite'],
    image: '/project-feather-landing.png',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Flowstrate',
    tag: 'Web App',
    year: '2025',
    description:
      'An AI-powered workflow automation builder that turns complex business processes into elegant visual flows. Drag, drop, connect — and deploy in seconds. Built for teams who move fast.',
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Prisma', 'Vercel', 'Tailwind'],
    image: '/project-flowstrate.png',
    size: 'large',
  },
  {
    id: 5,
    title: 'Feather App',
    tag: 'Mobile App',
    year: '2025',
    description:
      'The companion productivity suite to the Feather ecosystem. Smart task management, AI writing assistant, and a focus timer — all in one lightweight, beautifully designed mobile application.',
    technologies: ['React Native', 'Expo', 'OpenAI', 'Supabase', 'Reanimated'],
    image: '/project-feather-app.png',
    size: 'full',
  },
]

/* ─────────────────────────────────────────────
   ParallaxCard — per-card 3D tilt + hover
───────────────────────────────────────────── */
function ParallaxCard({ project, onClick }) {
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

  return (
    <div
      className="pf-card"
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick(project)}
      aria-label={`View ${project.title}`}
    >
      <div className="pf-card-image-wrap">
        <img
          ref={imgRef}
          src={project.image}
          alt={project.title}
          className="pf-card-img"
          draggable={false}
        />
        <div className="pf-card-shimmer" />
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   ProjectView — cinematic full-screen expand
───────────────────────────────────────────── */
function ProjectView({ project, onClose }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const prev = window.scrollY
    document.body.style.overflow = 'hidden'
    // Trigger entry animation
    const t = setTimeout(() => setVisible(true), 20)

    const onKey = (e) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', onKey)

    return () => {
      clearTimeout(t)
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      window.scrollTo(0, prev)
    }
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 550)
  }

  return (
    <div className={`pv-overlay ${visible ? 'pv-visible' : ''}`} aria-modal="true" role="dialog">
      {/* Hero */}
      <div className="pv-hero" style={{ backgroundImage: `url(${project.image})` }}>
        <div className="pv-hero-gradient" />
        <div className="pv-hero-content">
          <span className="pv-tag">{project.tag}</span>
          <span className="pv-year">{project.year}</span>
          <h2 className="pv-title">{project.title}</h2>
        </div>
        <button className="pv-close" onClick={handleClose} aria-label="Close project">
          ESC
        </button>
      </div>

      {/* Body */}
      <div className="pv-body">
        <div className="pv-body-inner">
          <p className="pv-description">{project.description}</p>
          <div className="pv-tech-section">
            <span className="pv-tech-label">// TECHNOLOGIES</span>
            <ul className="pv-tech-list">
              {project.technologies.map((tech) => (
                <li key={tech} className="pv-tech-item">{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Portfolio — main section
───────────────────────────────────────────── */
export default function Portfolio() {
  const trackRef = useRef(null)
  const autoScrollRef = useRef(null)
  const isDragging = useRef(false)
  const isHovering = useRef(false)
  const startX = useRef(0)
  const startScroll = useRef(0)
  const velX = useRef(0)
  const lastX = useRef(0)
  const momRaf = useRef(null)
  const [activeProject, setActiveProject] = useState(null)

  // Duplicate projects for infinite loop
  const items = [...PROJECTS, ...PROJECTS, ...PROJECTS]

  /* — Auto scroll via RAF — */
  const startAutoScroll = useCallback(() => {
    const SPEED = 0.6
    const step = () => {
      if (isDragging.current || isHovering.current) {
        autoScrollRef.current = requestAnimationFrame(step)
        return
      }
      const el = trackRef.current
      if (!el) return
      el.scrollLeft += SPEED

      // Infinite loop: when we reach the second set, snap back to first
      const setW = el.scrollWidth / 3
      if (el.scrollLeft >= setW * 2) el.scrollLeft -= setW
      if (el.scrollLeft <= 0) el.scrollLeft += setW

      autoScrollRef.current = requestAnimationFrame(step)
    }
    autoScrollRef.current = requestAnimationFrame(step)
  }, [])

  useEffect(() => {
    // Prime scroll to the middle duplicate set so we can loop both ways
    const el = trackRef.current
    if (el) el.scrollLeft = el.scrollWidth / 3
    startAutoScroll()
    return () => cancelAnimationFrame(autoScrollRef.current)
  }, [startAutoScroll])

  /* — Wheel → horizontal — */
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onWheel = (e) => {
      e.preventDefault()
      el.scrollLeft += e.deltaY * 1.2
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  /* — Drag — */
  const onPointerDown = (e) => {
    if (e.button !== 0) return
    isDragging.current = true
    startX.current = e.clientX
    startScroll.current = trackRef.current.scrollLeft
    lastX.current = e.clientX
    velX.current = 0
    cancelAnimationFrame(momRaf.current)
    trackRef.current.style.cursor = 'grabbing'
    trackRef.current.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e) => {
    if (!isDragging.current) return
    velX.current = lastX.current - e.clientX
    lastX.current = e.clientX
    const delta = startX.current - e.clientX
    trackRef.current.scrollLeft = startScroll.current + delta
  }

  const onPointerUp = () => {
    if (!isDragging.current) return
    isDragging.current = false
    trackRef.current.style.cursor = 'grab'
    applyMomentum()
  }

  const applyMomentum = () => {
    const decay = 0.92
    const step = () => {
      velX.current *= decay
      if (Math.abs(velX.current) < 0.3) return
      trackRef.current.scrollLeft += velX.current
      momRaf.current = requestAnimationFrame(step)
    }
    momRaf.current = requestAnimationFrame(step)
  }

  /* — Hover pause — */
  const onMouseEnter = () => { isHovering.current = true }
  const onMouseLeave = () => { isHovering.current = false }

  const openProject = (project) => {
    if (!isDragging.current) setActiveProject(project)
  }

  return (
    <>
      <section className="pf-section" id="portfolio">
        {/* Header */}
        <div className="pf-header">
          <span className="pf-eyebrow">PORTFOLIO</span>
          <h2 className="pf-heading">Our Work</h2>
        </div>

        {/* Scroll track */}
        <div
          className="pf-track"
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {items.map((project, i) => (
            <ParallaxCard
              key={`${project.id}-${i}`}
              project={project}
              onClick={openProject}
            />
          ))}
        </div>

        {/* Fade edges */}
        <div className="pf-fade-left" />
        <div className="pf-fade-right" />
      </section>

      {/* Cinematic project view */}
      {activeProject && (
        <ProjectView
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  )
}
