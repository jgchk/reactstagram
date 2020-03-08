import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import { timeSince } from '../../lib/date'
import styles from './styles.module.less'
import common from '../../../res/styles/common.module.less'

const PostTimestamp = ({ timestamp, onClick }) => (
  <button
    type='button'
    className={clsx(common.textButton, styles.timestamp)}
    onClick={onClick}
  >
    {timeSince(timestamp, true)}
  </button>
)

PostTimestamp.propTypes = {
  timestamp: PropTypes.instanceOf(Date).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default PostTimestamp
