import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getPost } from '../../services/posts'
// import { getComments } from '../../services/comments'

export default function PostDetails(props) {
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const { userId } = props.user._id

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPost(userId)
      setPost(data)
    }
    fetchPost()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const fetchComments = async () => {
      // const data = await getComments(userId)
      // setComments(data)
    }
    fetchComments()
  }, [])

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <h2>{post.title}</h2>
      {props.user._id === post.userId ? (
        <Link>
          <button>Edit Post</button>
        </Link>
      ) : (null)}
      <p>{post.user.username}</p>
      <p>{post.content}</p>
      <div>
        {comments.map((comment) => {
          return (
            <div>
              <h4>Show comment username</h4>
              <p>{comment.content}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
