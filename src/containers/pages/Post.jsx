import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import PostContainer from '../Post'
import { Layout } from '../PostLayout'
import page from './page.module.less'

const Post = () => {
  const { id } = useParams()
  const post = useSelector(state => state.getIn(['posts', id]))

  return (
    <div className={page.container}>
      <PostContainer post={post} layout={Layout.HORIZONTAL} />
    </div>
  )
}

export default Post
