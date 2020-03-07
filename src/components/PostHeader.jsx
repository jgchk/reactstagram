import React from 'react'
import PropTypes from 'prop-types'

const PostHeader = ({ pictureUrl, username, location }) => (
  <div>
    <img src={pictureUrl} alt={username} />
    <div>
      <div>{username}</div>
      <div>{location}</div>
    </div>
  </div>
)

PostHeader.propTypes = {
  pictureUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default PostHeader
