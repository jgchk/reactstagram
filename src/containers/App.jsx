import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addUser } from '../actions/users'
import { addPost } from '../actions/posts'
import { randomUser } from '../model/user'
import { randomPost } from '../model/post'

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

  return <div>Hello React!</div>
}

export default App
