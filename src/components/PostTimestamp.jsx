import React from 'react'
import PropTypes from 'prop-types'

import { timeSince } from '../lib/date'

const PostTimestamp = ({ timestamp }) => {
  return <div>{timeSince(timestamp)}</div>
}

PostTimestamp.propTypes = {
  timestamp: PropTypes.instanceOf(Date).isRequired,
}

export default PostTimestamp
