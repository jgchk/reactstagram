import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import Comment from '../model/comment'
import { createLike, Target } from '../model/like'
import { addLike, removeLike } from '../actions/likes'
import PostCommentComponent from '../components/PostComment'

const PostComment = ({ comment }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.getIn(['users', comment.userId]))
  const currentUserId = useSelector(state => state.get('currentUserId'))
  const like = useSelector(state =>
    state
      .get('likes')
      .find(
        l =>
          l.targetType === Target.COMMENT &&
          l.targetId === comment.id &&
          l.userId === currentUserId
      )
  )

  const onLike = useCallback(
    liked => {
      if (liked) {
        if (!like)
          dispatch(
            addLike(
              createLike(new Date(), currentUserId, comment.id, Target.COMMENT)
            )
          )
      } else {
        dispatch(removeLike(like))
      }
    },
    [like, currentUserId, comment.id, dispatch]
  )
  const onClickUsername = useCallback(
    () => alert(`show ${user.username} profile`),
    [user.username]
  )

  return (
    <PostCommentComponent
      username={user.username}
      text={comment.text}
      liked={!!like}
      onLike={onLike}
      onClickUsername={onClickUsername}
    />
  )
}

PostComment.propTypes = {
  comment: PropTypes.instanceOf(Comment).isRequired,
}

export default PostComment
