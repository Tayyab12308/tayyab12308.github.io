import { useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Lenis from 'lenis'
import './App.css'

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Node.js',
  'Next.js',
  'Ruby on Rails',
  'AWS',
  'GraphQL',
  'PostgreSQL',
  'Docker',
  'Kubernetes',
]

const experience = [
  {
    role: 'Software Engineer',
    company: 'RepRally',
    period: 'Oct 2025 — Jan 2026',
    impact:
      'Promo system end-to-end: admin tools, analytics, 50%+ user adoption within two weeks of launch.',
  },
  {
    role: 'Founding Engineer',
    company: 'Verfy',
    period: 'Jan 2025 — Oct 2025',
    impact: 'Node/Express + Prisma, Stripe, multi-round interview templates with metrics and automation.',
  },
  {
    role: 'SDE I',
    company: 'Amazon',
    period: 'Sep 2022 — Nov 2024',
    impact: 'React/TS ad UI + GenAI image flows; 15%+ adoption lift; shared component library across Ads surfaces.',
  },
  {
    role: 'Software Engineer',
    company: 'IEX Group',
    period: 'Feb 2020 — Sep 2022',
    impact: 'Java test infrastructure + React tools for validating exchange features with cross-functional teams.',
  },
]

const caseStudies = [
  {
    num: '01',
    title: 'Stockflow',
    challenge: 'Live market feel without fragile client state.',
    decision: 'WebSocket streams, chart primitives, hooks for routing + state.',
    outcome: 'Real-time charts, secure Rails API keys, mobile-first product velocity.',
    stack: 'React · Rails 7 · PostgreSQL · WS',
    links: [
      { label: 'stockflow.dev', href: 'https://stockflow.dev' },
      { label: 'GitHub', href: 'https://github.com/Tayyab12308/Stockflow' },
    ],
    accent: 'lime',
  },
  {
    num: '02',
    title: 'Amazon Ads',
    challenge: 'Scale custom creative adoption for advertisers.',
    decision: 'React/TS workflow redesign + GenAI entry points; shared UI kit.',
    outcome: '15%+ custom image adoption; consistency across products.',
    stack: 'React · TypeScript · GenAI',
    links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/tayyab-iqbal/' }],
    accent: 'hot',
  },
  {
    num: '03',
    title: 'RepRally',
    challenge: 'Increase conversion with promotions while keeping operations auditable and easy to manage.',
    decision: 'Designed a promo-code system end-to-end with admin management tools and analytics instrumentation.',
    outcome: '50%+ of users used promo codes within two weeks of launch, with clear tracking and iteration loops.',
    stack: 'React · React Native · Node/Express · Analytics',
    links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/tayyab-iqbal/' }],
    accent: 'lime',
  },
]

const sections = [
  { id: 'hero', index: '00', label: 'Intro' },
  { id: 'impact', index: '01', label: 'Impact' },
  { id: 'work', index: '02', label: 'Work' },
  { id: 'systems', index: '03', label: 'Stack' },
  { id: 'experience', index: '04', label: 'Jobs' },
  { id: 'contact', index: '05', label: 'Hire' },
]

const heroLines = ['Ship', 'interfaces', 'that', 'earn', 'trust.']

const lineReveal = {
  hidden: { opacity: 0, y: '1.1em', rotateX: -12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: 0.06 * i, duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  }),
}

