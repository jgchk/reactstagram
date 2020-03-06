import { handleActions } from 'redux-actions'

import PostMap from '../model/post-map'

const defaultState = PostMap()

export default handleActions(
  {
    ADD_POST: (state, { payload: { post } }) => state.set(post.id, post),
    ADD_COMMENT: (state, { payload: { comment } }) =>
      state.updateIn([comment.postId, 'commentIds'], ids =>
        ids.add(comment.id)
      ),
  },
  defaultState
)
