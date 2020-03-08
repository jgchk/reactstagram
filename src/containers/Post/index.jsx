import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import PostHeader from '../../components/PostHeader'
import PostImage from '../../components/PostImage'
import PostFooter from '../PostFooter'
import PostModel from '../../model/post'

import styles from './styles.module.less'

const Post = ({ post }) => {
  const user = useSelector(state => state.getIn(['users', post.userId]))

  const onClickPicture = useCallback(() => alert('show story/profile'), [])
  const onClickUsername = useCallback(() => alert('show profile'), [])
  const onClickLocation = useCallback(() => alert('show location'), [])
  const onClickMore = useCallback(() => alert('show more options'), [])

  return (
    <div className={styles.post}>
      <PostHeader
        pictureUrl={user.pictureUrl}
        username={user.username}
        location={post.location}
        onClickPicture={onClickPicture}
        onClickUsername={onClickUsername}
        onClickLocation={onClickLocation}
        onClickMore={onClickMore}
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
