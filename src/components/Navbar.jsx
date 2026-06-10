import { useState, useEffect } from 'react'
import { openBooking } from '../utils/booking'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="/" className="navbar-logo">
          <div className="logo-mark">R</div>
          <span className="logo-wordmark">RIZGAI</span>
        </a>

        <div className="navbar-links">
          <a href="#features">Features</a>
          <a href="#industries">Industries</a>
        </div>

        <button className="navbar-cta" onClick={openBooking}>Book Demo</button>

        <button
          className={`nav-burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        <div className="nav-mobile-inner">
          <a href="#features" onClick={close}>Features</a>
          <a href="#industries" onClick={close}>Industries</a>
          <button className="nav-mobile-cta" onClick={() => { close(); openBooking() }}>Book Demo</button>
        </div>
      </div>
    </nav>
  )
}
