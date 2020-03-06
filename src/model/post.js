import { Record } from 'immutable'

const Post = Record({
  id: null,
  userId: null,
  commentIds: Set(),
})

export default Post
