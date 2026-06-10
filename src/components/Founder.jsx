import { GraduationCap, Zap, Lightbulb } from 'lucide-react'

const HIGHLIGHTS = [
  {
    Icon: GraduationCap,
    label: 'Graduated with Honors',
    sub: 'Electrical & Electronics Engineering',
  },
  {
    Icon: Zap,
    label: 'Built on Deep Tech',
    sub: 'From circuits to AI — engineering first principles',
  },
  {
    Icon: Lightbulb,
    label: 'Problem-First Thinking',
    sub: 'Rizgai was born from a real missed-call problem',
  },
]

export default function Founder() {
  return (
    <section id="about" className="founder-section">
      <div className="founder-glow" />

      <div className="founder-inner">
        {/* Left — avatar + name */}
        <div className="founder-left">
          <div className="founder-avatar-wrap">
            <div className="founder-avatar">
              <span>AM</span>
            </div>
            <div className="founder-avatar-ring" />
          </div>
          <h3 className="founder-name">Abdulmuiz Musa</h3>
          <p className="founder-role">Founder & CEO, Rizgai</p>
          <div className="founder-badge">
            <GraduationCap size={13} strokeWidth={2} />
            Graduated with Honors
          </div>
        </div>

        {/* Right — story + highlights */}
        <div className="founder-right">
          <p className="section-tag">About the Founder</p>
          <h2 className="founder-headline">
            Built by an Engineer.<br />
            <span className="founder-accent">For Businesses That Can't Afford to Miss.</span>
          </h2>
          <p className="founder-body">
            Abdulmuiz Musa graduated with honors in Electrical &amp; Electronics
            Engineering — a background that shaped everything about how Rizgai
            was designed. Where others see a software product, he sees a system:
            inputs, outputs, signal and noise.
          </p>
          <p className="founder-body">
            Rizgai started with a simple observation — too many small businesses
            were losing customers not because of their product, but because no
            one picked up the phone. That engineering instinct to eliminate a
            failure point is exactly what Rizgai is built on.
          </p>

          <div className="founder-highlights">
            {HIGHLIGHTS.map(({ Icon, label, sub }) => (
              <div key={label} className="founder-hl">
                <div className="founder-hl-icon">
                  <Icon size={16} strokeWidth={1.75} />
                </div>
                <div>
                  <div className="founder-hl-label">{label}</div>
                  <div className="founder-hl-sub">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
