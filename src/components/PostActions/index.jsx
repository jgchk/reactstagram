import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import LikeIcon from '../../../res/svg/like.svg'
import CommentIcon from '../../../res/svg/comment.svg'
import ShareIcon from '../../../res/svg/share.svg'
import SaveIcon from '../../../res/svg/save.svg'
import styles from './styles.module.less'

const PostActions = ({ onLike, onComment, onShare, onSave }) => {
  return (
    <div className={styles.container}>
      <button
        className={clsx(styles.button, styles.firstButton)}
        type='button'
        onClick={onLike}
      >
        <LikeIcon />
      </button>
      <button className={styles.button} type='button' onClick={onComment}>
        <CommentIcon />
      </button>
      <button className={styles.button} type='button' onClick={onShare}>
        <ShareIcon />
      </button>
      <button
        className={clsx(styles.button, styles.saveButton)}
        type='button'
        onClick={onSave}
      >
        <SaveIcon />
      </button>
    </div>
  )
}

PostActions.propTypes = {
  onLike: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
}

export default PostActions
