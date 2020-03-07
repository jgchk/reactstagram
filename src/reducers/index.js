import { combineReducers } from 'redux-immutable'

import users from './users'
import posts from './posts'
import comments from './comments'
import currentUserId from './login'

export default combineReducers({
  users,
  posts,
  comments,
  currentUserId,
})
