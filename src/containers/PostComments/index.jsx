import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Iterable } from 'immutable'

import { Layout } from '../../components/CommentLayout'
import Post from '../../model/post'
import PostComment from '../PostComment'
import ViewAllButton from '../../components/ViewAllButton'

import styles from './styles.module.less'

const timestampCompare = (a, b) => a.timestamp - b.timestamp

const PostComments = ({ post, newCommentIds, truncated, layout }) => {
  const comments = useSelector(state =>
    post.commentIds.map(id => state.getIn(['comments', id]))
  )
    .valueSeq()
    .sort(timestampCompare)

  const postDescription = comments.find(c => c.isPostDescription)
  const otherComments = comments.filter(c => !c.isPostDescription).toList()

  let displayComments
  let oldComments
  if (truncated) {
    oldComments = otherComments.filter(c => !newCommentIds.includes(c.id))
    const newComments = otherComments.filter(c => newCommentIds.includes(c.id))
    displayComments = oldComments.takeLast(2).concat(newComments)
  } else {
    displayComments = otherComments
  }

  return (
    <div className={styles.container}>
      {!!postDescription && (
        <PostComment
          key={postDescription.id}
          comment={postDescription}
          layout={layout}
        />
      )}
      {truncated && oldComments.size > 2 && (
        <ViewAllButton to={`/p/${post.id}`} numComments={otherComments.size} />
      )}
      {displayComments.map(comment => (
        <PostComment key={comment.id} comment={comment} layout={layout} />
      ))}
    </div>
  )
}

PostComments.propTypes = {
  post: PropTypes.instanceOf(Post).isRequired,
  newCommentIds: PropTypes.instanceOf(Iterable).isRequired,
  truncated: PropTypes.bool.isRequired,
  layout: PropTypes.oneOf(Object.values(Layout)).isRequired,
}

export default PostComments
