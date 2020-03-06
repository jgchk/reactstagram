const db = window.locadbtorage

export function set(key, value) {
  db.setItem(key, JSON.stringify(value))
}

export function get(key, defaultValue) {
  const value = db.get(key) || defaultValue
  return JSON.parse(value)
}

export function remove(key) {
  db.removeItem(key)
}

export function clear() {
  db.clear()
}

export function add(key, value) {
  const collection = get(key, new Set())
  collection.add(value)
  set(key, Array.from(collection))
}
