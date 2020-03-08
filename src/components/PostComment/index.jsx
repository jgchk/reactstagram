import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import SmallLikeIcon from '../../../res/svg/like-small.svg'
import SmallLikedIcon from '../../../res/svg/liked-small.svg'

import styles from './styles.module.less'
import common from '../../../res/styles/common.module.less'

const PostComment = ({ username, text, liked, onLike }) => {
  const [animating, setAnimating] = useState(false)

  const onClickLike = useCallback(() => {
    setAnimating(true)
    onLike(!liked)
  }, [onLike, liked])

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <span className={styles.username}>{username}</span>
        &nbsp;
        <span className={styles.text}>{text}</span>
      </div>
      <button
        type='button'
        className={clsx(
          common.button,
          styles.likeButton,
          animating && styles.animate
        )}
        onClick={onClickLike}
        onAnimationEnd={() => setAnimating(false)}
      >
        {liked ? <SmallLikedIcon /> : <SmallLikeIcon />}
      </button>
    </div>
  )
}

PostComment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
}

export default PostComment
