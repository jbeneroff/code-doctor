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

  // useEffect(() => {
  //   setFilteredPosts(posts)
  // }, [posts])

  // useEffect(() => {
  //   if (input) {
  //     setFilteredPosts(posts.filter((post) => {
  //       if (post.title.includes(input)) {
  //         return post
  //       }
  //       return null
  //     }))
  //   } else {
  //     setFilteredPosts(posts)
  //   }
  // }, [posts, input])

    // const handleChange = async (e) => {
  //   setInput(e.target.value)
  // }

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
        <form onSubmit={handleChange}>
          <input value={input} type="text" placeholder="Search" onChange={(e) => setInput(e.target.value)} />
        </form>
        {matches.map((post, key) => {
          return (
            <Link key={post._id} to={`/posts/${post._id}`}>
              <h3>{post.title}</h3>
              <p>{post.createdAt}</p>
              {/* add in logic for formatting code for pmvp */}
              {/* <p>{post.content}</p> */}
            </Link>
          )
        })}
      </Layout>
    </div>
  )
}
