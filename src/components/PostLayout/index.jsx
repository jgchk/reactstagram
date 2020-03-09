import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './styles.module.less'

export const Layout = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
}

const PostLayout = ({
  layout,
  image,
  header,
  actions,
  likes,
  comments,
  timestamp,
  commentBox,
}) => {
  if (layout === Layout.VERTICAL)
    return (
      <div className={clsx(styles.container, styles.vertical)}>
        <div className={clsx(styles.post, styles.vertical)}>
          <div className={clsx(styles.header, styles.vertical)}>{header}</div>
          <div className={clsx(styles.image, styles.vertical)}>{image}</div>
          <div className={clsx(styles.actions, styles.vertical)}>{actions}</div>
          <div className={clsx(styles.likes, styles.vertical)}>{likes}</div>
          <div className={clsx(styles.comments, styles.vertical)}>
            {comments}
          </div>
          <div className={clsx(styles.timestamp, styles.vertical)}>
            {timestamp}
          </div>
          <div className={clsx(styles.commentBox, styles.vertical)}>
            {commentBox}
          </div>
        </div>
      </div>
    )
  return (
    <div className={clsx(styles.container, styles.horizontal)}>
      <div className={clsx(styles.post, styles.horizontal)}>
        <div className={clsx(styles.image, styles.horizontal)}>{image}</div>
        <div className={clsx(styles.right, styles.horizontal)}>
          <div className={clsx(styles.header, styles.horizontal)}>{header}</div>
          <div className={clsx(styles.commentsContainer, styles.horizontal)}>
            <div className={clsx(styles.comments, styles.horizontal)}>
              {comments}
            </div>
          </div>
          <div className={clsx(styles.actions, styles.horizontal)}>
            {actions}
          </div>
          <div className={clsx(styles.likes, styles.horizontal)}>{likes}</div>
          <div className={clsx(styles.timestamp, styles.horizontal)}>
            {timestamp}
          </div>
          <div className={clsx(styles.commentBox, styles.horizontal)}>
            {commentBox}
          </div>
        </div>
      </div>
    </div>
  )
}

PostLayout.propTypes = {
  layout: PropTypes.oneOf(Object.values(Layout)).isRequired,
  image: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  actions: PropTypes.node.isRequired,
  likes: PropTypes.node.isRequired,
  comments: PropTypes.node.isRequired,
  timestamp: PropTypes.node.isRequired,
  commentBox: PropTypes.node.isRequired,
}

export default PostLayout
