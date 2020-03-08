import { Record, fromJS } from 'immutable'

import { uid, dateSince as randomDateSince } from '../lib/random'

const Like = Record({
  id: null,
  timestamp: null,
  userId: null,
  targetId: null,
  targetType: null,
})

Like.fromJS = data => {
  const like = Like(fromJS(data))
  if (typeof like.timestamp === 'string')
    return like.set('timestamp', new Date(like.timestamp))
  return like
}

export const Target = {
  POST: 'post',
  COMMENT: 'comment',
}

export function createLike(timestamp, userId, targetId, targetType) {
  return Like({
    id: uid(),
    timestamp,
    userId,
    targetId,
    targetType,
  })
}

export function randomLike(targetDate, userId, targetId, targetType) {
  return createLike(randomDateSince(targetDate), userId, targetId, targetType)
}

export default Like
