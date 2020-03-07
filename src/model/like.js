import Record from 'immutable'

import { uid } from '../lib/random'

const Like = Record({
  id: null,
  timestamp: null,
  userId: null,
  targetId: null,
  targetType: null,
})

export function createLike(timestamp, userId, targetId, targetType) {
  return Like({
    id: uid(),
    timestamp,
    userId,
    targetId,
    targetType,
  })
}

export default Like
