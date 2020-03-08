/* from https://redux.js.org/recipes/configuring-your-store/ */

import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'
import { dev } from './config'
import {
  chance as randomChance,
  integer as randomInt,
  choice as randomChoice,
} from './lib/random'

import { loadDatabase } from './actions/database'

import { addUser, login } from './actions/users'
import { randomUser } from './model/user'

import { addPost } from './actions/posts'
import { randomPost } from './model/post'

import { addComment } from './actions/comments'
import { randomComment } from './model/comment'

import { addLike } from './actions/likes'
import { Target, randomLike } from './model/like'

function randomExistingUser(store) {
  return randomChoice(
    store
      .getState()
      .get('users')
      .valueSeq()
      .toArray()
  )
}

function initializeStore(store) {
  store.dispatch(loadDatabase())

  let you
  const currentUserId = store.getState().get('currentUserId')
  if (currentUserId !== null) {
    you = store.getState().getIn(['users', currentUserId])
  } else if (store.getState().get('users').size < 1) {
    you = randomUser()
    store.dispatch(addUser(you))
  } else {
    you = randomExistingUser(store)
  }
  store.dispatch(login(you))

  if (store.getState().get('posts').size < 1) {
    let postUser
    const otherUsers = store
      .getState()
      .get('users')
      .filter(user => user.id !== you.id)
    if (otherUsers.size < 1) {
      postUser = randomUser()
      store.dispatch(addUser(postUser))
    } else {
      postUser = randomChoice(otherUsers.valueSeq().toArray())
    }

    const post = randomPost(postUser.id)
    store.dispatch(addPost(post))

    if (randomChance(0.75)) {
      const description = randomComment(
        postUser.id,
        post.id,
        post.timestamp,
        true
      )
      store.dispatch(addComment(description))
    }

    const comments = []

    const numViewers = randomInt(0, 20)
    for (let i = 0; i < numViewers; i += 1) {
      const viewer = randomUser()
      store.dispatch(addUser(viewer))

      // like the post
      if (randomChance(0.6)) {
        const like = randomLike(post.timestamp, viewer.id, post.id, Target.POST)
        store.dispatch(addLike(like))
      }

      // leave a comment
      if (randomChance(0.3)) {
        const comment = randomComment(viewer.id, post.id, post.timestamp)
        comments.push(comment)
        store.dispatch(addComment(comment))
      }

      // like some comments
      comments.forEach(comment => {
        if (randomChance(0.3)) {
          const like = randomLike(
            comment.timestamp,
            viewer.id,
            comment.id,
            Target.COMMENT
          )
          store.dispatch(addLike(like))
        }
      })
    }
  }
}

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)
  initializeStore(store)

  if (dev && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}
