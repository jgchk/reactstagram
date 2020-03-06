import { Record, Set } from 'immutable'

const User = Record({
  id: null,
  postIds: Set(),
  commentIds: Set(),
})

export default User
