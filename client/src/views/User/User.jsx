import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout from "../../components/Layout/Layout"
import { getUserPosts } from '../../services/posts'

export default function User(props) {
  const [userPosts, setUserPosts] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchUserPosts = async () => {
      let data = await getUserPosts(id)
      // console.log(data)
      setUserPosts(data)
    }
    fetchUserPosts()
  }, [id])


  return (
    <Layout user={props.user} setUser={props.setUser}>
      {/* <h2>{props.user.username}</h2> */}
      {/* <h3>{`${props.user.username}'s Posts`}</h3> */}
      {userPosts.map((post, key) => {
        return (
          <div key={post._id}>
            <Link to={`/posts/${post._id}`}>
              <h3>{post.title}</h3>
              {/* add in logic for formatting code for pmvp */}
              {/* <p>{post.content}</p> */}
            </Link>
          </div>
        )
      })}
      {/* <h3>{`${props.user.username}'s Comments`}</h3> */}
    </Layout>
  )
}
