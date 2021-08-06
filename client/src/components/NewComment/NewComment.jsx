import React from 'react'
import { createComment } from '../../services/comments'
import { useHistory, useParams } from "react-router-dom"
import { useState } from "react"
import './NewComment.css'

export default function NewComment(props) {
  const [input, setInput] = useState({ content: "" })
  const history = useHistory();
  const { id } = useParams()

  const handleChange = (e) => {
    const { id, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    await createComment(id, input);
    history.push(`/posts/${id}`);
  };

  const useTab = (e) => {
    if (e.key === 'Tab' && !e.shiftKey) {
      document.execCommand('insertText', false, "  ")
      e.preventDefault()
      return false
    }
  }

  return (
    <div>
      <form id='new-comment' onSubmit={handleSubmit}>
        <h4 id='add-comment-header'>Add Your Solution Here</h4>
        <textarea id="new-comment-content" valiue={input.content} placeholder="Use '//' for plain text." onChange={handleChange} onKeyDown={useTab}/>
        <br/>
        <button id='submit-comment'>Submit</button>
      </form>
    </div>
  )
}

