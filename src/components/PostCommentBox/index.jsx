import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.less'

const PostCommentBox = ({ onComment }) => {
  const [text, setText] = useState()
  const form = useRef(null)

  const onPost = e => {
    e.preventDefault()
    onComment(text)
    setText('')
  }
  const onKeyPress = e => {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault()
      form.current.dispatchEvent(new Event('submit'))
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} ref={form} onSubmit={onPost}>
        <textarea
          className={styles.input}
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyPress={onKeyPress}
          aria-label='Add a comment…'
          placeholder='Add a comment…'
          autoComplete='off'
          autoCorrect='off'
        />
        <button className={styles.button} type='submit' disabled={!text}>
          Post
        </button>
      </form>
    </div>
  )
}

PostCommentBox.propTypes = {
  onComment: PropTypes.func.isRequired,
}

export default PostCommentBox
