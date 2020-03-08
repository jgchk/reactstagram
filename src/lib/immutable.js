import { isKeyed } from 'immutable'

// eslint-disable-next-line import/prefer-default-export
export function defaultReviver(key, value) {
  return isKeyed(value) ? value.toMap() : value.toList()
}
