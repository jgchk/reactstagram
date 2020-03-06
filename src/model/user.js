import { Record } from 'immutable'

const User = Record({
  id: null,
  postIds: [],
  commentIds: [],
})

export default User
