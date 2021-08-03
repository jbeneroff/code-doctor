import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { getPost } from '../../services/posts'

export default function PostDetails(props) {
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPost()
      setPost(data)
    }
    fetchPost()
  })

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <h2>{post.title}</h2>
      {props.user._id === post.userId ? (
        <Link>
          <button onClick={ }>Edit Post</button>
        </Link>
      ) : (null)}
      <p>{post.user.username}</p>
      <p>{post.content}</p>
      <div>
        {comments.map((comment) => {
          <div>
            <h4>Show comment username</h4>
            <p>{comment.content}</p>
          </div>
        })}
      </div>
    </Layout>
  )
}
