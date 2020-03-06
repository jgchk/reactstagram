import { createActions } from 'redux-actions'

import { posts as db } from '../database'

export default createActions({
  ADD_POST: post => {
    db.add(post)
    return { post }
  },
})
