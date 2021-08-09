import './AllPosts.css'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout.jsx'
import { getAllPosts } from '../../services/posts.js'

export default function AllPosts(props) {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [input, setInput] = useState("")

  useEffect(() => {
    const fetchPosts = async () => {
      let data = await getAllPosts()
      setPosts(data)
      setFilteredPosts(data)
    }
    fetchPosts()
  }, [])

  const handleChange = () => {
    const result = posts.filter((post) => {
      return (post.title.toLowerCase().includes(input.toLowerCase()))
    })
    setFilteredPosts(result)
  }

  const matches = filteredPosts.filter((item) => item.title.toLowerCase().includes(input.toLowerCase()))

  return (
    <div>
      <Layout user={props.user} setUser={props.setUser}>
        <form className="searchbar" onSubmit={handleChange}>
          <input className="search-text" value={input} type="text" placeholder="Search" onChange={(e) => setInput(e.target.value)} />
        </form>
        {matches.map((post, key) => {
          return (
            <div key={post._id} className="postarea">
              <Link className='post-link' to={`/posts/${post._id}`}>
                <h3 className='post-title' >{post.title}</h3>
                <p className="time">{`Posted at ${post.createdAt.slice(11, 16)} on ${post.createdAt.slice(5, 10)}-${post.createdAt.slice(0, 4)}`}</p>
              </Link>
            </div>
          )
        })}
      </Layout>
    </div>
  )
}
