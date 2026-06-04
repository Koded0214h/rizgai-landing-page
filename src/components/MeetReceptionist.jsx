import { useState } from 'react'
import { PhoneCall, CalendarCheck, Target, PhoneForwarded } from 'lucide-react'

/* ── Expanded right-panel visuals ─────────────── */

function CallVisual() {
  return (
    <div className="fv-wrap fv-call">
      <div className="fv-call-header">
        <span className="fv-live-dot" />
        <span className="fv-live-label">Call in Progress · 0:34</span>
      </div>
      <div className="fv-caller-row">
        <div className="fv-avatar" style={{ background: 'rgba(0,229,255,0.12)', color: '#00E5FF' }}>SJ</div>
        <div>
          <div className="fv-name">Sarah Johnson</div>
          <div className="fv-sub">+1 (555) 234-5678</div>
        </div>
      </div>
      <div className="fv-waveform">
        {Array.from({ length: 16 }, (_, i) => (
          <span key={i} className="fv-wb" style={{ animationDelay: `${i * 0.075}s` }} />
        ))}
      </div>
      <div className="fv-transcript">
        <div className="fv-line caller">"I'd like to book an appointment for next week."</div>
        <div className="fv-line ai">"Of course! What day works best for you?"</div>
      </div>
    </div>
  )
}

function ApptVisual() {
  const BOOKED = 7
  const TAKEN = [2, 10, 13]
  return (
    <div className="fv-wrap fv-cal">
      <div className="fv-cal-top">
        <span className="fv-cal-month">June 2025</span>
        <div className="fv-cal-days">
          {['Mo', 'Tu', 'We', 'Th', 'Fr'].map(d => <span key={d}>{d}</span>)}
        </div>
      </div>
      <div className="fv-slots">
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i} className={`fv-slot ${i === BOOKED ? 'booked' : TAKEN.includes(i) ? 'taken' : ''}`}>
            {i === BOOKED && <span>Booked ✓</span>}
          </div>
        ))}
      </div>
      <div className="fv-cal-confirm">
        <span className="fv-cdot" />
        SMS &amp; email confirmation sent
      </div>
    </div>
  )
}

function LeadVisual() {
  return (
    <div className="fv-wrap fv-lead">
      <div className="fv-caller-row">
        <div className="fv-avatar" style={{ background: 'rgba(255,107,53,0.12)', color: '#FF6B35' }}>MW</div>
        <div>
          <div className="fv-name">Mike Williams</div>
          <div className="fv-sub">Inbound · 2 min ago</div>
        </div>
      </div>
      <div className="fv-score-row">
        <span className="fv-score-lbl">Lead Score</span>
        <span className="fv-score-num">82 / 100</span>
      </div>
      <div className="fv-score-track">
        <div className="fv-score-fill" style={{ width: '82%', background: '#FF6B35' }} />
      </div>
      <div className="fv-score-badge">🔥 Hot Lead</div>
      <div className="fv-tag-row">
        {['Pricing Intent', 'Decision Maker', 'Immediate Need'].map(t => (
          <span key={t} className="fv-tag">{t}</span>
        ))}
      </div>
    </div>
  )
}

function TransferVisual() {
  return (
    <div className="fv-wrap fv-transfer">
      <div className="fv-t-node">
        <div className="fv-t-icon">🤖</div>
        <div className="fv-name">AI Receptionist</div>
        <div className="fv-sub">Urgency detected</div>
      </div>
      <div className="fv-t-arrow">
        <div className="fv-t-line" />
        <div className="fv-t-arrowlabel">Warm Transfer</div>
        <div className="fv-t-head">›</div>
      </div>
      <div className="fv-t-node">
        <div className="fv-t-icon">👩‍⚕️</div>
        <div className="fv-name">Dr. Patel</div>
        <div className="fv-sub">Briefed · Ready</div>
      </div>
    </div>
  )
}

/* ── Feature data ─────────────────────────────── */

