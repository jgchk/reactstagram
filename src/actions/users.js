import { createActions } from 'redux-actions'

import { users as db } from '../database'

// eslint-disable-next-line import/prefer-default-export
export const { addUser } = createActions({
  ADD_USER: user => {
    db.add(user)
    return { user }
  },
})
