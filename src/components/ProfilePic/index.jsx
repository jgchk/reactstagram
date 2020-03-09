import React from 'react'
import PropTypes from 'prop-types'

import common from '../../../res/styles/common.module.less'
import styles from './styles.module.less'

const ProfilePic = ({ pictureUrl, onClick }) => (
  <button type='button' className={common.button} onClick={onClick}>
    <img className={styles.profilePic} src={pictureUrl} alt='Avatar' />
  </button>
)

ProfilePic.propTypes = {
  pictureUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ProfilePic
