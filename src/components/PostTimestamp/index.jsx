import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import { timeSince } from '../../lib/date'
import styles from './styles.module.less'
import common from '../../../res/styles/common.module.less'

const PostTimestamp = ({ timestamp, to, short }) => {
  const date = typeof timestamp === 'number' ? new Date(timestamp) : timestamp
  return (
    <div className={styles.container}>
      {to ? (
        <Link to={to} className={clsx(common.textButton, styles.timestamp)}>
          {timeSince(date, !short)}
        </Link>
      ) : (
        timeSince(date, !short)
      )}
    </div>
  )
}

PostTimestamp.propTypes = {
  timestamp: PropTypes.instanceOf(Date).isRequired,
  to: PropTypes.string,
  short: PropTypes.bool,
}

PostTimestamp.defaultProps = {
  to: null,
  short: false,
}

export default PostTimestamp
