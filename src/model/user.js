import { Record, Set } from 'immutable'

import {
  uid,
  username as randomUsername,
  profileImage as randomProfileImage,
} from '../lib/random'

const User = Record({
  id: null,
  username: null,
  pictureUrl: null,
  postIds: Set(),
  commentIds: Set(),
  likeIds: Set(),
})

export function createUser(username, pictureUrl) {
  return User({
    id: uid(),
    username,
    pictureUrl,
  })
}

export function randomUser() {
  return createUser(randomUsername(), randomProfileImage())
}

export default User
