const TESTIMONIALS = [
  {
    quote:
      'We were missing roughly 40% of our calls outside office hours. Rizgai picked that up on day one. Patients can now book at 11 PM and we wake up to a full schedule. I genuinely didn\'t expect it to work this well this fast.',
    name: 'Sarah Mitchell',
    role: 'CEO, ClearPath Dental Group',
    initials: 'SM',
    avatarGrad: 'linear-gradient(135deg, #0ea5e9 0%, #00E5FF 100%)',
  },
  {
    quote:
      'We close more deals now simply because we never drop a lead. Rizgai qualifies every inbound call, books the showing, and has the full summary waiting in our CRM before my agents even pick up their phones.',
    name: 'James Okafor',
    role: 'Founder, Horizon Realty Partners',
    initials: 'JO',
    avatarGrad: 'linear-gradient(135deg, #10b981 0%, #00FF87 100%)',
  },
  {
    quote:
      'Our front desk was overwhelmed. Rizgai handles the volume effortlessly — triage calls, appointment reminders, insurance questions — and it sounds indistinguishable from a real person. Our patients actually compliment the service.',
    name: 'Priya Nair',
    role: 'Practice Manager, Sunrise Health Clinic',
    initials: 'PN',
    avatarGrad: 'linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%)',
  },
]

export default function Testimonials() {
  return (
    <section className="testi-section">
      <div className="section-header">
        <p className="section-tag">Testimonials</p>
        <h2 className="section-title">Businesses Trust Rizgai</h2>
        <p className="section-sub">
          Real results from teams that replaced missed calls with booked revenue.
        </p>
      </div>

      <div className="testi-grid">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="testi-card">
            <div className="testi-q-mark">&ldquo;</div>
            <p className="testi-text">{t.quote}</p>
            <div className="testi-footer">
              <div
                className="testi-avatar"
                style={{ background: t.avatarGrad }}
              >
                {t.initials}
              </div>
              <div className="testi-person">
                <span className="testi-name">{t.name}</span>
                <span className="testi-role">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
