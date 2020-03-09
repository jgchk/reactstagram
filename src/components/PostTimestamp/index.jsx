import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import { timeSince } from '../../lib/date'
import styles from './styles.module.less'
import common from '../../../res/styles/common.module.less'

const PostTimestamp = ({ timestamp, to }) => {
  const date = typeof timestamp === 'number' ? new Date(timestamp) : timestamp
  return (
    <div>
      <Link to={to} className={clsx(common.textButton, styles.timestamp)}>
        {timeSince(date, true)}
      </Link>
    </div>
  )
}

PostTimestamp.propTypes = {
  timestamp: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(Date)])
    .isRequired,
  to: PropTypes.string.isRequired,
}

export default PostTimestamp
