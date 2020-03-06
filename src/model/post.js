import { Record } from 'immutable'

const Post = Record({
  id: null,
  userId: null,
  commentIds: [],
})

export default Post
