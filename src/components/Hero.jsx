import { useEffect, useRef } from 'react'

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

export default function Hero() {
  const parallaxRefs = useRef([])

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
          <a href="#demo" className="cta-primary">Book Demo</a>
          <a href="#demo" className="cta-secondary">
            <div className="play-btn">
              <svg viewBox="0 0 10 10"><polygon points="2,1 9,5 2,9" /></svg>
            </div>
            Listen to Sample Call
          </a>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-label">Scroll</span>
      </div>
    </section>
  )
}
