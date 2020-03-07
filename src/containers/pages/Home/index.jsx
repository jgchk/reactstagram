import React from 'react'
import { useSelector } from 'react-redux'

import Post from '../../Post'
import styles from './styles.module.less'

const Home = () => {
  const posts = useSelector(state => state.get('posts'))

  return (
    <div className={styles.home}>
      {posts.valueSeq().map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default Home
