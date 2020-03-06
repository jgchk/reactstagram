import generate from 'nanoid/generate'
import faker from 'faker'
import txtgen from 'txtgen'

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

export function sentence() {
  return txtgen.sentence()
}
