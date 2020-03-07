import { Record, Set } from 'immutable'

import {
  uid,
  sentence as randomSentence,
  dateSince as randomDateSince,
} from '../lib/random'

const Comment = Record({
  id: null,
  text: null,
  timestamp: null,
  userId: null,
  postId: null,
  likeIds: Set(),
})

export function createComment(text, timestamp, userId, postId) {
  return Comment({
    id: uid(),
    text,
    timestamp,
    userId,
    postId,
  })
}

export function randomComment(userId, postId, postDate) {
  return createComment(
    randomSentence(),
    randomDateSince(postDate),
    userId,
    postId
  )
}

export default Comment
