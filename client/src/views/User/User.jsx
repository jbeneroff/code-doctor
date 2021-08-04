import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from "../../components/Layout/Layout"
import { getUserPosts } from '../../services/posts'

export default function User(props) {
  const [userPosts, setUserPosts] = useState([])

  useEffect(() => {
    const fetchUserPosts = async () => {
      let data = await getUserPosts(props.user.id)
      console.log(data)
      setUserPosts(data)
    }
    fetchUserPosts()
  }, [])


  return (
    <Layout user={props.user} setUser={props.setUser}>
      {/* <h2>{props.user.username}</h2> */}
      {/* <h3>{`${props.user.username}'s Posts`}</h3> */}
      {userPosts.map((post) => {
        return (
          <>
          <Link to={`/posts/${post._id}`}>
            <h3>{post.title}</h3>
            {/* add in logic for formatting code for pmvp */}
            <p>{post.content}</p>
            </Link>
          </>
        )
      })}
      {/* <h3>{`${props.user.username}'s Comments`}</h3> */}
    </Layout>
  )
}
