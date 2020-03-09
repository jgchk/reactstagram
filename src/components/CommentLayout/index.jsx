import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './styles.module.less'

export const Layout = {
  SIMPLE: 'simple',
  DETAIL: 'detail',
}

const CommentLayout = ({
  layout,
  text,
  like,
  profilePic,
  timestamp,
  likes,
  reply,
}) => {
  if (layout === Layout.SIMPLE)
    return (
      <div className={clsx(styles.container, styles.simple)}>
        <div className={clsx(styles.text, styles.simple)}>{text}</div>
        {!!like && (
          <div className={clsx(styles.like, styles.simple)}>{like}</div>
        )}
      </div>
    )
  return (
    <div className={clsx(styles.container, styles.detail)}>
      <div className={clsx(styles.profilePic, styles.detail)}>{profilePic}</div>
      <div className={clsx(styles.content, styles.detail)}>
        <div className={clsx(styles.text, styles.detail)}>{text}</div>
        <div className={clsx(styles.info, styles.detail)}>
          <div className={clsx(styles.timestamp, styles.detail)}>
            {timestamp}
          </div>
          {!!likes && (
            <div className={clsx(styles.likes, styles.detail)}>{likes}</div>
          )}
          {!!reply && (
            <div className={clsx(styles.reply, styles.detail)}>{reply}</div>
          )}
        </div>
      </div>
      {!!like && <div className={clsx(styles.like, styles.detail)}>{like}</div>}
    </div>
  )
}

CommentLayout.propTypes = {
  layout: PropTypes.oneOf(Object.values(Layout)).isRequired,
  text: PropTypes.node.isRequired,
  like: PropTypes.node,
  profilePic: PropTypes.node,
  timestamp: PropTypes.node,
  likes: PropTypes.node,
  reply: PropTypes.node,
}

CommentLayout.defaultProps = {
  like: null,
  profilePic: null,
  timestamp: null,
  likes: null,
  reply: null,
}

export default CommentLayout
