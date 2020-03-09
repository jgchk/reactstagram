import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import CommentLayout, { Layout } from '../CommentLayout'
import ProfilePic from '../ProfilePic'
import Timestamp from '../PostTimestamp'
import Likes from '../PostLikes'

import SmallLikeIcon from '../../../res/svg/like-small.svg'
import SmallLikedIcon from '../../../res/svg/liked-small.svg'

import styles from './styles.module.less'
import common from '../../../res/styles/common.module.less'

const PostComment = ({
  layout,
  pictureUrl,
  onClickPicture,
  username,
  text,
  timestamp,
  likes,
  onClickLikes,
  onClickReply,
  isPostDescription,
  liked,
  onLike,
  onClickUsername,
}) => {
  const [animating, setAnimating] = useState(false)

  const onClickLike = useCallback(() => {
    setAnimating(true)
    onLike(!liked)
  }, [onLike, liked])

  const textEl = (
    <div className={styles.textContainer}>
      <button
        type='button'
        className={clsx(common.textButton, common.bold, common.username)}
        onClick={onClickUsername}
      >
        {username}
      </button>
      &nbsp;
      <span>{text}</span>
    </div>
  )
  const likeEl = !isPostDescription && (
    <button
      type='button'
      className={clsx(
        common.button,
        styles.like,
        animating && common.animateLike
      )}
      onClick={onClickLike}
      onAnimationEnd={() => setAnimating(false)}
    >
      {liked ? <SmallLikedIcon /> : <SmallLikeIcon />}
    </button>
  )

  if (layout === Layout.SIMPLE)
    return <CommentLayout layout={layout} text={textEl} like={likeEl} />

  const profilePicEl = (
    <ProfilePic pictureUrl={pictureUrl} onClick={onClickPicture} />
  )
  const timestampEl = <Timestamp timestamp={timestamp} short />
  const likesEl = <Likes likes={likes} onClick={onClickLikes} small />
  const replyEl = (
    <button
      type='button'
      className={clsx(common.textButton, common.bold, styles.reply)}
      onClick={onClickReply}
    >
      Reply
    </button>
  )
  return (
    <CommentLayout
      layout={layout}
      text={textEl}
      like={likeEl}
      profilePic={profilePicEl}
      timestamp={timestampEl}
      likes={likesEl}
      reply={replyEl}
    />
  )
}

PostComment.propTypes = {
  layout: PropTypes.oneOf(Object.values(Layout)).isRequired,
  pictureUrl: PropTypes.string.isRequired,
  onClickPicture: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
  likes: PropTypes.number.isRequired,
  onClickLikes: PropTypes.func.isRequired,
  onClickReply: PropTypes.func.isRequired,
  isPostDescription: PropTypes.bool.isRequired,
  liked: PropTypes.bool.isRequired,
  onLike: PropTypes.func.isRequired,
  onClickUsername: PropTypes.func.isRequired,
}

export default PostComment
