import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import Post from '../../model/post'
import PostActions from '../../components/PostActions'
import PostLikes from '../../components/PostLikes'
import PostComment from '../PostComment'
import PostTimestamp from '../../components/PostTimestamp'
import PostCommentBox from '../../components/PostCommentBox'

import { createComment } from '../../model/comment'
import { addComment } from '../../actions/comments'

import styles from './styles.less'

const PostFooter = ({ post }) => {
  const comments = useSelector(state =>
    post.commentIds.map(id => state.getIn(['comments', id]))
  )
  const loggedInUserId = useSelector(state => state.get('currentUserId'))
  const dispatch = useDispatch()

  const onLike = () => console.log('like')
  const onCommentButton = () => console.log('comment')
  const onShare = () => console.log('share')
  const onSave = () => console.log('save')
  const onCommentBox = text => {
    console.log('comment', text)
    const comment = createComment(text, new Date(), loggedInUserId, post.id)
    dispatch(addComment(comment))
  }

  return (
    <div>
      <PostActions
        onLike={onLike}
        onComment={onCommentButton}
        onShare={onShare}
        onSave={onSave}
      />
      <PostLikes likes={post.likeIds.size} />
      <div className={styles.comments}>
        {comments.valueSeq().map(comment => (
          <PostComment key={comment.id} comment={comment} />
        ))}
      </div>
      <PostTimestamp timestamp={post.timestamp} />
      <PostCommentBox onComment={onCommentBox} />
    </div>
  )
}

PostFooter.propTypes = {
  post: PropTypes.instanceOf(Post).isRequired,
}

export default PostFooter
