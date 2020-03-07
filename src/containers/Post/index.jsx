import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import PostHeader from '../../components/PostHeader'
import PostImage from '../../components/PostImage'
import PostFooter from '../PostFooter'
import PostModel from '../../model/post'

import styles from './styles.less'

const Post = ({ post }) => {
  const user = useSelector(state => state.getIn(['users', post.userId]))

  return (
    <div className={styles.post}>
      <PostHeader
        pictureUrl={user.pictureUrl}
        username={user.username}
        location={post.location}
      />
      <PostImage imageUrl={post.imageUrl} />
      <PostFooter post={post} />
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.instanceOf(PostModel).isRequired,
}

export default Post
