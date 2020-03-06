import { Record, Set } from 'immutable'

import { uid, username as randomUsername } from '../lib/random'

const User = Record({
  id: null,
  username: null,
  postIds: Set(),
  commentIds: Set(),
})

export function createUser(username) {
  return User({
    id: uid(),
    username,
  })
}

export function randomUser() {
  return createUser(randomUsername())
}

export default User
