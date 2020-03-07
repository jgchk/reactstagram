import React from 'react'
import PropTypes from 'prop-types'

const PostLikes = ({ likes }) => <div>{`${likes} likes`}</div>

PostLikes.propTypes = {
  likes: PropTypes.number.isRequired,
}

export default PostLikes
