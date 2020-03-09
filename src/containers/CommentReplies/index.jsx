import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Iterable } from 'immutable'
import clsx from 'clsx'

import Comment from '../../model/comment'
import PostComment from '../PostComment'
import { Layout } from '../../components/CommentLayout'

import common from '../../../res/styles/common.module.less'
import styles from './styles.module.less'

const CommentReplies = ({ comment, replies, layout, onReply }) => {
  const [expanded, setExpanded] = useState(false)
  const onExpand = useCallback(() => setExpanded(!expanded), [expanded])

  const onClickReply = useCallback(
    (_replyComment, replyUser) => onReply(comment, replyUser),
    [onReply, comment]
  )

  return (
    <div>
      <PostComment
        key={comment.id}
        comment={comment}
        layout={layout}
        onReply={onReply}
        replies={replies}
      />
      {replies.size > 0 && (
        <div className={styles.replies}>
          <button
            type='button'
            onClick={onExpand}
            className={clsx(
              common.textButton,
              common.bold,
              styles.expandButton
            )}
          >
            <div className={styles.dash} />
            <span>{`${expanded ? 'Hide' : 'View'} replies${
              expanded ? '' : ` (${replies.size})`
            }`}</span>
          </button>
          {expanded &&
            replies.map(reply => (
              <PostComment
                key={reply.id}
                comment={reply}
                layout={layout}
                onReply={onClickReply}
              />
            ))}
        </div>
      )}
    </div>
  )
}

CommentReplies.propTypes = {
  comment: PropTypes.instanceOf(Comment).isRequired,
  replies: PropTypes.instanceOf(Iterable).isRequired,
  layout: PropTypes.oneOf(Object.values(Layout)).isRequired,
  onReply: PropTypes.func.isRequired,
}

export default CommentReplies
