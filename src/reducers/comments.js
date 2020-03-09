import { handleActions } from 'redux-actions'

import { Target } from '../model/like'
import CommentMap from '../model/comment-map'

const defaultState = CommentMap()

function addLike(state, like) {
  if (like.targetType !== Target.COMMENT) return state
  return state.updateIn([like.targetId, 'likeIds'], ids => ids.add(like.id))
}

export default handleActions(
  {
    ADD_COMMENT: (state, { payload: { comment } }) => {
      const newState = state.set(comment.id, comment)
      if (comment.parentCommentId)
        newState.updateIn([comment.parentCommentId, 'replyIds'], ids =>
          ids.add(comment.id)
        )
      return newState
    },
    ADD_LIKE: (state, { payload: { like } }) => addLike(state, like),
    REMOVE_LIKE: (state, { payload: { like } }) => {
      if (like.targetType !== Target.COMMENT) return state
      return state.updateIn([like.targetId, 'likeIds'], ids =>
        ids.delete(like.id)
      )
    },
    LOAD_DATABASE: (state, { payload: { comments, likes } }) => {
      let nextState = state.merge(comments)
      likes.forEach(like => {
        nextState = addLike(nextState, like)
      })
      return nextState
    },
  },
  defaultState
)
