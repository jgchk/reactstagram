import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { timeSince } from '../../lib/date'
import styles from './styles.module.less'
import common from '../../../res/styles/common.module.less'

const PostTimestamp = ({ timestamp, onClick }) => {
  const date = typeof timestamp === 'number' ? new Date(timestamp) : timestamp
  return (
    <button
      type='button'
      className={clsx(common.textButton, styles.timestamp)}
      onClick={onClick}
    >
      {timeSince(date, true)}
    </button>
  )
}

PostTimestamp.propTypes = {
  timestamp: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)])
    .isRequired,
  onClick: PropTypes.func.isRequired,
}

export default PostTimestamp
