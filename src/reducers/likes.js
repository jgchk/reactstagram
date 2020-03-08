import { handleActions } from 'redux-actions'

import LikeMap from '../model/like-map'

const defaultState = LikeMap()

export default handleActions(
  {
    ADD_LIKE: (state, { payload: { like } }) => state.set(like.id, like),
    REMOVE_LIKE: (state, { payload: { like } }) => state.delete(like.id),
    LOAD_DATABASE: (state, { payload: { likes } }) => state.merge(likes),
  },
  defaultState
)
