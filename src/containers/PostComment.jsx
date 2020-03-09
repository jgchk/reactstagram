/* eslint-disable no-alert */
import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { Layout } from '../components/CommentLayout'
import Comment from '../model/comment'
import { createLike, Target } from '../model/like'
import { addLike, removeLike } from '../actions/likes'
import PostCommentComponent from '../components/PostComment'

const PostComment = ({ comment, layout, onReply }) => {
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

  const onClickLikes = useCallback(() => alert('show likes list'), [])
  const onClickReply = useCallback(() => onReply(comment, user), [
    onReply,
    comment,
    user,
  ])
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
  const onClickUser = useCallback(
    () => alert(`show ${user.username} profile`),
    [user.username]
  )

  return (
    <PostCommentComponent
      layout={layout}
      pictureUrl={user.pictureUrl}
      onClickPicture={onClickUser}
      username={user.username}
      text={comment.text}
      timestamp={new Date(comment.timestamp)}
      likes={comment.likeIds.size}
      onClickLikes={onClickLikes}
      onClickReply={onClickReply}
      isPostDescription={comment.isPostDescription}
      liked={!!like}
      onLike={onLike}
      onClickUsername={onClickUser}
    />
  )
}

PostComment.propTypes = {
  comment: PropTypes.instanceOf(Comment).isRequired,
  layout: PropTypes.oneOf(Object.values(Layout)).isRequired,
  onReply: PropTypes.func.isRequired,
}

export default PostComment
