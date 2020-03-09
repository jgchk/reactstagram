import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Iterable } from 'immutable'

import Post from '../model/post'
import PostComment from './PostComment'
import ViewAllButton from '../components/ViewAllButton'

const timestampCompare = (a, b) => a.timestamp - b.timestamp

const PostComments = ({ post, newCommentIds }) => {
  const comments = useSelector(state =>
    post.commentIds.map(id => state.getIn(['comments', id]))
  )
    .valueSeq()
    .sort(timestampCompare)

  const postDescription = comments.find(c => c.isPostDescription)
  const otherComments = comments.filter(c => !c.isPostDescription).toList()

  const oldComments = otherComments.filter(c => !newCommentIds.includes(c.id))
  const newComments = otherComments.filter(c => newCommentIds.includes(c.id))
  const displayComments = oldComments.takeLast(2).concat(newComments)

  return (
    <div>
      {!!postDescription && (
        <PostComment key={postDescription.id} comment={postDescription} />
      )}
      {oldComments.size > 2 && (
        <ViewAllButton to={`/p/${post.id}`} numComments={otherComments.size} />
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
