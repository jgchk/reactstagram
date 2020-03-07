import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.less'

const PostLikes = ({ likes }) => {
  let suffix = 'like'
  if (Math.abs(likes) !== 1) suffix += 's'
  return <div className={styles.likes}>{`${likes} ${suffix}`}</div>
}

PostLikes.propTypes = {
  likes: PropTypes.number.isRequired,
}

export default PostLikes
