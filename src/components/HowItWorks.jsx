import { useState, useEffect, useRef, useCallback } from 'react'
import { Play, Pause, Phone, BrainCircuit, PhoneCall, LayoutDashboard } from 'lucide-react'

/* ── Mock screen content per step ────────────── */

function ConnectScreen() {
  return (
    <div className="ms-wrap">
      <div className="ms-icon-ring"><Phone size={28} strokeWidth={1.5} /></div>
      <div className="ms-title">Connect Your Number</div>
      <div className="ms-field">
        <span className="ms-field-label">Phone number</span>
        <span className="ms-field-value">+1 (555) 019-2847</span>
        <span className="ms-field-check">✓</span>
      </div>
      <div className="ms-field">
        <span className="ms-field-label">Forwarding</span>
        <span className="ms-field-value">Rizgai AI · Active</span>
        <span className="ms-field-check">✓</span>
      </div>
      <div className="ms-badge ms-badge-green">Connected · Ready</div>
    </div>
  )
}

function TrainScreen() {
  return (
    <div className="ms-wrap">
      <div className="ms-icon-ring"><BrainCircuit size={28} strokeWidth={1.5} /></div>
      <div className="ms-title">Training Your AI</div>
      <div className="ms-train-row"><span>Business Name</span><span className="ms-check-green">✓</span></div>
      <div className="ms-train-row"><span>Hours &amp; Services</span><span className="ms-check-green">✓</span></div>
      <div className="ms-train-row"><span>Pricing &amp; FAQs</span><span className="ms-check-green">✓</span></div>
      <div className="ms-train-row ms-active-row"><span>Call Scripts</span><span className="ms-typing">Saving…</span></div>
      <div className="ms-progress-track">
        <div className="ms-progress-fill" style={{ width: '76%' }} />
      </div>
      <div className="ms-prog-label">76% , almost ready</div>
    </div>
  )
}

function LiveScreen() {
  return (
    <div className="ms-wrap">
      <div className="ms-live-badge"><span className="ms-live-dot" />LIVE</div>
      <div className="ms-icon-ring" style={{ borderColor: 'rgba(0,229,255,0.3)', color: 'var(--cyan)' }}>
        <PhoneCall size={28} strokeWidth={1.5} />
      </div>
      <div className="ms-title" style={{ color: 'var(--cyan)' }}>AI Answering Call</div>
      <div className="ms-caller-name">Sarah Johnson</div>
      <div className="ms-waveform">
        {Array.from({ length: 18 }, (_, i) => (
          <span key={i} className="ms-wb" style={{ animationDelay: `${i * 0.07}s` }} />
        ))}
      </div>
      <div className="ms-transcript">"I'd like to schedule a cleaning appointment…"</div>
      <div className="ms-ai-reply">"Of course! What day works best for you?"</div>
    </div>
  )
}

function ResultsScreen() {
  return (
    <div className="ms-wrap">
      <div className="ms-icon-ring" style={{ borderColor: 'rgba(0,255,135,0.3)', color: 'var(--green)' }}>
        <LayoutDashboard size={28} strokeWidth={1.5} />
      </div>
      <div className="ms-title">Results Coming In</div>
      <div className="ms-notif">
        <span className="ms-notif-dot green" />
        <div>
          <div className="ms-notif-title">Appointment Booked</div>
          <div className="ms-notif-sub">Sarah J. · Tomorrow 2:00 PM</div>
        </div>
      </div>
      <div className="ms-notif" style={{ animationDelay: '0.3s' }}>
        <span className="ms-notif-dot amber" />
        <div>
          <div className="ms-notif-title">Lead Qualified</div>
          <div className="ms-notif-sub">Mike W. · Score 82 · CRM synced</div>
        </div>
      </div>
      <div className="ms-notif" style={{ animationDelay: '0.6s' }}>
        <span className="ms-notif-dot cyan" />
        <div>
          <div className="ms-notif-title">Call Summary Ready</div>
          <div className="ms-notif-sub">3 calls · 2 booked · 1 transferred</div>
        </div>
      </div>
    </div>
  )
}

const SCREENS = [ConnectScreen, TrainScreen, LiveScreen, ResultsScreen]

/* ── Step data ────────────────────────────────── */

const STEPS = [
  {
    num: '01',
    title: 'Connect Your Phone Number',
    desc: 'Port your existing business number or get a new one. Setup takes less than 5 minutes , no hardware required.',
    start: 0,
  },
  {
    num: '02',
    title: 'Train Your AI Receptionist',
    desc: 'Feed your AI with business info, FAQs, pricing, and call scripts. The more context it has, the better it performs.',
    start: 30,
  },
  {
    num: '03',
    title: 'Go Live , AI Answers Every Call',
    desc: 'Your AI receptionist goes live instantly. Every inbound call answered with a natural voice, 24/7, from day one.',
    start: 60,
  },
  {
    num: '04',
    title: 'Receive Leads & Appointments',
    desc: 'Booked appointments, qualified leads, and call summaries delivered to your CRM and inbox in real time.',
    start: 90,
  },
]

