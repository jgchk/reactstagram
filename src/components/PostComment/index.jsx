import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.less'

const PostComment = ({ username, text }) => (
  <div className={styles.container}>
    <span className={styles.username}>{username}</span>
    &nbsp;
    <span className={styles.text}>{text}</span>
  </div>
)

PostComment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default PostComment
