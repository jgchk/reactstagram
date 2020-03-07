import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.less'

const PostComment = ({ username, text }) => (
  <div className={styles.container}>
    <div className={styles.username}>{username}</div>
    <div className={styles.text}>{text}</div>
  </div>
)

PostComment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default PostComment
