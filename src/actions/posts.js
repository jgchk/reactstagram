import { createActions } from 'redux-actions'

import { posts as db } from '../database'

// eslint-disable-next-line import/prefer-default-export
export const { addPost } = createActions({
  ADD_POST: post => {
    db.add(post)
    return { post }
  },
})
