import { Record, Set } from 'immutable'

import { uid, image as randomImage } from '../lib/random'

const Post = Record({
  id: null,
  imageUrl: null,
  userId: null,
  commentIds: Set(),
})

export function createPost(imageUrl, userId) {
  return Post({
    id: uid(),
    imageUrl,
    userId,
  })
}

export function randomPost(userId) {
  return createPost(randomImage(), userId)
}

export default Post
