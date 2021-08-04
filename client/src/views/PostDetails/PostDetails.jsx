import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

import { getPost, deletePost } from '../../services/posts'
import { getUser } from '../../services/users'



import { getComments } from '../../services/comments'


export default function PostDetails(props) {
  const [post, setPost] = useState({})
  const [user, setUser] = useState({})
  const [comments, setComments] = useState([])
  const postId = useParams()
  const history = useHistory()

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPost(postId.id)
      setPost(data)
    }
    fetchPost()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser(post.userId)
      console.log(data)
      setUser(data.data)
    }
    fetchUser()
    // eslint-disable-next-line
  }, [post])

  useEffect(() => {
    const fetchComments = async () => {
      // const data = await getComments()
      // setComments(data)
      // console.log(props.user)
    }
    fetchComments()
  }, [])

  const displayEditLink = (post) => {
    if (post.userId === props.user?.id)
      return <Link to={`/update-post/${post._id}`}>Edit</Link>
  }

  const displayDelete = (post) => {
    if (post.userId === props.user?.id)
      return <button onClick={handleDelete}>Delete Post</button>
  }

  const handleDelete = async () => {
    const deletedPost = await deletePost(postId)
    history.push(`/user/${user.id}`);
  }

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <h2>{post.title}</h2>
      {displayEditLink(post)}
      {displayDelete(post)}
      <p>{user.username}</p>
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