const TOTAL   = 120  // display seconds (2:00)
const SPEED   = 8    // display-seconds per real-second
const TICK_MS = 50

function fmt(s) {
  const t = Math.floor(s)
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`
}

function activeIdx(progress) {
  let idx = 0
  for (let i = 0; i < STEPS.length; i++) {
    if (progress >= STEPS[i].start) idx = i
  }
  return idx
}

/* ── MockScreen with fade between steps ──────── */

function MockScreen({ step }) {
  const [shown, setShown] = useState(step)
  const [vis, setVis]     = useState(true)

  useEffect(() => {
    if (step === shown) return
    setVis(false)
    const t = setTimeout(() => { setShown(step); setVis(true) }, 220)
    return () => clearTimeout(t)
  }, [step])

  const Screen = SCREENS[shown]
  return (
    <div className={`mock-screen ${vis ? 'ms-visible' : 'ms-hidden'}`}>
      <Screen />
    </div>
  )
}

/* ── Main component ───────────────────────────── */

export default function HowItWorks() {
  const [progress, setProgress] = useState(0)
  const [playing,  setPlaying]  = useState(false)
  const intervalRef = useRef(null)
  const barRef      = useRef(null)

  const step = activeIdx(progress)

  const stop = useCallback(() => {
    clearInterval(intervalRef.current)
    setPlaying(false)
  }, [])

  const play = useCallback(() => {
    setPlaying(true)
    intervalRef.current = setInterval(() => {
      setProgress(p => {
        const next = p + SPEED * (TICK_MS / 1000)
        if (next >= TOTAL) { stop(); return TOTAL }
        return next
      })
    }, TICK_MS)
  }, [stop])

  const toggle = () => (playing ? stop() : (progress >= TOTAL ? (setProgress(0), play()) : play()))

  useEffect(() => () => clearInterval(intervalRef.current), [])

  const seek = (e) => {
    const rect = barRef.current.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    setProgress(ratio * TOTAL)
  }

  const seekToStep = (i) => {
    setProgress(STEPS[i].start)
    if (!playing) play()
  }

  const pct = (progress / TOTAL) * 100

  return (
    <section className="hiw-section">
      <div className="section-header">
        <p className="section-tag">How It Works</p>
        <h2 className="section-title">Up and Running in Minutes</h2>
        <p className="section-sub">
          From sign-up to first answered call in under 10 minutes.
          No developers, no phone engineers, no waiting.
        </p>
      </div>

      <div className="hiw-body">
        {/* ── Left: video player ── */}
        <div className="hiw-player">
          <div className="hiw-screen">
            <MockScreen step={step} />

            {/* Big play overlay when stopped at 0 */}
            {!playing && progress === 0 && (
              <button className="hiw-play-overlay" onClick={toggle} aria-label="Play">
                <div className="hiw-play-circle">
                  <Play size={24} fill="currentColor" strokeWidth={0} />
                </div>
              </button>
            )}
          </div>

          {/* Controls */}
          <div className="hiw-controls">
            <button className="hiw-ctrl-btn" onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>
              {playing
                ? <Pause size={15} fill="currentColor" strokeWidth={0} />
                : <Play  size={15} fill="currentColor" strokeWidth={0} />}
            </button>

            <div className="hiw-bar-wrap" ref={barRef} onClick={seek}>
              <div className="hiw-bar-track">
                <div className="hiw-bar-fill" style={{ width: `${pct}%` }} />

                {/* Step markers */}
                {STEPS.map((s, i) => (
                  <div
                    key={i}
                    className={`hiw-marker ${step >= i ? 'passed' : ''}`}
                    style={{ left: `${(s.start / TOTAL) * 100}%` }}
                    onClick={(e) => { e.stopPropagation(); seekToStep(i) }}
                    title={s.title}
                  />
                ))}
              </div>
            </div>

            <span className="hiw-time">{fmt(progress)} <span className="hiw-time-total">/ {fmt(TOTAL)}</span></span>
          </div>
        </div>

        {/* ── Right: vertical steps ── */}
        <div className="hiw-steps">
          {STEPS.map((s, i) => {
            const isActive = step === i
            const isPast   = step > i
            return (
              <div
                key={i}
                className={`hiw-step ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                onClick={() => seekToStep(i)}
              >
                {/* Connector line */}
                <div className="hiw-step-line-wrap">
                  <div className={`hiw-step-dot ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`} />
                  {i < STEPS.length - 1 && (
                    <div className="hiw-step-line">
                      <div
                        className="hiw-step-line-fill"
                        style={{ height: isPast ? '100%' : isActive ? '50%' : '0%' }}
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="hiw-step-content">
                  <div className="hiw-step-num">{s.num}</div>
                  <h3 className="hiw-step-title">{s.title}</h3>
                  <p className="hiw-step-desc">{s.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
