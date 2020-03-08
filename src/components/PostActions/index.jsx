import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import LikeIcon from '../../../res/svg/like.svg'
import LikedIcon from '../../../res/svg/liked.svg'
import CommentIcon from '../../../res/svg/comment.svg'
import ShareIcon from '../../../res/svg/share.svg'
import SaveIcon from '../../../res/svg/save.svg'
import styles from './styles.module.less'
import common from '../../../res/styles/common.module.less'

const PostActions = ({ liked, onLike, onComment, onShare, onSave }) => {
  const [animating, setAnimating] = useState(false)

  const onClickLike = useCallback(() => {
    setAnimating(true)
    onLike(!liked)
  }, [onLike, liked])

  return (
    <div className={styles.container}>
      <button
        className={clsx(
          common.button,
          styles.firstButton,
          animating && styles.animate
        )}
        type='button'
        onClick={onClickLike}
        onAnimationEnd={() => setAnimating(false)}
      >
        {liked ? <LikedIcon /> : <LikeIcon />}
      </button>
      <button className={common.button} type='button' onClick={onComment}>
        <CommentIcon />
      </button>
      <button className={common.button} type='button' onClick={onShare}>
        <ShareIcon />
      </button>
      <button
        className={clsx(common.button, styles.saveButton)}
        type='button'
        onClick={onSave}
      >
        <SaveIcon />
      </button>
    </div>
  )
}

PostActions.propTypes = {
  liked: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired,
  onShare: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
}

export default PostActions
