import { createActions } from 'redux-actions'

import { users as db } from '../database'

// eslint-disable-next-line import/prefer-default-export
export const { addUser, login, logout } = createActions({
  ADD_USER: user => {
    db.add(user)
    return { user }
  },
  LOGIN: user => {
    db.login(user)
    return { user }
  },
  LOGOUT: () => {
    db.logout()
    return {}
  },
})
