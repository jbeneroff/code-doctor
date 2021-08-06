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
        <h2>Comment</h2>
        <h3>Add Your Solution Here</h3>
        <br/>
        <textarea id="content" valiue={input.content} placeholder="Use '//' for plain text." onChange={handleChange} onKeyDown={useTab}/>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

