import { handleActions } from 'redux-actions'

import { Target } from '../model/like'
import CommentMap from '../model/comment-map'

const defaultState = CommentMap()

export default handleActions(
  {
    ADD_COMMENT: (state, { payload: { comment } }) =>
      state.set(comment.id, comment),
    ADD_LIKE: (state, { payload: { like } }) => {
      if (like.targetType !== Target.COMMENT) return state
      return state.updateIn([like.targetId, 'likeIds'], ids => ids.add(like.id))
    },
    REMOVE_LIKE: (state, { payload: { like } }) => {
      if (like.targetType !== Target.COMMENT) return state
      return state.updateIn([like.targetId, 'likeIds'], ids =>
        ids.delete(like.id)
      )
    },
    LOAD_DATABASE: (state, { payload: { comments } }) => state.merge(comments),
  },
  defaultState
)
