import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import Post from '../model/post'
import PostActions from '../components/PostActions'
import PostLikes from '../components/PostLikes'
import PostComment from './PostComment'
import PostTimestamp from '../components/PostTimestamp'
import PostCommentBox from '../components/PostCommentBox'

const PostFooter = ({ post }) => {
  const comments = useSelector(state =>
    post.commentIds.map(id => state.getIn(['comments', id]))
  )

  const onLike = () => console.log('like')
  const onCommentButton = () => console.log('comment')
  const onShare = () => console.log('share')
  const onBookmark = () => console.log('bookmark')
  const onCommentBox = () => console.log('comment')

  return (
    <div>
      <PostActions
        onLike={onLike}
        onComment={onCommentButton}
        onShare={onShare}
        onBookmark={onBookmark}
      />
      <PostLikes likes={post.likeIds.size} />
      {comments.valueSeq().map(comment => (
        <PostComment comment={comment} />
      ))}
      <PostTimestamp timestamp={post.timestamp} />
      <PostCommentBox onComment={onCommentBox} />
    </div>
  )
}

PostFooter.propTypes = {
  post: PropTypes.instanceOf(Post).isRequired,
}

export default PostFooter
