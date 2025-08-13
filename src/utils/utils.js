import dayjs from 'dayjs'

export function toISODate(date, time) {
  // Combine them into a single string
  const combined = `${date}T${time}:00`

  // Parse with Day.js and convert to UTC ISO string
  const isoString = dayjs(combined).toISOString()
  return isoString
}

//get request status color function
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

//validate contact number function to return 233 + contact number or false
export function validateContact(contact) {
  if (typeof contact !== 'string') return false
  // Remove any spaces
  contact = contact.trim()
  if (contact.length === 10 && contact.startsWith('0')) {
    // Remove the leading zero and prepend '233'
    return '233' + contact.slice(1)
  } else if (contact.length === 9) {
    // Prepend '233'
    return '233' + contact
  } else {
    return false
  }
}
