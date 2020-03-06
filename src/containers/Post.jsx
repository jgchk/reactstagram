import React from 'react'
import PropTypes from 'prop-types'

import PostModel from '../model/post'

const Post = ({ post }) => <div>{post.id}</div>

Post.propTypes = {
  post: PropTypes.instanceOf(PostModel).isRequired,
}

export default Post
