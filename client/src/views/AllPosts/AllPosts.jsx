import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout.jsx'
import { getAllPosts } from '../../services/posts.js'

export default function AllPosts(props) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      let data = await getAllPosts()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <div>
      <Layout user={props.user} setUser={props.setUser}>
        {posts.map((post) => {
          <Link to={`/posts/${post._id}`}>
            <h3>{post.title}</h3>
            {/* add in logic for formatting code for pmvp */}
            <p>{post.content}</p>
          </Link>
        })}
      </Layout>
    </div>
  )
}
