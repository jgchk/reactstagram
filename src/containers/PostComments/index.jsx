import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

import Post from '../../model/post'
import PostComment from '../PostComment'

import styles from './styles.module.less'
import common from '../../../res/styles/common.module.less'

const PostComments = ({ post }) => {
  const comments = useSelector(state =>
    post.commentIds.map(id => state.getIn(['comments', id]))
  )

  const onViewAllClick = useCallback(() => alert('view all comments'), [])

  const viewDate = useMemo(() => new Date(), [])

  const postDescription = comments.find(c => c.isPostDescription)
  const otherComments = comments.filter(c => !c.isPostDescription)

  const oldComments = comments.filter(c => c.timestamp <= viewDate)
  const newComments = comments.filter(c => c.timestamp > viewDate)
  const displayComments = oldComments.takeLast(2).union(newComments)

  return (
    <div className={styles.container}>
      {!!postDescription && (
        <PostComment key={postDescription.id} comment={postDescription} />
      )}
      {oldComments.size > 2 && (
        <button
          type='button'
          className={clsx(common.textButton, styles.viewAllButton)}
          onClick={onViewAllClick}
        >{`View all ${otherComments.size} comments`}</button>
      )}
      {displayComments.valueSeq().map(comment => (
        <PostComment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}

PostComments.propTypes = {
  post: PropTypes.instanceOf(Post).isRequired,
}

export default PostComments
