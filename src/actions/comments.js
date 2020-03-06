import { createActions } from 'redux-actions'

import { comments as db } from '../database'

// eslint-disable-next-line import/prefer-default-export
export const { addComment } = createActions({
  ADD_COMMENT: comment => {
    db.add(comment)
    return { comment }
  },
})
