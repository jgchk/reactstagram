import { handleActions } from 'redux-actions'

import UserMap from '../model/user-map'

const defaultState = UserMap()

function addPost(state, post) {
  return state.updateIn([post.userId, 'postIds'], ids => ids.add(post.id))
}

function addComment(state, comment) {
  return state.updateIn([comment.userId, 'commentIds'], ids =>
    ids.add(comment.id)
  )
}

function addLike(state, like) {
  return state.updateIn([like.userId, 'likeIds'], ids => ids.add(like.id))
}

export default handleActions(
  {
    ADD_USER: (state, { payload: { user } }) => state.set(user.id, user),
    ADD_POST: (state, { payload: { post } }) => addPost(state, post),
    ADD_COMMENT: (state, { payload: { comment } }) =>
      addComment(state, comment),
    ADD_LIKE: (state, { payload: { like } }) => addLike(state, like),
    REMOVE_LIKE: (state, { payload: { like } }) =>
      state.updateIn([like.userId, 'likeIds'], ids => ids.delete(like.id)),
    LOAD_DATABASE: (state, { payload: { users, posts, comments, likes } }) => {
      let nextState = state.merge(users)
      posts.forEach(post => {
        nextState = addPost(nextState, post)
      })
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
