import { useState } from 'react'
import {
  Heart, Scale, Home, Car, Scissors, Smile, Dumbbell, Wrench, ArrowRight,
} from 'lucide-react'
import { openBooking } from '../utils/booking'

/* ── Industry data , positioned to form the letter R ── */
/*
  Grid layout (3 col × 4 row):
  ◆ ◆ .   row 1
  ◆ . ◆   row 2
  ◆ ◆ .   row 3
  ◆ . ◆   row 4
*/
const INDUSTRIES = [
  {
    Icon: Heart,
    name: 'Healthcare',
    tagline: 'Triage & Scheduling',
    desc: 'HIPAA-aware appointment scheduling, prescription refill routing, and patient triage handled around the clock , so clinical staff can focus on care, not phones.',
    r: 1, c: 1,
  },
  {
    Icon: Scale,
    name: 'Law Firms',
    tagline: 'Client Intake',
    desc: 'Screen and qualify prospective clients, capture case details, and intelligently route urgent matters to the right attorney , 24/7, without a receptionist.',
    r: 1, c: 2,
  },
  {
    Icon: Home,
    name: 'Real Estate',
    tagline: 'Lead Qualification',
    desc: 'Qualify buyer and seller leads instantly, schedule property tours, and follow up on every inquiry before your competition even picks up the phone.',
    r: 2, c: 1,
  },
  {
    Icon: Car,
    name: 'Auto Dealers',
    tagline: 'Sales & Service',
    desc: 'Book test drives, handle parts and service inquiries, and qualify trade-in leads , without missing a single call during peak showroom hours.',
    r: 2, c: 3,
  },
  {
    Icon: Scissors,
    name: 'Salons & Spas',
    tagline: 'Appointment Booking',
    desc: 'Accept bookings, handle cancellations and reschedules, and send automated reminders , all without a receptionist on the clock.',
    r: 3, c: 1,
  },
  {
    Icon: Smile,
    name: 'Dental Clinics',
    tagline: 'Patient Intake',
    desc: 'New patient intake, appointment reminders, insurance verification, and after-hours emergency routing , fully automated, fully compliant.',
    r: 3, c: 2,
  },
  {
    Icon: Dumbbell,
    name: 'Fitness Studios',
    tagline: 'Memberships & Classes',
    desc: 'Convert membership inquiries into trials, schedule orientations, and manage class bookings , even at 2 AM when your front desk is closed.',
    r: 4, c: 1,
  },
  {
    Icon: Wrench,
    name: 'Home Services',
    tagline: 'Dispatch & Jobs',
    desc: 'Capture service requests, schedule jobs, and route after-hours emergency calls , so no contractor misses a lead while they\'re already on the job.',
    r: 4, c: 3,
  },
]

export default function UseCases() {
  const [active, setActive] = useState(null)
  const ind = active !== null ? INDUSTRIES[active] : null

  return (
    <section id="industries" className="uc-section">
      <div className="section-header">
        <p className="section-tag">Use Cases</p>
        <h2 className="section-title">Built for Every Industry</h2>
        <p className="section-sub">
          From solo practitioners to enterprise operations , Rizgai adapts to
          how your business takes calls.
        </p>
      </div>

      <div className="uc-body">
        {/* ── Left: diamond R shape ── */}
        <div className="uc-r-wrap">
          <div
            className="uc-r-grid"
            onMouseLeave={() => setActive(null)}
          >
            {INDUSTRIES.map((industry, i) => (
              <div
                key={i}
                className={`uc-cell${active === i ? ' active' : active !== null ? ' dim' : ''}`}
                style={{ gridRow: industry.r, gridColumn: industry.c }}
                onMouseEnter={() => setActive(i)}
              >
                <div className="uc-diamond">
                  <div className="uc-d-inner">
                    <industry.Icon size={24} strokeWidth={1.5} />
                    <span className="uc-d-name">{industry.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: info panel ── */}
        <div className="uc-info">
          {/* Default state: descriptive text + chips */}
          <div className={`uc-info-default${!ind ? ' show' : ''}`}>
            <p className="uc-default-eyebrow">Any business. Every call.</p>
            <p className="uc-default-body">
              Rizgai works for any business that handles inbound calls.
              From medical practices scheduling patients to auto dealers
              capturing weekend leads , the AI learns your workflow, your
              language, and your customers from day one.
            </p>
            <div className="uc-chip-row">
              {INDUSTRIES.map((industry, i) => (
                <span
                  key={i}
                  className="uc-chip"
                  onMouseEnter={() => setActive(i)}
                >
                  {industry.name}
                </span>
              ))}
            </div>
          </div>

          {/* Active state: detail */}
          <div className={`uc-info-detail${ind ? ' show' : ''}`}>
            {ind && (
              <div key={active} className="uc-detail-in">
                <p className="uc-d-tag">{ind.tagline}</p>
                <h3 className="uc-d-title">{ind.name}</h3>
                <p className="uc-d-desc">{ind.desc}</p>
                <button className="uc-d-cta" onClick={openBooking}>
                  Book a demo <ArrowRight size={15} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
