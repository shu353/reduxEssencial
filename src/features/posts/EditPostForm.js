import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { postUpdated } from './postsSlice'

export const EditPostForm = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const dispatch = useDispatch()
  const history = useHistory()

  const onTitleChanged = (event) => setTitle(event.target.value)
  const onContentChanged = (event) => setContent(event.target.value)

  const onSavedPostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: postId, title, content }))
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>Edit post</h2>
      <form>
        <label htmlFor="postTitle">post title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="whats on your mind"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavedPostClicked}>
        edit your post
      </button>
    </section>
  )
}
