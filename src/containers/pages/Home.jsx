import React from 'react'
import { useSelector } from 'react-redux'

import Post from '../Post'

const Home = () => {
  const posts = useSelector(state => state.get('posts'))

  return (
    <div>
      {posts.valueSeq().map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Home
