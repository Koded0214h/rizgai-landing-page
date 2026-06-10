const BOOKING_URL =
  'https://calendar.google.com/calendar/appointments/schedules/' +
  'AcZssZ3UV4O8bH8Nf10cv3ZiWdArJ9xcsFMNYML3KLAFLji3TZXBiLBEVNBFktQwyBodLL2A6xi5yMiz?gv=true'

export function openBooking() {
  const w = 840
  const h = 700
  const left = Math.max(0, (window.screen.width - w) / 2)
  const top  = Math.max(0, (window.screen.height - h) / 2)
  window.open(BOOKING_URL, 'rizgai-booking', `width=${w},height=${h},left=${left},top=${top},scrollbars=yes,resizable=yes`)
}
