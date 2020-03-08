import { Record, Set, fromJS } from 'immutable'

import { defaultReviver } from '../lib/immutable'

import {
  uid,
  image as randomImage,
  location as randomLocation,
  recentDate as randomRecentDate,
} from '../lib/random'

const Post = Record({
  id: null,
  imageUrl: null,
  location: null,
  timestamp: null,
  userId: null,
  commentIds: Set(),
  likeIds: Set(),
})

Post.fromJS = data => {
  const post = Post(
    fromJS(data, (key, value) => {
      if (key === 'commentIds' || key === 'likeIds') return value.toSet()
      return defaultReviver(key, value)
    })
  )
  if (typeof post.timestamp === 'string')
    return post.set('timestamp', new Date(post.timestamp))
  return post
}

export function createPost(imageUrl, location, timestamp, userId) {
  return Post({
    id: uid(),
    imageUrl,
    location,
    timestamp: Number(timestamp),
    userId,
  })
}

export function randomPost(userId) {
  return createPost(randomImage(), randomLocation(), randomRecentDate(), userId)
}

export default Post
