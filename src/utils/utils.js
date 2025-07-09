import dayjs from 'dayjs'

export function toISODate(date, time) {
  // Combine them into a single string
  const combined = `${date}T${time}:00`

  // Parse with Day.js and convert to UTC ISO string
  const isoString = dayjs(combined).toISOString()
  return isoString
}

export function getRequestStatusColor(status) {
  switch (status) {
    case 'Pending':
      return 'warning'
    case 'Approved Pending Vehicle':
      return 'info'
    case 'Approved Vehicle Assigned':
      return 'success'
    case 'Rejected':
      return 'danger'
    case 'Canceled':
      return 'neutral'
    case 'Completed':
      return 'success'
    default:
      return 'neutral'
  }
}
