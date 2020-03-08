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

function initializeStore(store) {
  store.dispatch(loadDatabase())

  const you = randomUser()
  store.dispatch(addUser(you))
  store.dispatch(login(you))

  if (store.getState().get('posts').size === 0) {
    const postUser = randomUser()
    const post = randomPost(postUser.id)
    store.dispatch(addUser(postUser))
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

    const numComments = randomInt(0, 10)
    for (let i = 0; i < numComments; i += 1) {
      const commentUser = randomUser()
      const comment = randomComment(commentUser.id, post.id, post.timestamp)
      store.dispatch(addUser(commentUser))
      store.dispatch(addComment(comment))

      const numLikes = randomInt(0, 3)
      for (let j = 0; j < numLikes; j += 1) {
        const likeUserId = randomChoice(
          store
            .getState()
            .get('users')
            .keySeq()
            .toArray()
        )
        const like = randomLike(
          comment.timestamp,
          likeUserId,
          comment.id,
          Target.COMMENT
        )
        store.dispatch(addLike(like))
      }
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
