const db = window.localStorage

export function set(key, value) {
  db.setItem(key, JSON.stringify(value))
}

export function get(key, defaultValue) {
  const value = db.getItem(key)
  return (value && JSON.parse(value)) || defaultValue
}

export function remove(key) {
  db.removeItem(key)
}

export function clear() {
  db.clear()
}

export function length() {
  return db.length
}

export function add(key, value) {
  const collection = new Set(get(key, []))
  collection.add(value)
  set(key, Array.from(collection))
}

export function del(key, value) {
  const collection = new Set(get(key, []))
  collection.delete(value)
  set(key, Array.from(collection))
}
