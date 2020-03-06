import { handleActions } from 'redux-actions'

import PostMap from '../model/post-map'

const defaultState = PostMap()

export default handleActions(
  {
    ADD_POST: (state, { payload: { post } }) => state.set(post.id, post),
  },
  defaultState
)
