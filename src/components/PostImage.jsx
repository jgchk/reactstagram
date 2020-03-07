import React from 'react'
import PropTypes from 'prop-types'

const PostImage = ({ imageUrl }) => (
  <div>
    <img src={imageUrl} alt='post' />
  </div>
)

PostImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}

export default PostImage
