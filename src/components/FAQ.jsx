import { useState } from 'react'

const FAQS = [
  {
    question: 'How quickly can I get Rizgai set up?',
    answer:
      'Most businesses are live within 10 minutes. You connect your phone number, feed the AI your business info — hours, services, FAQs, pricing — and it starts answering calls immediately. No developers, no hardware, no waiting.',
  },
  {
    question: 'Will my callers know they\'re talking to an AI?',
    answer:
      'Rizgai uses a natural-sounding voice that most callers can\'t distinguish from a human receptionist. You can choose from multiple voice profiles and set a name for your AI. Whether you disclose it\'s AI is entirely up to you — many businesses do, many don\'t.',
  },
  {
    question: 'What happens if the AI can\'t handle a call?',
    answer:
      'If a caller\'s request falls outside what the AI can handle, it can warm-transfer to a human on your team with a full briefing — caller name, reason for calling, and any details captured. You can also set escalation rules: time-of-day, urgency triggers, or specific keywords that hand off automatically.',
  },
  {
    question: 'Does Rizgai integrate with my existing tools?',
    answer:
      'Yes. Rizgai connects with Google Calendar, Outlook, HubSpot, Salesforce, and thousands of other tools via Zapier and Make. Appointments land in your calendar, leads sync to your CRM, and call summaries hit your inbox — all without manual data entry.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section className="faq-section">
      <div className="section-header">
        <p className="section-tag">FAQ</p>
        <h2 className="section-title">Common Questions</h2>
        <p className="section-sub">
          Everything you need to know before your first answered call.
        </p>
      </div>

      <div className="faq-list">
        {FAQS.map((faq, i) => {
          const isOpen = open === i
          return (
            <div
              key={i}
              className={`faq-item${isOpen ? ' open' : ''}`}
              onClick={() => toggle(i)}
            >
              <div className="faq-row">
                <h3 className="faq-question">{faq.question}</h3>
                <svg
                  className={`faq-chevron${isOpen ? ' rotated' : ''}`}
                  width="20" height="20" viewBox="0 0 18 18"
                  fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="currentColor" strokeWidth="1.5"
                    strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className={`faq-answer${isOpen ? ' visible' : ''}`}>
                {faq.answer}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
