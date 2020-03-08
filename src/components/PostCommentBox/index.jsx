import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './styles.module.less'
import common from '../../../res/styles/common.module.less'

const PostCommentBox = React.forwardRef(({ onComment }, input) => {
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
          ref={input}
          aria-label='Add a comment…'
          placeholder='Add a comment…'
          autoComplete='off'
          autoCorrect='off'
        />
        <button
          className={clsx(common.button, styles.button)}
          type='submit'
          disabled={!text}
        >
          Post
        </button>
      </form>
    </div>
  )
})

PostCommentBox.propTypes = {
  onComment: PropTypes.func.isRequired,
}

export default PostCommentBox
