import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { addUser } from '../actions/users'
import { addPost } from '../actions/posts'
import { randomUser } from '../model/user'
import { randomPost } from '../model/post'

import Home from './pages/Home'
import Post from './pages/Post'

const App = () => {
  // mock user and post
  const dispatch = useDispatch()
  const users = useSelector(state => state.get('users'))
  if (users.size < 1) {
    const user = randomUser()
    const post = randomPost(user.id)
    dispatch(addUser(user))
    dispatch(addPost(post))
  }

  return (
    <Router>
      <Switch>
        <Route path='/p/:id' component={Post} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default App
