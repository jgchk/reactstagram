import { Record, Set, fromJS } from 'immutable'

import { defaultReviver } from '../lib/immutable'

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

User.fromJS = data =>
  User(
    fromJS(data, (key, value) => {
      if (key === 'postIds' || key === 'commentIds' || key === 'likeIds')
        return value.toSet()
      return defaultReviver(key, value)
    })
  )

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
