import { handleActions } from 'redux-actions'

import UserMap from '../model/user-map'

const defaultState = UserMap()

export default handleActions(
  {
    ADD_USER: (state, { payload: { user } }) => state.set(user.id, user),
  },
  defaultState
)
