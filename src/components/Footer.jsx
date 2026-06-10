import { useRef, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Mail } from 'lucide-react'
import { openBooking } from '../utils/booking'

const IconX = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.261 5.636 5.903-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const IconLinkedin = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const IconGithub = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

/* ── TextHoverEffect — adapted from FOOTER.md ── */
function TextHoverEffect({ text }) {
  const svgRef = useRef(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [maskPos, setMaskPos] = useState({ cx: '50%', cy: '50%' })

  useEffect(() => {
    if (!svgRef.current) return
    const rect = svgRef.current.getBoundingClientRect()
    setMaskPos({
      cx: `${((cursor.x - rect.left) / rect.width) * 100}%`,
      cy: `${((cursor.y - rect.top) / rect.height) * 100}%`,
    })
  }, [cursor])

  const textStyle = {
    fill: 'transparent',
    fontSize: '7rem',
    fontWeight: 800,
    fontFamily: 'Montserrat, sans-serif',
    textTransform: 'uppercase',
  }

  return (
    <svg
      ref={svgRef}
      width="100%" height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      style={{ cursor: 'default', userSelect: 'none' }}
    >
      <defs>
        <linearGradient id="ftGrad" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
          {hovered && (
            <>
              <stop offset="0%"   stopColor="#00E5FF" />
              <stop offset="33%"  stopColor="#a78bfa" />
              <stop offset="66%"  stopColor="#00FF87" />
              <stop offset="100%" stopColor="#00E5FF" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="ftReveal"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: '50%', cy: '50%' }}
          animate={maskPos}
          transition={{ duration: 0, ease: 'easeOut' }}
        >
          <stop offset="0%"   stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="ftMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#ftReveal)" />
        </mask>
      </defs>

      {/* Faint white stroke on hover */}
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
        strokeWidth="0.3"
        style={{ ...textStyle, stroke: 'rgba(255,255,255,0.12)', opacity: hovered ? 1 : 0, transition: 'opacity 0.4s' }}
      >{text}</text>

      {/* Draw-on stroke animation */}
      <motion.text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
        strokeWidth="0.3"
        style={{ ...textStyle, stroke: 'rgba(0,229,255,0.45)' }}
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: 'easeInOut' }}
      >{text}</motion.text>

      {/* Cursor-following gradient reveal */}
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle"
        stroke="url(#ftGrad)" strokeWidth="0.3" mask="url(#ftMask)"
        style={textStyle}
      >{text}</text>
    </svg>
  )
}

/* ── Footer data ── */
const LINKS = [
  {
    title: 'Product',
    items: [
      { label: 'Features',     href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Industries',   href: '#industries' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About Founder', href: '#about' },
      { label: 'Blog',          href: '#' },
      { label: 'Careers',       href: '#' },
      { label: 'Press',         href: '#' },
    ],
  },
]

const SOCIALS = [
  { Icon: IconX,        label: 'X',        href: '#' },
  { Icon: IconLinkedin, label: 'LinkedIn', href: '#' },
  { Icon: IconGithub,   label: 'GitHub',   href: '#' },
]

/* ── Main component ── */
export default function Footer() {
  return (
    <footer className="ft-wrap">
      <div className="ft-bg-grad" />

      <div className="ft-inner">
        {/* Top grid */}
        <div className="ft-grid">
          {/* Brand */}
          <div className="ft-brand">
            <div className="navbar-logo" style={{ marginBottom: 16 }}>
              <div className="logo-mark">R</div>
              <span className="logo-wordmark">RIZGAI</span>
            </div>
            <p className="ft-tagline">
              AI Receptionist for growing businesses. Never miss a call,
              never lose a lead.
            </p>
          </div>

          {/* Link columns */}
          {LINKS.map((col) => (
            <div key={col.title} className="ft-col">
              <h4 className="ft-col-title">{col.title}</h4>
              <ul className="ft-list">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="ft-link">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="ft-col">
            <h4 className="ft-col-title">Contact</h4>
            <ul className="ft-list">
              <li>
                <a href="mailto:hello@rizgai.com" className="ft-link ft-contact-row">
                  <Mail size={14} />
                  hello@rizgai.com
                </a>
              </li>
              <li>
                <button className="ft-link ft-demo-link" onClick={openBooking} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                  Book a Demo →
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="ft-divider" />

        {/* Bottom bar */}
        <div className="ft-bottom">
          <div className="ft-socials">
            {SOCIALS.map(({ Icon, label, href }) => (
              <a key={label} href={href} aria-label={label} className="ft-social">
                <Icon size={17} />
              </a>
            ))}
          </div>
          <p className="ft-copy">© {new Date().getFullYear()} Rizgai. All rights reserved.</p>
        </div>
      </div>

      {/* Big RIZGAI text hover effect */}
      <div className="ft-wordmark-effect">
        <TextHoverEffect text="RIZGAI" />
      </div>
    </footer>
  )
}
