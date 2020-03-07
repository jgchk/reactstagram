const oneSecond = 1000
const oneMinute = 60 * oneSecond
const oneHour = 60 * oneMinute
const oneDay = 24 * oneHour

export function timeBetween(a, b, unit) {
  return Math.round(Math.abs((a - b) / unit))
}

export function daysBetween(a, b) {
  return timeBetween(a, b, oneDay)
}

export function hoursBetween(a, b) {
  return timeBetween(a, b, oneHour)
}

export function minutesBetween(a, b) {
  return timeBetween(a, b, oneMinute)
}

export function secondsBetween(a, b) {
  return timeBetween(a, b, oneSecond)
}

export function formatTime(amount, unit, long) {
  let suffix = ''
  if (long) {
    suffix += ' '
    suffix += unit.toLowerCase()
    if (Math.abs(amount) !== 1) suffix += 's' // make plural for everything except 1 and -1
    suffix += ' ago'
  } else {
    suffix = unit.charAt(0)
  }
  return `${amount}${suffix}`
}

export function timeSince(date, long = false) {
  const now = new Date()

  const days = daysBetween(now, date)
  if (days >= 365) {
    const years = Math.round(days / 365)
    return formatTime(years, 'year', long)
  }
  if (days >= 7) {
    const weeks = Math.round(days / 7)
    return formatTime(weeks, 'week', long)
  }
  if (days > 1) {
    return formatTime(days, 'day', long)
  }

  const hours = hoursBetween(now, date)
  if (hours > 1) {
    return formatTime(hours, 'hour', long)
  }

  const minutes = minutesBetween(now, date)
  if (minutes > 1) {
    return formatTime(minutes, 'minute', long)
  }

  const seconds = secondsBetween(now, date)
  return formatTime(seconds, 'second', long)
}
