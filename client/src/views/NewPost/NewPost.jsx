import React from 'react'
import Layout from '../../components/Layout/Layout'
import { createPost } from '../../services/posts.js'
import { useHistory } from "react-router-dom"
import { useState } from "react"


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


  return (
    <Layout user={props.user} setUser={props.setUser}>
      
      <h1>Create New Post</h1>

      <form onSubmit={handleSubmit}>

        <label>Title</label>
        <br/>
        <input id="title" valiue={input.title} onChange={handleChange} />
        <br/>
        <label>Paste Your Code Here</label>
        <br/>
        <textarea id="content" valiue={input.content} onChange={handleChange} />
        <br/>
        <button>Submit</button>

      </form>
   </Layout>
  )
}
