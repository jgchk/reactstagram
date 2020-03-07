import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { addUser, login } from '../../actions/users'
import { addPost } from '../../actions/posts'
import { randomUser } from '../../model/user'
import { randomPost } from '../../model/post'

import Home from '../pages/Home'
import Post from '../pages/Post'

import '../../../res/styles/reset.less'
import styles from './styles.less'

const App = () => {
  // mock user and post
  const dispatch = useDispatch()
  const users = useSelector(state => state.get('users'))
  if (users.size === 0) {
    const yourUser = randomUser()
    const otherUser = randomUser()
    const post = randomPost(otherUser.id)
    dispatch(addUser(yourUser))
    dispatch(login(yourUser))
    dispatch(addUser(otherUser))
    dispatch(addPost(post))
  }

  return (
    <div className={styles.base}>
      <Router>
        <Switch>
          <Route path='/p/:id' component={Post} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
