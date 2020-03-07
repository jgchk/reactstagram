import React from 'react'
import PropTypes from 'prop-types'

const PostCommentBox = ({ onComment }) => {
  return (
    <div>
      <form>
        <textarea />
        <button type='submit' onClick={onComment}>
          Post
        </button>
      </form>
    </div>
  )
}

PostCommentBox.propTypes = {
  onComment: PropTypes.func.isRequired,
}

export default PostCommentBox
