import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import { Iterable } from 'immutable'

import Post from '../../model/post'
import PostComment from '../PostComment'

import styles from './styles.module.less'
import common from '../../../res/styles/common.module.less'

const timestampCompare = (a, b) => a.timestamp - b.timestamp

const PostComments = ({ post, newCommentIds }) => {
  const comments = useSelector(state =>
    post.commentIds.map(id => state.getIn(['comments', id]))
  )
    .valueSeq()
    .sort(timestampCompare)

  const onViewAllClick = useCallback(() => alert('view all comments'), [])

  const postDescription = comments.find(c => c.isPostDescription)
  const otherComments = comments.filter(c => !c.isPostDescription).toList()

  console.log('new', newCommentIds)
  const oldComments = otherComments.filter(c => !newCommentIds.includes(c.id))
  const newComments = otherComments.filter(c => newCommentIds.includes(c.id))
  const displayComments = oldComments.takeLast(2).concat(newComments)

  console.log(
    oldComments.toArray(),
    newComments.toArray(),
    oldComments.takeLast(2).toArray(),
    displayComments.toArray()
  )

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
      {displayComments.map(comment => (
        <PostComment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}

PostComments.propTypes = {
  post: PropTypes.instanceOf(Post).isRequired,
  newCommentIds: PropTypes.instanceOf(Iterable).isRequired,
}

export default PostComments
