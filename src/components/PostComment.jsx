import React from 'react'
import PropTypes from 'prop-types'

const PostComment = ({ username, text }) => (
  <div>
    <div>{username}</div>
    <div>{text}</div>
  </div>
)

PostComment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default PostComment
