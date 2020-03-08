import { handleActions } from 'redux-actions'

const defaultState = null

export default handleActions(
  {
    LOGIN: (state, { payload: { user } }) => user.id,
    LOGOUT: () => null,
    LOAD_DATABASE: (state, { payload: { currentUserId } }) =>
      currentUserId || null,
  },
  defaultState
)
