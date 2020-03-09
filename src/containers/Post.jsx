/* eslint-disable no-alert */
import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { Set } from 'immutable'

import { Layout as CommentLayouts } from '../components/CommentLayout'
import PostLayout, { Layout as PostLayouts } from '../components/PostLayout'
import PostHeader from '../components/PostHeader'
import PostImage from '../components/PostImage'
import PostActions from '../components/PostActions'
import PostLikes from '../components/PostLikes'
import PostTimestamp from '../components/PostTimestamp'
import PostComments from './PostComments'
import PostCommentBox from '../components/PostCommentBox'

import PostModel from '../model/post'
import { createLike, Target } from '../model/like'
import { addLike, removeLike } from '../actions/likes'
import { createComment } from '../model/comment'
import { addComment } from '../actions/comments'

const Post = ({ post, layout }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.getIn(['users', post.userId]))
  const currentUserId = useSelector(state => state.get('currentUserId'))
  const like = useSelector(state =>
    state
      .get('likes')
      .find(
        l =>
          l.targetType === Target.POST &&
          l.targetId === post.id &&
          l.userId === currentUserId
      )
  )

  const onClickPicture = useCallback(
    () => alert(`show ${user.username} story/profile`),
    [user.username]
  )
  const onClickUsername = useCallback(
    () => alert(`show ${user.username} profile`),
    [user.username]
  )
  const onClickLocation = useCallback(
    () => alert(`show ${post.location} location`),
    [post.location]
  )
  const onClickMore = useCallback(() => alert('show more options'), [])

  const onLike = useCallback(
    liked => {
      if (liked) {
        if (!like)
          dispatch(
            addLike(createLike(new Date(), currentUserId, post.id, Target.POST))
          )
      } else {
        dispatch(removeLike(like))
      }
    },
    [like, currentUserId, post.id, dispatch]
  )

  const onShare = useCallback(() => alert('share'), [])
  const onSave = useCallback(() => alert('save'), [])
  const commentBoxEl = useRef(null)
  const onCommentButton = useCallback(() => commentBoxEl.current.focus(), [
    commentBoxEl,
  ])
  const onClickLikes = useCallback(() => alert('show likes list'), [])

  const [newCommentIds, setNewCommentIds] = useState(Set())
  const onNewComment = useCallback(
    comment => {
      setNewCommentIds(newCommentIds.add(comment.id))
    },
    [newCommentIds]
  )

  const onCommentBox = useCallback(
    text => {
      const comment = createComment(text, new Date(), currentUserId, post.id)
      onNewComment(comment)
      dispatch(addComment(comment))
    },
    [currentUserId, post, onNewComment, dispatch]
  )

  const image = <PostImage imageUrl={post.imageUrl} onLike={onLike} />
  const header = (
    <PostHeader
      pictureUrl={user.pictureUrl}
      username={user.username}
      location={post.location}
      onClickPicture={onClickPicture}
      onClickUsername={onClickUsername}
      onClickLocation={onClickLocation}
      onClickMore={onClickMore}
    />
  )
  const actions = (
    <PostActions
      liked={!!like}
      onLike={onLike}
      onComment={onCommentButton}
      onShare={onShare}
      onSave={onSave}
    />
  )
  const likes = <PostLikes likes={post.likeIds.size} onClick={onClickLikes} />
  const comments = (
    <PostComments
      post={post}
      newCommentIds={newCommentIds}
      truncated={layout === PostLayouts.VERTICAL}
      layout={
        layout === PostLayouts.VERTICAL
          ? CommentLayouts.SIMPLE
          : CommentLayouts.DETAIL
      }
    />
  )
  const timestamp = (
    <PostTimestamp timestamp={post.timestamp} to={`/p/${post.id}`} />
  )
  const commentBox = (
    <PostCommentBox onComment={onCommentBox} ref={commentBoxEl} />
  )

  return (
    <PostLayout
      layout={layout}
      image={image}
      header={header}
      actions={actions}
      likes={likes}
      comments={comments}
      timestamp={timestamp}
      commentBox={commentBox}
    />
  )
}

Post.propTypes = {
  post: PropTypes.instanceOf(PostModel).isRequired,
  layout: PropTypes.oneOf(Object.values(PostLayouts)).isRequired,
}

export default Post
