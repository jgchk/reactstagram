import { createActions } from 'redux-actions'

import { comments as db } from '../database'

export default createActions({
  ADD_COMMENT: comment => {
    db.add(comment)
    return { comment }
  },
})
