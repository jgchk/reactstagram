import React from 'react'
import { useSelector } from 'react-redux'

import Post from '../Post'
import { Layout } from '../PostLayout'
import page from './page.module.less'

const Home = () => {
  const posts = useSelector(state => state.get('posts'))

  return (
    <div className={page.container}>
      {posts.valueSeq().map(post => (
        <Post key={post.id} post={post} layout={Layout.VERTICAL} />
      ))}
    </div>
  )
}

export default Home
