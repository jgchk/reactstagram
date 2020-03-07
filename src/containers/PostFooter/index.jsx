import React, { useRef } from 'react'
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
import { createLike, Target } from '../../model/like'
import { addLike, removeLike } from '../../actions/likes'

import styles from './styles.module.less'

const PostFooter = ({ post }) => {
  const dispatch = useDispatch()
  const commentBox = useRef(null)

  const comments = useSelector(state =>
    post.commentIds.map(id => state.getIn(['comments', id]))
  )
  const currentUserId = useSelector(state => state.get('currentUserId'))
  const like = useSelector(state =>
    state.get('likes').find(l => l.userId === currentUserId)
  )

  const onLike = () => {
    if (like) dispatch(removeLike(like))
    else
      dispatch(
        addLike(createLike(new Date(), currentUserId, post.id, Target.POST))
      )
  }
  const onCommentButton = () => commentBox.current.focus()
  const onShare = () => alert('share')
  const onSave = () => console.log('save')
  const onCommentBox = text => {
    const comment = createComment(text, new Date(), currentUserId, post.id)
    dispatch(addComment(comment))
  }

  return (
    <div>
      <PostActions
        liked={!!like}
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
      <PostCommentBox onComment={onCommentBox} ref={commentBox} />
    </div>
  )
}

PostFooter.propTypes = {
  post: PropTypes.instanceOf(Post).isRequired,
}

export default PostFooter
