import * as db from './local-storage'

const userIds = 'users'
const postIds = 'posts'
const commentIds = 'comments'

export const users = {
  add: user => {
    db.set(user.id, user.toJS())
    db.add(userIds, user.id)
  },
}

export const posts = {
  add: post => {
    db.set(post.id, post.toJS())
    db.add(postIds, post.id)
  },
}

export const comments = {
  add: comment => {
    db.set(comment.id, comment.toJS())
    db.add(commentIds, comment.id)
  },
}

// reset db each run, for mocking purposes
// wouldn't do this in production
db.clear()
