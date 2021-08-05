import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout.jsx'
import { getAllPosts } from '../../services/posts.js'

export default function AllPosts(props) {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [input, setInput] = useState("")

  useEffect(() => {
    const fetchPosts = async () => {
      let data = await getAllPosts()
      console.log(data)
      setPosts(data)
    }
    fetchPosts()
  }, [])

  useEffect(() => {
    setFilteredPosts(posts)
  }, [posts])

  useEffect(() => {
    if (input) {
      setFilteredPosts(posts.filter((post) => {
        if (post.title.includes(input)) {
          return post
        }
        return null
      }))
    } else {
      setFilteredPosts(posts)
    }
  }, [posts, input])

  const handleChange = async (e) => {
    setInput(e.target.value)
  }


  return (
    <div>
      <Layout user={props.user} setUser={props.setUser}>
        <input type="text" onChange={handleChange} placeholder="Search" />
       
        <div>{`${props.user?.username}'s Posts`}</div>
        
        {filteredPosts.map((post) => {
          return (
            <Link to={`/posts/${post._id}`}>
              <h3>{post.title}</h3>
              <p>{post.timestamps}</p>
              {/* add in logic for formatting code for pmvp */}
              <p>{post.content}</p>
            </Link>
          )
        })}
      </Layout>
    </div>
  )
}
