import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getPost, deletePost } from '../../services/posts'
import { getAllComments, createComment} from '../../services/comments'
import { getUser } from '../../services/users'

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
      // console.log(data)
      setUser(data)
    }
    fetchUser()
    // eslint-disable-next-line
  }, [post])

  useEffect(() => {
    const fetchCommentUser = async () => {
      const data = await getUser(comments)
      console.log(data)
      // setUser(data)
    }
    fetchCommentUser()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const fetchComments = async () => {
      const data = await getAllComments(postId.id)
      // console.log(data.comments)
      setComments(data.comments)
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
    const deletedPost = await deletePost(postId.id)
    history.push(`/user/${user._id}`);
  }

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <h2>{post.title}</h2>
      {displayEditLink(post)}
      {displayDelete(post)}
      <p>{user?.username}</p>
      <p>{post.content}</p>
      <div>
        {comments.map((comment, key) => {
          return (
            <div key={comment._id}>
              <h4>Show comment username</h4>
              <p>{comment.content}</p>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
