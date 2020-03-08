import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import MoreIcon from '../../../res/svg/more.svg'
import styles from './styles.module.less'
import common from '../../../res/styles/common.module.less'

const PostHeader = ({
  pictureUrl,
  username,
  location,
  onClickPicture,
  onClickUsername,
  onClickLocation,
  onClickMore,
}) => (
  <div className={styles.header}>
    <button type='button' className={common.button} onClick={onClickPicture}>
      <img className={styles.profilePic} src={pictureUrl} alt={username} />
    </button>
    <div className={styles.info}>
      <button
        type='button'
        className={clsx(common.button, styles.username, styles.textButton)}
        onClick={onClickUsername}
      >
        {username}
      </button>
      <button
        type='button'
        className={clsx(styles.location, common.button, styles.textButton)}
        onClick={onClickLocation}
      >
        {location}
      </button>
    </div>
    <button
      className={clsx(styles.more, common.button)}
      type='button'
      onClick={onClickMore}
    >
      <MoreIcon />
    </button>
  </div>
)

PostHeader.propTypes = {
  pictureUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  onClickPicture: PropTypes.func.isRequired,
  onClickUsername: PropTypes.func.isRequired,
  onClickLocation: PropTypes.func.isRequired,
  onClickMore: PropTypes.func.isRequired,
}

export default PostHeader
