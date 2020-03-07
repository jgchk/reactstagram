import * as db from './local-storage'

const userIds = 'users'
const postIds = 'posts'
const commentIds = 'comments'
const likeIds = 'likes'

export const users = {
  add: user => {
    db.set(user.id, user.toJS())
    db.add(userIds, user.id)
  },
  remove: user => {
    db.remove(user.id)
    db.del(userIds, user.id)
  },
}

export const posts = {
  add: post => {
    db.set(post.id, post.toJS())
    db.add(postIds, post.id)
  },
  remove: post => {
    db.remove(post.id)
    db.del(postIds, post.id)
  },
}

export const comments = {
  add: comment => {
    db.set(comment.id, comment.toJS())
    db.add(commentIds, comment.id)
  },
  remove: comment => {
    db.remove(comment.id)
    db.del(commentIds, comment.id)
  },
}

export const likes = {
  add: like => {
    db.set(like.id, like.toJS())
    db.add(likeIds, like.id)
  },
  remove: like => {
    db.remove(like.id)
    db.del(likeIds, like.id)
  },
}

// reset db each run, for mocking purposes
// wouldn't do this in production
db.clear()
