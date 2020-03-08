import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import BigLikeIcon from '../../../res/svg/like-big.svg'
import styles from './styles.module.less'
import common from '../../../res/styles/common.module.less'

const PostImage = ({ imageUrl, onLike }) => {
  const [animating, setAnimating] = useState(false)

  const onDoubleClick = useCallback(() => {
    setAnimating(true)
    onLike(true)
  }, [onLike])

  return (
    <button
      type='button'
      className={clsx(common.button, styles.imageButton)}
      onDoubleClick={onDoubleClick}
    >
      <img className={styles.image} src={imageUrl} alt='post' />
      <div className={styles.likeIconContainer}>
        <BigLikeIcon
          className={clsx(styles.likeIcon, animating && styles.animate)}
          onAnimationEnd={() => setAnimating(false)}
        />
      </div>
    </button>
  )
}

PostImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onLike: PropTypes.func.isRequired,
}

export default PostImage
