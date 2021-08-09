import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout from "../../components/Layout/Layout"
import { getUserPosts } from '../../services/posts'
import { verify } from '../../services/users'

export default function User(props) {
  const [userPosts, setUserPosts] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchUserPosts = async () => {
      let data = await getUserPosts(id)
      setUserPosts(data)
    }
    fetchUserPosts()
  }, [id])

  useEffect(() => {
    const fetchUser = async () => {
      const data = await verify()
      props.setUser(data)
    }
    fetchUser()
    // eslint-disable-next-line
  }, [id])

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <h2>{props.user?.username}</h2>
      <h3>{`${props.user?.username}'s Posts:`}</h3>
      {userPosts.map((post, key) => {
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
  )
}
