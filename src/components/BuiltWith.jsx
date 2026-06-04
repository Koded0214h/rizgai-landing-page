const BRANDS = [
  {
    name: 'OpenAI',
    color: '#10A37F',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.28 9.28a5.97 5.97 0 0 0-.51-4.91 6.04 6.04 0 0 0-6.5-2.9A6 6 0 0 0 10.75 0a6.04 6.04 0 0 0-5.76 4.19 6.01 6.01 0 0 0-4 2.91 6.04 6.04 0 0 0 .74 7.07 5.97 5.97 0 0 0 .51 4.91 6.04 6.04 0 0 0 6.5 2.9A6 6 0 0 0 13.25 24a6.04 6.04 0 0 0 5.76-4.19 6.01 6.01 0 0 0 4-2.91 6.04 6.04 0 0 0-.74-7.62zM13.25 22.5a4.5 4.5 0 0 1-2.89-1.05l.14-.08 4.8-2.77a.77.77 0 0 0 .39-.68v-6.77l2.03 1.17a.07.07 0 0 1 .04.06v5.6a4.52 4.52 0 0 1-4.51 4.52zm-9.7-4.14a4.5 4.5 0 0 1-.54-3.03l.14.09 4.8 2.77a.78.78 0 0 0 .78 0l5.86-3.38v2.34a.08.08 0 0 1-.03.06L9.6 20.06a4.52 4.52 0 0 1-6.05-1.7zm-1.26-10.5A4.5 4.5 0 0 1 4.64 5.8v5.66a.77.77 0 0 0 .39.67l5.86 3.38-2.03 1.17a.07.07 0 0 1-.07 0L3.87 13.9a4.52 4.52 0 0 1-1.58-6.04zm16.65 3.87L13.08 8.35l2.03-1.17a.07.07 0 0 1 .07 0l4.92 2.84a4.51 4.51 0 0 1-.7 8.14v-5.66a.77.77 0 0 0-.39-.67zm2.02-3.06l-.14-.09-4.8-2.77a.78.78 0 0 0-.78 0L9.38 9.19V6.85a.08.08 0 0 1 .03-.06l4.93-2.84a4.51 4.51 0 0 1 6.62 4.68zM8.35 12.94l-2.03-1.17a.08.08 0 0 1-.04-.06V6.1a4.51 4.51 0 0 1 7.4-3.46l-.14.08-4.8 2.77a.77.77 0 0 0-.39.68v6.77zm1.1-2.37L12 9l2.55 1.47v2.94L12 14.88l-2.55-1.47v-2.94z"/>
      </svg>
    ),
  },
  {
    name: 'Twilio',
    color: '#F22F46',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 20.8c-4.86 0-8.8-3.94-8.8-8.8S7.14 3.2 12 3.2s8.8 3.94 8.8 8.8-3.94 8.8-8.8 8.8zm4.4-11.2a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0 4.8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-4.8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm0-4.8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
      </svg>
    ),
  },
  {
    name: 'ElevenLabs',
    color: '#FFFFFF',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="4" y="2" width="4" height="20" rx="1.5"/>
        <rect x="10" y="6" width="4" height="12" rx="1.5"/>
        <rect x="16" y="4" width="4" height="16" rx="1.5"/>
      </svg>
    ),
  },
  {
    name: 'Google Calendar',
    color: '#4285F4',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 3h-1V1h-2v2H6V1H4v2H3C1.9 3 1 3.9 1 5v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H3V9h14v12zM3 7V5h14v2H3zm4 5H5v2h2v-2zm4 0H9v2h2v-2zm4 0h-2v2h2v-2zm-8 4H5v2h2v-2zm4 0H9v2h2v-2zm4 0h-2v2h2v-2z"/>
      </svg>
    ),
  },
  {
    name: 'HubSpot',
    color: '#FF7A59',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.13 9.4V7.26a1.84 1.84 0 0 0 1.06-1.66v-.06A1.85 1.85 0 0 0 17.34 3.7h-.06a1.85 1.85 0 0 0-1.85 1.85v.06c0 .74.44 1.38 1.07 1.66V9.4a5.15 5.15 0 0 0-2.45 1.07L7.2 5.57a2.05 2.05 0 1 0-.96 1.37l6.73 4.83a5.17 5.17 0 0 0-.68 2.57 5.16 5.16 0 0 0 .7 2.6l-2.06 2.06a1.6 1.6 0 0 0-.44-.07 1.67 1.67 0 1 0 1.67 1.67 1.6 1.6 0 0 0-.07-.44l2.04-2.04a5.18 5.18 0 1 0 3.96-8.72zm-.79 7.83a2.74 2.74 0 1 1 0-5.48 2.74 2.74 0 0 1 0 5.48z"/>
      </svg>
    ),
  },
  {
    name: 'Salesforce',
    color: '#00A1E0',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.02 6.05a3.67 3.67 0 0 1 2.6-1.08 3.7 3.7 0 0 1 3.14 1.74 4.57 4.57 0 0 1 1.82-.38 4.62 4.62 0 0 1 4.62 4.62 4.62 4.62 0 0 1-4.62 4.62H5.64a3.36 3.36 0 0 1-3.36-3.36 3.36 3.36 0 0 1 2.88-3.33 3.1 3.1 0 0 1-.12-.86 3.12 3.12 0 0 1 4.98-2.97z"/>
      </svg>
    ),
  },
  {
    name: 'Zapier',
    color: '#FF4A00',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.83 9.17 21 3H3l6.17 6.17A6 6 0 0 1 14.83 9.17zM9.17 14.83 3 21h18l-6.17-6.17a6 6 0 0 1-5.66 0zM14.83 14.83A6 6 0 0 1 9.17 14.83 6 6 0 0 1 9.17 9.17a6 6 0 0 1 5.66 0 6 6 0 0 1 0 5.66z"/>
      </svg>
    ),
  },
  {
    name: 'Make',
    color: '#6D4AFF',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <circle cx="4" cy="12" r="2.5"/>
        <circle cx="12" cy="12" r="2.5"/>
        <circle cx="20" cy="12" r="2.5"/>
        <line x1="6.5" y1="12" x2="9.5" y2="12" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="14.5" y1="12" x2="17.5" y2="12" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

const DOUBLED = [...BRANDS, ...BRANDS]

export default function BuiltWith() {
  return (
    <section className="builtwidth-section">
      <p className="bw-label">Built With</p>

      <div className="bw-track-wrap">
        <div className="bw-track">
          {DOUBLED.map((brand, i) => (
            <div className="bw-item" key={i}>
              <div className="bw-icon" style={{ '--brand-color': brand.color }}>
                {brand.icon}
              </div>
              <span className="bw-name">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
