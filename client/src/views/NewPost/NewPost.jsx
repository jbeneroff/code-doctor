import React from 'react'
import Layout from '../../components/Layout/Layout'
import { createPost } from '../../services/posts.js'
import { useHistory } from "react-router-dom"
import { useState } from "react"
import './NewPost.css'


export default function NewPost(props) {
  const [input, setInput] = useState({ title: "", content: "" })
  const history = useHistory();
  const { user } = props;

  const handleChange = (e) => {
    const { id, value } = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(input);
    history.push(`/user/${user.id}`);
  };

  const useTab = (e) => {
    if (e.key === 'Tab' && !e.shiftKey) {
      document.execCommand('insertText', false, "  ")
      e.preventDefault()
      return false
    }
  }

  return (
  
    <Layout user={props.user} setUser={props.setUser}>
      
      <h1>Create New Post</h1>

      <form onSubmit={handleSubmit}>

        <h3 id='new-title-label' >Title</h3>
        <input className='title' id="title" value={input.title} onChange={handleChange} />
        <br/>
        <h3 id='new-content-label'>Paste Your Code Here</h3>
        <textarea className='new-post-content' id="content" value={input.content} placeholder="Use '//' for plain text." onChange={handleChange} onKeyDown={useTab}/>
        <br/>
        <button id='new-button'>Submit</button>

      </form>
    </Layout>
  )
}
