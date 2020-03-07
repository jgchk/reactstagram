import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.less'

const PostHeader = ({ pictureUrl, username, location }) => (
  <div className={styles.header}>
    <img className={styles.profilePic} src={pictureUrl} alt={username} />
    <div className={styles.info}>
      <div className={styles.username}>{username}</div>
      <div className={styles.location}>{location}</div>
    </div>
  </div>
)

PostHeader.propTypes = {
  pictureUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default PostHeader
