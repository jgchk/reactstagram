import { handleActions } from 'redux-actions'

import UserMap from '../model/user-map'

const defaultState = UserMap()

export default handleActions(
  {
    ADD_USER: (state, { payload: { user } }) => state.set(user.id, user),
    ADD_COMMENT: (state, { payload: { comment } }) =>
      state.updateIn([comment.userId, 'commentIds'], ids =>
        ids.add(comment.id)
      ),
  },
  defaultState
)
