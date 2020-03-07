import React from 'react'
import PropTypes from 'prop-types'

const PostActions = ({ onLike, onComment, onShare, onBookmark }) => {
  return (
    <div>
      <button type='button' onClick={onLike}>
        Like
      </button>
      <button type='button' onClick={onComment}>
        Comment
      </button>
      <button type='button' onClick={onShare}>
        Share
      </button>
      <button type='button' onClick={onBookmark}>
        Bookmark
      </button>
    </div>
  )
}

PostActions.propTypes = {
  onLike: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  onBookmark: PropTypes.func.isRequired,
}

export default PostActions
