import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './styles.module.less'
import common from '../../../res/styles/common.module.less'

const PostLikes = ({ likes, onClick }) => {
  let suffix = 'like'
  if (Math.abs(likes) !== 1) suffix += 's'
  return (
    <div className={styles.container}>
      <button
        type='button'
        className={clsx(common.textButton, common.bold)}
        onClick={onClick}
      >{`${likes} ${suffix}`}</button>
    </div>
  )
}

PostLikes.propTypes = {
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default PostLikes
