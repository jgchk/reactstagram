import { createActions } from 'redux-actions'

import { users as db } from '../database'

export default createActions({
  ADD_USER: user => {
    db.add(user)
    return { user }
  },
})
