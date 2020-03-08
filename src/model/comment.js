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
  isPostDescription: false,
})

export function createComment(
  text,
  timestamp,
  userId,
  postId,
  isPostDescription = false
) {
  return Comment({
    id: uid(),
    text,
    timestamp,
    userId,
    postId,
    isPostDescription,
  })
}

export function randomComment(
  userId,
  postId,
  postDate,
  isPostDescription = false
) {
  return createComment(
    randomSentence(),
    randomDateSince(postDate),
    userId,
    postId,
    isPostDescription
  )
}

export default Comment
