import { Record, Set } from 'immutable'

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

export function createPost(imageUrl, location, timestamp, userId) {
  return Post({
    id: uid(),
    imageUrl,
    location,
    timestamp,
    userId,
  })
}

export function randomPost(userId) {
  return createPost(randomImage(), randomLocation(), randomRecentDate(), userId)
}

export default Post
