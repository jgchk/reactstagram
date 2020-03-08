import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import SmallLikeIcon from '../../../res/svg/like-small.svg'
import SmallLikedIcon from '../../../res/svg/liked-small.svg'

import styles from './styles.module.less'
import common from '../../../res/styles/common.module.less'

const PostComment = ({
  username,
  text,
  isPostDescription,
  liked,
  onLike,
  onClickUsername,
}) => {
  const [animating, setAnimating] = useState(false)

  const onClickLike = useCallback(() => {
    setAnimating(true)
    onLike(!liked)
  }, [onLike, liked])

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <button
          type='button'
          className={clsx(common.textButton, common.bold, common.username)}
          onClick={onClickUsername}
        >
          {username}
        </button>
        &nbsp;
        <span>{text}</span>
      </div>
      {!isPostDescription && (
        <button
          type='button'
          className={clsx(
            common.button,
            styles.likeButton,
            animating && common.animateLike
          )}
          onClick={onClickLike}
          onAnimationEnd={() => setAnimating(false)}
        >
          {liked ? <SmallLikedIcon /> : <SmallLikeIcon />}
        </button>
      )}
    </div>
  )
}

PostComment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isPostDescription: PropTypes.bool.isRequired,
  liked: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
  onClickUsername: PropTypes.func.isRequired,
}

export default PostComment
