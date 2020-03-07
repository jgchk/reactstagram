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

export function timeSince(date) {
  const now = new Date()

  const days = daysBetween(now, date)
  if (days >= 365) {
    const years = Math.round(days / 365)
    return `${years}y`
  }
  if (days >= 7) {
    const weeks = Math.round(days / 7)
    return `${weeks}w`
  }
  if (days > 1) {
    return `${days}d`
  }

  const hours = hoursBetween(now, date)
  if (hours > 1) {
    return `${hours}h`
  }

  const minutes = minutesBetween(now, date)
  if (minutes > 1) {
    return `${minutes}m`
  }

  const seconds = secondsBetween(now, date)
  return `${seconds}s`
}
