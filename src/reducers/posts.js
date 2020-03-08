import { handleActions } from 'redux-actions'

import { Target } from '../model/like'
import PostMap from '../model/post-map'

const defaultState = PostMap()

function addComment(state, comment) {
  return state.updateIn([comment.postId, 'commentIds'], ids =>
    ids.add(comment.id)
  )
}

function addLike(state, like) {
  if (like.targetType !== Target.POST) return state
  return state.updateIn([like.targetId, 'likeIds'], ids => ids.add(like.id))
}

export default handleActions(
  {
    ADD_POST: (state, { payload: { post } }) => state.set(post.id, post),
    ADD_COMMENT: (state, { payload: { comment } }) =>
      addComment(state, comment),
    ADD_LIKE: (state, { payload: { like } }) => addLike(state, like),
    REMOVE_LIKE: (state, { payload: { like } }) => {
      if (like.targetType !== Target.POST) return state
      return state.updateIn([like.targetId, 'likeIds'], ids =>
        ids.delete(like.id)
      )
    },
    LOAD_DATABASE: (state, { payload: { posts, comments, likes } }) => {
      let nextState = state.merge(posts)
      comments.forEach(comment => {
        nextState = addComment(nextState, comment)
      })
      likes.forEach(like => {
        nextState = addLike(nextState, like)
      })
      return nextState
    },
  },
  defaultState
)
