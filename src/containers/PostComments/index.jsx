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

const PostComments = ({ post, newCommentIds, truncated, layout, onReply }) => {
  const commentMap = useSelector(state =>
    state.get('comments').filter(c => post.commentIds.has(c.id))
  )
  const comments = commentMap
    .valueSeq()
    .sort(timestampCompare)
    .toList()

  const postDescription = comments.find(c => c.isPostDescription)
  const otherComments = comments.filter(c => !c.isPostDescription)

  let commentsWithReplies
  let oldComments
  if (truncated) {
    oldComments = otherComments.filter(c => !newCommentIds.includes(c.id))
    const newComments = otherComments.filter(c => newCommentIds.includes(c.id))
    const displayComments = oldComments.takeLast(2).concat(newComments)
    commentsWithReplies = displayComments.map(comment => ({
      comment,
      replies: [],
    }))
  } else {
    const topLevelComments = otherComments.filter(c => !c.parentCommentId)
    commentsWithReplies = topLevelComments.map(comment => {
      const replies = comment.replyIds
        .map(replyId => commentMap.get(replyId))
        .valueSeq()
        .sort(timestampCompare)
      return { comment, replies }
    })
  }

  return (
    <div className={styles.container}>
      {!!postDescription && (
        <PostComment
          key={postDescription.id}
          comment={postDescription}
          layout={layout}
          onReply={onReply}
        />
      )}
      {truncated && oldComments.size > 2 && (
        <ViewAllButton to={`/p/${post.id}`} numComments={otherComments.size} />
      )}
      {commentsWithReplies.map(({ comment, replies }) => (
        <PostComment
          key={comment.id}
          comment={comment}
          layout={layout}
          onReply={onReply}
          replies={replies}
        />
      ))}
    </div>
  )
}

PostComments.propTypes = {
  post: PropTypes.instanceOf(Post).isRequired,
  newCommentIds: PropTypes.instanceOf(Iterable).isRequired,
  truncated: PropTypes.bool.isRequired,
  layout: PropTypes.oneOf(Object.values(Layout)).isRequired,
  onReply: PropTypes.func.isRequired,
}

export default PostComments
