import { Record } from 'immutable'

import { uid, sentence as randomSentence } from '../lib/random'

const Comment = Record({
  id: null,
  text: null,
  userId: null,
  postId: null,
})

export function createComment(text, userId, postId) {
  return Comment({
    id: uid(),
    text,
    userId,
    postId,
  })
}

export function randomComment(userId, postId) {
  return createComment(randomSentence(), userId, postId)
}

export default Comment
