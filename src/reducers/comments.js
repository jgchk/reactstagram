import { handleActions } from 'redux-actions'

import CommentMap from '../model/comment-map'

const defaultState = CommentMap()

export default handleActions({}, defaultState)
