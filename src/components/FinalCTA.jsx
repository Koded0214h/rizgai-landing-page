import { openBooking } from '../utils/booking'

export default function FinalCTA() {
  return (
    <section className="fcta-section">
      <div className="fcta-glow" />
      <div className="fcta-inner">
        <h2 className="fcta-line1">Stop Missing Calls.</h2>
        <h2 className="fcta-line2">Start Capturing Leads.</h2>
        <button className="cta-primary fcta-btn" onClick={openBooking}>Book Demo</button>
      </div>
    </section>
  )
}
