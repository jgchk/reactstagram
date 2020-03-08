import React, { useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import Post from '../model/post'
import PostActions from '../components/PostActions'
import PostLikes from '../components/PostLikes'
import PostTimestamp from '../components/PostTimestamp'
import PostComments from './PostComments'
import PostCommentBox from '../components/PostCommentBox'

import { createComment } from '../model/comment'
import { addComment } from '../actions/comments'

const PostFooter = ({ post, currentUserId, liked, onLike }) => {
  const dispatch = useDispatch()
  const commentBox = useRef(null)

  const onCommentButton = useCallback(() => commentBox.current.focus(), [
    commentBox,
  ])
  const onShare = useCallback(() => alert('share'), [])
  const onSave = useCallback(() => alert('save'), [])
  const onCommentBox = useCallback(
    text => {
      const comment = createComment(text, new Date(), currentUserId, post.id)
      dispatch(addComment(comment))
    },
    [currentUserId, post, dispatch]
  )
  const onClickLikes = useCallback(() => alert('show likes list'), [])
  const onClickTimestamp = useCallback(() => alert('show post page'), [])

  return (
    <div>
      <PostActions
        liked={liked}
        onLike={onLike}
        onComment={onCommentButton}
        onShare={onShare}
        onSave={onSave}
      />
      <PostLikes likes={post.likeIds.size} onClick={onClickLikes} />
      <PostComments post={post} />
      <PostTimestamp timestamp={post.timestamp} onClick={onClickTimestamp} />
      <PostCommentBox onComment={onCommentBox} ref={commentBox} />
    </div>
  )
}

PostFooter.propTypes = {
  post: PropTypes.instanceOf(Post).isRequired,
  currentUserId: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
}

export default PostFooter