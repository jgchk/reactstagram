import { handleActions } from 'redux-actions'

import PostMap from '../model/post-map'

const defaultState = PostMap()

export default handleActions({}, defaultState)
