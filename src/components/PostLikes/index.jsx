import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.less'

const PostLikes = ({ likes }) => (
  <div className={styles.likes}>{`${likes} likes`}</div>
)

PostLikes.propTypes = {
  likes: PropTypes.number.isRequired,
}

export default PostLikes
