import React from 'react'
import PropTypes from 'prop-types'

import { timeSince } from '../../lib/date'
import styles from './styles.module.less'

const PostTimestamp = ({ timestamp }) => {
  return <div className={styles.timestamp}>{timeSince(timestamp, true)}</div>
}

PostTimestamp.propTypes = {
  timestamp: PropTypes.instanceOf(Date).isRequired,
}

export default PostTimestamp