function App() {
  const reduceMotion = useReducedMotion()
  const [activeId, setActiveId] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const [pookiePassword, setPookiePassword] = useState('')
  const [pookieError, setPookieError] = useState('')
  const [isPookieUnlocked, setIsPookieUnlocked] = useState(false)

  const metrics = useMemo(
    () => [
      { k: '15%+', v: 'Lift in custom ad image adoption (GenAI + UX).' },
      { k: '50%+', v: 'Users on promo codes within two weeks.' },
      { k: '6 yrs', v: 'Production web + mobile + backend ownership.' },
    ],
    [],
  )

  useEffect(() => {
    const mqMobile = window.matchMedia('(max-width: 900px)')
    let lenis = null
    let frame = 0

    const stopLenis = () => {
      cancelAnimationFrame(frame)
      frame = 0
      if (lenis) {
        lenis.destroy()
        lenis = null
      }
    }

    const startLenis = () => {
      stopLenis()
      lenis = new Lenis({ smoothWheel: true, lerp: 0.09 })
      const tick = (t) => {
        lenis.raf(t)
        frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    const syncLenis = () => {
      if (mqMobile.matches) stopLenis()
      else startLenis()
    }

    syncLenis()
    mqMobile.addEventListener('change', syncLenis)

    const els = document.querySelectorAll('main section[id]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id)
        })
      },
      { rootMargin: '-42% 0px -42% 0px', threshold: 0 },
    )
    els.forEach((el) => io.observe(el))

    return () => {
      mqMobile.removeEventListener('change', syncLenis)
      stopLenis()
      io.disconnect()
    }
  }, [])

  useEffect(() => {
    const mqMobile = window.matchMedia('(max-width: 900px)')
    if (!menuOpen || !mqMobile.matches) return undefined

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)')
    const onBreakpoint = () => {
      if (!mq.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', onBreakpoint)
    return () => mq.removeEventListener('change', onBreakpoint)
  }, [])

  useEffect(() => {
    if (!isPookieUnlocked) return undefined

    const timeoutId = window.setTimeout(() => {
      window.location.assign('/wellness-shots')
    }, 20000)

    return () => window.clearTimeout(timeoutId)
  }, [isPookieUnlocked])

  const handlePookieSubmit = (e) => {
    e.preventDefault()

    if (pookiePassword.trim() === 'batameez') {
      setPookieError('')
      setIsPookieUnlocked(true)
      return
    }

    setPookieError('Nope mamas, that password is not it. Try again.')
  }

  if (isPookieUnlocked) {
    return (
      <div className="pookie-welcome">
        <div className="pookie-welcome-card">
          <p className="pookie-kicker">For Pookie only</p>
          <h1>Hi my love 🤍</h1>
          <p>
            You are my favorite person, my calm, and my best part of every day. This little corner of the entire internet is only for you, and
            it always will be.
          </p>
          <p>I adore you endlessly.</p>
          <a className="btn btn-primary" href="/wellness-shots">
            Continue to wellness-shots
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="portfolio">
      <div className="noise-layer" aria-hidden />
      <div className="mesh-layer" aria-hidden />

      <aside className="rail" aria-label="Section navigation">
        <a href="#hero" className="rail-brand">
          <span className="rail-mark">TI</span>
          <span className="rail-name">Tayyab Iqbal</span>
        </a>
        <nav className="rail-nav">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={activeId === s.id ? 'is-active' : ''} title={s.label}>
              <span className="rail-idx">{s.index}</span>
              <span className="rail-label">{s.label}</span>
            </a>
          ))}
        </nav>
        <div className="rail-foot">
          <span className="rail-status">Open to roles</span>
        </div>
      </aside>

      <header className="mob-header">
        <a href="#hero" className="mob-mark">
          TI
        </a>
        <button type="button" className="mob-toggle" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </header>

      {menuOpen ? (
        <>
          <div className="mob-drawer-backdrop" onClick={() => setMenuOpen(false)} role="presentation" aria-hidden />
          <div className="mob-drawer" role="dialog" aria-modal="true" aria-label="Mobile menu">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMenuOpen(false)}
                className={activeId === s.id ? 'is-active' : ''}
              >
                <span>{s.index}</span>
                {s.label}
              </a>
            ))}
          </div>
        </>
      ) : null}

      <main className="main">
        <section className="hero" id="hero">
          <div className="hero-grid">
            <div className="hero-display">
              <p className="tag">
                Software engineer · full-stack product · <span className="availability">Available</span>
              </p>
              <h1 className="hero-title">
                {heroLines.map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    className="hero-line"
                    custom={i}
                    initial={reduceMotion ? false : 'hidden'}
                    animate={reduceMotion ? false : 'visible'}
                    variants={reduceMotion ? undefined : lineReveal}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
              <p className="hero-lede">
                I build product surfaces in <strong>React & TypeScript</strong>, own backend slices when needed, and
                care about measurable outcomes—not decoration.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="mailto:tayyab12308@gmail.com">
                  Email me
                </a>
                <a
                  className="btn btn-ghost"
                  href={`${import.meta.env.BASE_URL}Tayyab_Iqbal_Resume.pdf`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume PDF
                </a>
                <a className="btn btn-ghost" href="https://github.com/Tayyab12308" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="btn btn-ghost" href="https://www.linkedin.com/in/tayyab-iqbal/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="hero-panel">
              <div className="panel-card">
                <span className="panel-k">Focus</span>
                <p>Full-stack product features, design systems, testing discipline, AI-assisted workflows.</p>
              </div>
              <div className="panel-card panel-accent">
                <span className="panel-k">Now</span>
                <p>Seeking a team that ships fast and rewards ownership.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="marquee-wrap" aria-hidden>
          <div className="marquee">
            <span>
              {skills.concat(skills).map((s, i) => (
                <em key={`${s}-${i}`}>{s}</em>
              ))}
            </span>
          </div>
        </div>

        <section className="section impact" id="impact">
          <header className="section-head">
            <span className="section-idx">01</span>
            <h2>Proof, not adjectives</h2>
          </header>
          <div className="bento">
            {metrics.map((m, i) => (
              <article key={m.k} className={`bento-cell bento-${i}`}>
                <span className="bento-k">{m.k}</span>
                <p>{m.v}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section work" id="work">
          <header className="section-head">
            <span className="section-idx">02</span>
            <h2>Selected work</h2>
          </header>
          {caseStudies.map((c) => (
            <article key={c.title} className={`work-row work-${c.accent}`}>
              <div className="work-meta">
                <span className="work-num">{c.num}</span>
                <h3>{c.title}</h3>
                <p className="work-stack">{c.stack}</p>
              </div>
              <div className="work-body">
                <div className="work-block">
                  <span className="work-label">Problem</span>
                  <p>{c.challenge}</p>
                </div>
                <div className="work-block">
                  <span className="work-label">Approach</span>
                  <p>{c.decision}</p>
                </div>
                <div className="work-block">
                  <span className="work-label">Result</span>
                  <p>{c.outcome}</p>
                </div>
                <div className="work-links">
                  {c.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="section systems" id="systems">
          <header className="section-head">
            <span className="section-idx">03</span>
            <h2>How I work</h2>
          </header>
          <div className="systems-grid">
            <div className="systems-copy">
              <ul className="systems-list">
                <li>Vertical slices with a defined success metric.</li>
                <li>UI primitives before one-off screens.</li>
                <li>Tests where they prevent regressions, not for coverage theater.</li>
                <li>Docs when the decision is expensive to reverse.</li>
              </ul>
            </div>
            <div className="skills-cloud">
              {skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section timeline-sec" id="experience">
          <header className="section-head">
            <span className="section-idx">04</span>
            <h2>Experience</h2>
          </header>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={`${job.company}-${job.role}`} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <time>{job.period}</time>
                  <h3>
                    {job.role} <span className="at">{job.company}</span>
                  </h3>
                  <p>{job.impact}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section contact-sec" id="contact">
          <header className="section-head">
            <span className="section-idx">05</span>
            <h2>Let&apos;s talk</h2>
          </header>
          <div className="contact-block">
            <p className="contact-lede">
              If you need someone who can own features across web and API layers—and make the UI feel intentional—send a
              note.
            </p>
            <div className="contact-row">
              <a className="btn btn-primary btn-lg" href="mailto:tayyab12308@gmail.com">
                tayyab12308@gmail.com
              </a>
              <a className="btn btn-ghost btn-lg" href="tel:+13477598387">
                +1 (347) 759-8387
              </a>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <p>
            Tayyab Iqbal · BS Computer Science, SNHU · Built with React — no template, no page builder.
          </p>
          <div className="pookie-gate">
            <span className="pookie-gate-title">For Pookie only</span>
            <form className="pookie-gate-form" onSubmit={handlePookieSubmit}>
              <label htmlFor="pookie-password" className="pookie-label">
                Password
              </label>
              <input
                id="pookie-password"
                type="password"
                value={pookiePassword}
                onChange={(e) => setPookiePassword(e.target.value)}
                placeholder="Enter password"
                autoComplete="off"
              />
              <button type="submit" className="btn btn-primary">
                Unlock
              </button>
            </form>
            {pookieError ? <p className="pookie-error">{pookieError}</p> : null}
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
