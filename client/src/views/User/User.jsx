import React, { useEffect, useState } from 'react'
import Layout from "../../components/Layout/Layout"
import { getAllPosts } from '../../services/posts'

export default function User(props) {
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    const fetchUserPosts = async () => {
      let data = await getAllPosts()
      setUserPosts(data)
    }
    fetchUserPosts()
  }, [])

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <h2>{props.user.username}</h2>
      <h3>{`${props.user.username}'s Posts`}</h3>
      {userPosts.map((post) => {
        <Link to={`/posts/${post._id}`}>
          <h3>{post.title}</h3>
          {/* add in logic for formatting code for pmvp */}
          <p>{post.content}</p>
        </Link>
      })}
      <h3>{`${props.user.username}'s Comments`}</h3>
    </Layout>
  )
}