const FEATURES = [
  {
    Icon: PhoneCall,
    gradient: 'radial-gradient(ellipse at 30% 20%, #0a2a50 0%, #030a1a 65%)',
    title: '24/7 Call Answering',
    description: 'Handle unlimited simultaneous calls around the clock. Every caller gets an instant, intelligent response , no hold music, no missed opportunities.',
    points: [
      'Answers in under 2 seconds, every time',
      'Handles unlimited simultaneous calls',
      'Custom voice, tone & personality',
      'Works through nights, weekends & holidays',
    ],
    Visual: CallVisual,
  },
  {
    Icon: CalendarCheck,
    gradient: 'radial-gradient(ellipse at 70% 20%, #083028 0%, #030a0a 65%)',
    title: 'Appointment Booking',
    description: 'Your AI checks real-time availability, books appointments, and sends instant confirmations , all without any human in the loop.',
    points: [
      'Syncs with Google Calendar & Outlook',
      'Sends SMS & email confirmations',
      'Handles reschedules & cancellations',
      'Works with your existing booking system',
    ],
    Visual: ApptVisual,
  },
  {
    Icon: Target,
    gradient: 'radial-gradient(ellipse at 30% 70%, #3a1808 0%, #100804 65%)',
    title: 'Lead Qualification',
    description: 'The AI asks the right questions, scores each lead, and captures full contact details , so your team only speaks to prospects ready to buy.',
    points: [
      'Custom qualification questions per campaign',
      'Automatic lead scoring & tagging',
      'Instant CRM sync after every call',
      'Hot lead alerts sent straight to your team',
    ],
    Visual: LeadVisual,
  },
  {
    Icon: PhoneForwarded,
    gradient: 'radial-gradient(ellipse at 75% 75%, #1a0838 0%, #080412 65%)',
    title: 'Smart Call Transfer',
    description: 'When a call needs a human touch, the AI detects urgency, briefs your team instantly, and transfers seamlessly , no caller left waiting.',
    points: [
      'Intent & urgency detection on every call',
      'Warm transfer with full caller summary',
      'Round-robin & priority-based routing',
      'After-hours voicemail & callback scheduling',
    ],
    Visual: TransferVisual,
  },
]

/* ── Main component ───────────────────────────── */

export default function MeetReceptionist() {
  const [hovered, setHovered] = useState(null)

  const gridCols =
    hovered !== null
      ? FEATURES.map((_, i) => (i === hovered ? '5fr' : '0fr')).join(' ')
      : '1fr 1fr 1fr 1fr'

  const colGap = hovered !== null ? '0px' : '16px'

  return (
    <section className="meet-section">
      <div className="section-header">
        <p className="section-tag">Product</p>
        <h2 className="section-title">Meet Your AI Receptionist</h2>
        <p className="section-sub">
          Your 24/7 team member that never calls in sick, never puts customers
          on hold, and never misses an opportunity.
        </p>
      </div>

      <div
        className="features-cards"
        style={{ gridTemplateColumns: gridCols, columnGap: colGap }}
        onMouseLeave={() => setHovered(null)}
      >
        {FEATURES.map((f, i) => {
          const isExpanded = hovered === i
          const isCollapsed = hovered !== null && hovered !== i
          const { Visual, Icon } = f

          return (
            <div
              key={i}
              className={`feature-card${isExpanded ? ' is-expanded' : ''}${isCollapsed ? ' is-collapsed' : ''}`}
              style={{ background: f.gradient }}
              onMouseEnter={() => setHovered(i)}
            >
              {/* Compact , Gallery4 style */}
              <div className={`fc-compact${isExpanded ? ' gone' : ''}`}>
                <div className="fc-card-body">
                  <div className="fc-licon">
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="fc-overlay">
                  <div className="fc-overlay-inner">
                    <div className="fc-sicon">
                      <Icon size={16} strokeWidth={2} />
                    </div>
                    <h3 className="fc-compact-title">{f.title}</h3>
                    <p className="fc-compact-desc">{f.description}</p>
                    <div className="fc-read-more">
                      Explore feature
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.2s' }}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded */}
              <div className={`fc-detail${isExpanded ? ' show' : ''}`}>
                <div className="fcd-left">
                  <div className="fcd-licon">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="fcd-title">{f.title}</h3>
                  <p className="fcd-desc">{f.description}</p>
                  <ul className="fcd-points">
                    {f.points.map((pt, j) => (
                      <li key={j}>
                        <span className="fcd-check">✓</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="fcd-right">
                  <Visual />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
