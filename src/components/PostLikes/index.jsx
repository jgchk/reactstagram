import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import common from '../../../res/styles/common.module.less'
import styles from './styles.module.less'

const PostLikes = ({ likes, onClick, small }) => {
  let suffix = 'like'
  if (Math.abs(likes) !== 1) suffix += 's'
  return (
    <div>
      <button
        type='button'
        className={clsx(common.textButton, common.bold, small && styles.small)}
        onClick={onClick}
      >{`${likes} ${suffix}`}</button>
    </div>
  )
}

PostLikes.propTypes = {
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  small: PropTypes.bool,
}

PostLikes.defaultProps = {
  small: false,
}

export default PostLikes
