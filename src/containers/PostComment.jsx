import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import Comment from '../model/comment'
import PostCommentComponent from '../components/PostComment'

const PostComment = ({ comment }) => {
  const user = useSelector(state => state.getIn(['users', comment.userId]))
  return <PostCommentComponent username={user.username} text={comment.text} />
}

PostComment.propTypes = {
  comment: PropTypes.instanceOf(Comment).isRequired,
}

export default PostComment
