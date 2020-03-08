import { Map } from 'immutable'

import * as db from './local-storage'
import User from '../model/user'
import Post from '../model/post'
import Comment from '../model/comment'
import Like from '../model/like'

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
  all: () => {
    const ids = db.get(userIds, [])
    return Map(
      ids.map(id => {
        const user = User.fromJS(db.get(id))
        return [id, user]
      })
    )
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
  all: () => {
    const ids = db.get(postIds, [])
    return Map(
      ids.map(id => {
        const post = Post.fromJS(db.get(id))
        return [id, post]
      })
    )
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
  all: () => {
    const ids = db.get(commentIds, [])
    return Map(
      ids.map(id => {
        const comment = Comment.fromJS(db.get(id))
        return [id, comment]
      })
    )
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
  all: () => {
    const ids = db.get(likeIds, [])
    return Map(
      ids.map(id => {
        const like = Like.fromJS(db.get(id))
        return [id, like]
      })
    )
  },
}
