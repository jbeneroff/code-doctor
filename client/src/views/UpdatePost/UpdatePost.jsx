import { updatePost, getPost } from '../../services/posts'
import { useParams, useHistory } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import React, { useEffect, useState } from 'react'
import './UpdatePost.css'


export default function UpdatePost(props) {
  const [input, setInput] = useState({ title: "", content: "" })
  const [post, setPost] = useState({ title: "", content: "" })
  const history = useHistory()
  const { id } = useParams()

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(id, input);
    history.push(`/posts/${id}`);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPost(id)
      setPost(data)
      setInput(data)
    }
    fetchPost()
    // eslint-disable-next-line
  }, [])


  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <br />
          <input className='update-title' placeholder={post.title} id="title" value={input.title} onChange={handleChange} />
          <br />
          <label>Paste Your Code Here</label>
          <br />
          <textarea className='update-content' placeholder={post.content} id="content" value={input.content} onChange={handleChange} />
          <br />
          <button id='update-button'>Submit</button>
        </form>
      </div>
    </Layout>
  )
}