import { handleActions } from 'redux-actions'

import { Target } from '../model/like'
import PostMap from '../model/post-map'

const defaultState = PostMap()

export default handleActions(
  {
    ADD_POST: (state, { payload: { post } }) => state.set(post.id, post),
    ADD_COMMENT: (state, { payload: { comment } }) =>
      state.updateIn([comment.postId, 'commentIds'], ids =>
        ids.add(comment.id)
      ),
    ADD_LIKE: (state, { payload: { like } }) => {
      if (like.targetType !== Target.POST) return state
      return state.updateIn([like.targetId, 'likeIds'], ids => ids.add(like.id))
    },
    REMOVE_LIKE: (state, { payload: { like } }) => {
      if (like.targetType !== Target.POST) return state
      return state.updateIn([like.targetId, 'likeIds'], ids =>
        ids.delete(like.id)
      )
    },
  },
  defaultState
)
