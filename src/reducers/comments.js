import { handleActions } from 'redux-actions'

import CommentMap from '../model/comment-map'

const defaultState = CommentMap()

export default handleActions(
  {
    ADD_COMMENT: (state, { payload: { comment } }) =>
      state.set(comment.id, comment),
  },
  defaultState
)
