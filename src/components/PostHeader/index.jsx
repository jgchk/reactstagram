import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './styles.module.less'

const PostHeader = ({
  pictureUrl,
  username,
  location,
  onClickPicture,
  onClickUsername,
  onClickLocation,
}) => (
  <div className={styles.header}>
    <button type='button' className={styles.button} onClick={onClickPicture}>
      <img className={styles.profilePic} src={pictureUrl} alt={username} />
    </button>
    <div className={styles.info}>
      <button
        type='button'
        className={clsx(styles.username, styles.button)}
        onClick={onClickUsername}
      >
        {username}
      </button>
      <button
        type='button'
        className={clsx(styles.location, styles.button)}
        onClick={onClickLocation}
      >
        {location}
      </button>
    </div>
  </div>
)

PostHeader.propTypes = {
  pictureUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  onClickPicture: PropTypes.func.isRequired,
  onClickUsername: PropTypes.func.isRequired,
  onClickLocation: PropTypes.func.isRequired,
}

export default PostHeader
