import React, { useRef, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Set } from 'immutable'

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

  const [newCommentIds, setNewCommentIds] = useState(Set())

  const onNewComment = useCallback(
    comment => {
      setNewCommentIds(newCommentIds.add(comment.id))
    },
    [newCommentIds]
  )
  const onCommentButton = useCallback(() => commentBox.current.focus(), [
    commentBox,
  ])
  const onShare = useCallback(() => alert('share'), [])
  const onSave = useCallback(() => alert('save'), [])
  const onCommentBox = useCallback(
    text => {
      const comment = createComment(text, new Date(), currentUserId, post.id)
      onNewComment(comment)
      dispatch(addComment(comment))
    },
    [currentUserId, post, onNewComment, dispatch]
  )
  const onClickLikes = useCallback(() => alert('show likes list'), [])

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
      <PostComments post={post} newCommentIds={newCommentIds} />
      <PostTimestamp timestamp={post.timestamp} to={`/p/${post.id}`} />
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
