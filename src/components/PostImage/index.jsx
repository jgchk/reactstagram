import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.less'

const PostImage = ({ imageUrl }) => (
  <div>
    <img className={styles.image} src={imageUrl} alt='post' />
  </div>
)

PostImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}

export default PostImage
