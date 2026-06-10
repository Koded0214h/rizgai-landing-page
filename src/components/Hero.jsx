import { useEffect, useRef, useState } from 'react'
import { openBooking } from '../utils/booking'

const WAVE_DELAYS = [0, 0.12, 0.24, 0.36, 0.48, 0.60, 0.72, 0.84, 0.96]

function Waveform() {
  return (
    <div className="waveform">
      {WAVE_DELAYS.map((d, i) => (
        <span key={i} className="wave-b" style={{ animationDelay: `${d}s` }} />
      ))}
    </div>
  )
}

function AudioPlayer({ onClose }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const el = audioRef.current
    if (!el) return
    el.play().then(() => setPlaying(true)).catch(() => {})
    const onTime = () => setProgress(el.currentTime)
    const onMeta = () => setDuration(el.duration)
    const onEnd  = () => { setPlaying(false); setProgress(0) }
    el.addEventListener('timeupdate', onTime)
    el.addEventListener('loadedmetadata', onMeta)
    el.addEventListener('ended', onEnd)
    return () => {
      el.removeEventListener('timeupdate', onTime)
      el.removeEventListener('loadedmetadata', onMeta)
      el.removeEventListener('ended', onEnd)
      el.pause()
    }
  }, [])

  const toggle = () => {
    const el = audioRef.current
    if (!el) return
    playing ? el.pause() : el.play()
    setPlaying(p => !p)
  }

  const seek = (e) => {
    const el = audioRef.current
    if (!el || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    el.currentTime = ((e.clientX - rect.left) / rect.width) * duration
  }

  const fmt = (s) => {
    const t = Math.floor(s || 0)
    return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`
  }

  return (
    <div className="audio-player">
      <audio ref={audioRef} src="/sample-call.mp3" preload="metadata" />
      <div className="ap-header">
        <span className="ap-title">Sample AI Receptionist Call</span>
        <button className="ap-close" onClick={onClose} aria-label="Close">✕</button>
      </div>
      <div className="ap-controls">
        <button className="ap-play" onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>
          {playing
            ? <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            : <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
          }
        </button>
        <div className="ap-bar" onClick={seek}>
          <div className="ap-bar-track">
            <div className="ap-bar-fill" style={{ width: duration ? `${(progress / duration) * 100}%` : '0%' }} />
          </div>
        </div>
        <span className="ap-time">{fmt(progress)} / {fmt(duration)}</span>
      </div>
    </div>
  )
}

export default function Hero() {
  const parallaxRefs = useRef([])
  const [showAudio, setShowAudio] = useState(false)

  useEffect(() => {
    const speeds = [0.12, 0.09, -0.05, -0.07, 0.06, 0.08]

    const onScroll = () => {
      const y = window.scrollY
      parallaxRefs.current.forEach((el, i) => {
        if (el) el.style.transform = `translateY(${y * speeds[i]}px)`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const ref = (i) => (el) => { parallaxRefs.current[i] = el }

  return (
    <section className="hero-section">
      {/* ── Background ── */}
      <div className="hero-bg">
        <div className="bg-orb bg-orb-top" />
        <div className="bg-orb bg-orb-right" />
        <div className="bg-orb bg-orb-left" />
        <div className="bg-grid" />
      </div>

      {/* ── Floating cards ── */}

      {/* 1 , Incoming Call (top-left) */}
      <div className="float-wrap wrap-call" ref={ref(0)}>
        <div className="float-card card-call">
          <div className="fc-icon cyan">📞</div>
          <div className="fc-label">Incoming Call</div>
          <div className="fc-title">Sarah Johnson</div>
          <div className="fc-sub">+1 (555) 234-5678</div>
          <div className="fc-row">
            <span className="fc-dot green" />
            <span className="fc-status">AI Answering…</span>
          </div>
          <Waveform />
        </div>
      </div>

      {/* 2 , Appointment Booked (top-right) */}
      <div className="float-wrap wrap-appt" ref={ref(1)}>
        <div className="float-card card-appt">
          <div className="fc-icon green">📅</div>
          <div className="fc-label">Appointment Booked</div>
          <div className="fc-title">Dr. Smith's Clinic</div>
          <div className="fc-sub">Tomorrow · 2:00 PM</div>
          <div className="fc-row">
            <span className="fc-dot cyan" />
            <span className="fc-status">Confirmation sent ✓</span>
          </div>
        </div>
      </div>

      {/* 3 , Lead Qualified (bottom-left) */}
      <div className="float-wrap wrap-lead" ref={ref(2)}>
        <div className="float-card card-lead">
          <div className="fc-icon amber">🎯</div>
          <div className="fc-label">Lead Qualified</div>
          <div className="fc-title">Mike Williams</div>
          <div className="fc-sub">"Interested in pricing"</div>
          <div className="fc-row">
            <span className="fc-dot amber" />
            <span className="fc-status">Added to CRM</span>
          </div>
        </div>
      </div>

      {/* 4 , SMS Sent (bottom-right) */}
      <div className="float-wrap wrap-sms" ref={ref(3)}>
        <div className="float-card card-sms">
          <div className="fc-icon violet">💬</div>
          <div className="fc-label">SMS Sent</div>
          <div className="fc-title">Confirmation</div>
          <div className="fc-sub">"Your appt is confirmed…"</div>
          <div className="fc-row">
            <span className="fc-dot cyan" />
            <span className="fc-status">Delivered · just now</span>
          </div>
        </div>
      </div>

      {/* 5 , Call Transfer (mid-left) */}
      <div className="float-wrap wrap-transfer" ref={ref(4)}>
        <div className="float-card card-transfer">
          <div className="fc-icon amber">🔀</div>
          <div className="fc-label">Call Transferred</div>
          <div className="fc-title">Urgent · Dr. Patel</div>
          <div className="fc-sub">Routed to on-call team</div>
        </div>
      </div>

      {/* 6 , CRM Updated (mid-right) */}
      <div className="float-wrap wrap-crm" ref={ref(5)}>
        <div className="float-card card-crm">
          <div className="fc-icon violet">🔗</div>
          <div className="fc-label">Integrations Active</div>
          <div className="fc-title">CRM Synced</div>
          <div className="fc-logos">
            <span className="fc-logo-chip">HubSpot</span>
            <span className="fc-logo-chip">Salesforce</span>
          </div>
        </div>
      </div>

      {/* ── Center content ── */}
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          AI-Powered Reception · 24/7
        </div>

        <h1 className="hero-title">
          Never Miss<br />
          <span className="title-accent">Another Customer</span><br />
          Call
        </h1>

        <p className="hero-subtitle">
          AI receptionists that answer calls 24/7, book appointments,
          qualify leads, and transfer urgent calls to your team.
        </p>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Calls Handled</span>
          </div>
          <div className="stat-div" />
          <div className="stat">
            <span className="stat-number">99.9%</span>
            <span className="stat-label">Availability</span>
          </div>
          <div className="stat-div" />
          <div className="stat">
            <span className="stat-number">&lt;2s</span>
            <span className="stat-label">Response Time</span>
          </div>
          <div className="stat-div" />
          <div className="stat">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Appts Booked</span>
          </div>
        </div>

        <div className="hero-ctas">
          <button className="cta-primary" onClick={openBooking}>Book Demo</button>
          <button className="cta-secondary" onClick={() => setShowAudio(s => !s)}>
            <div className="play-btn">
              <svg viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9" /></svg>
            </div>
            Listen to Sample Call
          </button>
        </div>

        {showAudio && <AudioPlayer onClose={() => setShowAudio(false)} />}
      </div>

    </section>
  )
}
