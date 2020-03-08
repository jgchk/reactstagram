import { createActions } from 'redux-actions'

import {
  users as userDb,
  posts as postDb,
  comments as commentDb,
  likes as likeDb,
} from '../database'

// eslint-disable-next-line import/prefer-default-export
export const { loadDatabase } = createActions({
  LOAD_DATABASE: () => {
    const users = userDb.all()
    const posts = postDb.all()
    const comments = commentDb.all()
    const likes = likeDb.all()
    const currentUserId = userDb.currentUserId()
    return { users, posts, comments, likes, currentUserId }
  },
})
