import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Iterable } from 'immutable'

const CommentReplies = ({ replies }) => {
  const [expanded, setExpanded] = useState(false)
  const onExpand = useCallback(() => setExpanded(!expanded), [expanded])

  return (
    <div>
      <button type='button' onClick={onExpand}>{`${
        expanded ? 'Hide' : 'View'
      } replies${expanded ? '' : `(${replies.size})`}`}</button>
    </div>
  )
}

CommentReplies.propTypes = {
  replies: PropTypes.instanceOf(Iterable).isRequired,
}

export default CommentReplies
