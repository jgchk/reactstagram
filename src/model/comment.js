import { Record, Set, fromJS } from 'immutable'

import { defaultReviver } from '../lib/immutable'

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

Comment.fromJS = data => {
  const comment = Comment(
    fromJS(data, (key, value) => {
      if (key === 'likeIds') return value.toSet()
      return defaultReviver(key, value)
    })
  )
  if (typeof comment.timestamp === 'string')
    return comment.set('timestamp', new Date(comment.timestamp))
  return comment
}

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
    timestamp: Number(timestamp),
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
    isPostDescription ? postDate : randomDateSince(postDate),
    userId,
    postId,
    isPostDescription
  )
}

export default Comment
