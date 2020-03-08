import { handleActions } from 'redux-actions'

import UserMap from '../model/user-map'

const defaultState = UserMap()

export default handleActions(
  {
    ADD_USER: (state, { payload: { user } }) => state.set(user.id, user),
    ADD_POST: (state, { payload: { post } }) =>
      state.updateIn([post.userId, 'postIds'], ids => ids.add(post.id)),
    ADD_COMMENT: (state, { payload: { comment } }) =>
      state.updateIn([comment.userId, 'commentIds'], ids =>
        ids.add(comment.id)
      ),
    ADD_LIKE: (state, { payload: { like } }) =>
      state.updateIn([like.userId, 'likeIds'], ids => ids.add(like.id)),
    REMOVE_LIKE: (state, { payload: { like } }) =>
      state.updateIn([like.userId, 'likeIds'], ids => ids.delete(like.id)),
    LOAD_DATABASE: (state, { payload: { users } }) => state.merge(users),
  },
  defaultState
)
