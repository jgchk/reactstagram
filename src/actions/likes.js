import { createActions } from 'redux-actions'

import { likes as db } from '../database'

// eslint-disable-next-line import/prefer-default-export
export const { addLike, removeLike } = createActions({
  ADD_LIKE: like => {
    db.add(like)
    return { like }
  },
  REMOVE_LIKE: like => {
    db.remove(like)
    return { like }
  },
})
