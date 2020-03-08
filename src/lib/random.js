import generate from 'nanoid/generate'
import faker from 'faker'

export { sentence } from 'txtgen'

export function uid(
  alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  length = 16
) {
  return generate(alphabet, length)
}

export function username() {
  return faker.internet.userName()
}

export function image(width = 1080, height = 1080) {
  return faker.image.imageUrl(width, height)
}

export function profileImage() {
  return faker.image.avatar()
}

export function location() {
  const city = faker.address.city()
  const state = faker.address.stateAbbr()
  return `${city}, ${state}`
}

export function recentDate() {
  return faker.date.recent()
}

export function dateSince(startDate) {
  return faker.date.between(startDate, new Date())
}

export function float(min, max) {
  return Math.random() * (max - min) + min
}

export function integer(min, max) {
  const minInt = Math.ceil(min)
  const maxInt = Math.floor(max)
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt
}

export function chance(probability = 0.5) {
  return Math.random() < probability
}

export function choice(array) {
  const rand = integer(0, array.length)
  return array[rand]
}
