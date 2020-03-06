import { combineReducers } from 'redux-immutable'

import posts from './posts'
import comments from './comments'

export default combineReducers({
  posts,
  comments,
})
