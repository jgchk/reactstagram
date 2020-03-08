import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import PostHeader from '../../components/PostHeader'
import PostImage from '../../components/PostImage'
import PostFooter from '../PostFooter'
import PostModel from '../../model/post'
import { createLike, Target } from '../../model/like'
import { addLike, removeLike } from '../../actions/likes'

import styles from './styles.module.less'

const Post = ({ post }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.getIn(['users', post.userId]))
  const currentUserId = useSelector(state => state.get('currentUserId'))
  const like = useSelector(state =>
    state
      .get('likes')
      .find(
        l =>
          l.targetType === Target.POST &&
          l.targetId === post.id &&
          l.userId === currentUserId
      )
  )

  const onClickPicture = useCallback(() => alert('show story/profile'), [])
  const onClickUsername = useCallback(() => alert('show profile'), [])
  const onClickLocation = useCallback(() => alert('show location'), [])
  const onClickMore = useCallback(() => alert('show more options'), [])

  const onLike = useCallback(
    liked => {
      if (liked) {
        if (!like)
          dispatch(
            addLike(createLike(new Date(), currentUserId, post.id, Target.POST))
          )
      } else {
        dispatch(removeLike(like))
      }
    },
    [like, currentUserId, post.id, dispatch]
  )

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
      <PostImage imageUrl={post.imageUrl} onLike={onLike} />
      <PostFooter
        post={post}
        currentUserId={currentUserId}
        liked={!!like}
        onLike={onLike}
      />
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.instanceOf(PostModel).isRequired,
}

export default Post
