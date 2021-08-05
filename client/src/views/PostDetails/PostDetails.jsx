import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getPost, deletePost } from '../../services/posts'
import { deleteComment } from '../../services/comments'
import { getUser } from '../../services/users'
import NewComment from '../../components/NewComment/NewComment'
import SyntaxHighLighter from 'react-syntax-highlighter'
import { vs } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import './PostDetails.css'

export default function PostDetails(props) {
  const [post, setPost] = useState({})
  const [user, setUser] = useState({})
  const [comments, setComments] = useState([])
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPost(id)
      setPost(data)
      console.log(data.comments)
      setComments(data.comments)
    }
    fetchPost()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (post.userId) {
      const fetchUser = async () => {
        const data = await getUser(post.userId)
        setUser(data)
      }
      fetchUser()
    }
  }, [post])


  const displayEditLink = (post) => {
    if (post.userId === props.user?.id)
      return <Link to={`/update-post/${post._id}`}>Edit</Link>
  }

  const displayDelete = (post) => {
    if (post.userId === props.user?.id)
      return <button onClick={handleDelete}>Delete Post</button>
  }

  const handleDelete = async () => {
    await deletePost(id)
    history.push(`/user/${user._id}`);
  }

  const displayAddComment = () => {
    if (props.user)
      return <NewComment user={props.user} />
  }


  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div id='post'>
        <h2>{post.title}</h2>
        <p>{user?.username}</p>
        <SyntaxHighLighter id='post-content' language="javascript" style={vs}>
          {`${post.content}`}
        </SyntaxHighLighter>
        {displayEditLink(post)}
        {displayDelete(post)}
      </div>
      <div>
        {comments.map((comment, key) => {
          const displayDeleteComment = (comment) => {
            if (props.user?.id === comment.userId._id) {
              return <button onClick={handleDeleteComment}>Delete Comment</button>
            }
          }
          const handleDeleteComment = async () => {
            await deleteComment(id, comment._id)
            window.location.reload(false)
          }
          return (
            <div id='comment' key={comment._id}>
              <h4>{comment.userId.username}</h4>
              <SyntaxHighLighter id='comment-content' language="javascript" style={vs}>
                {`${comment.content}`}
              </SyntaxHighLighter>
              <p>{`Posted at ${comment.createdAt.slice(11, 16)} on ${comment.createdAt.slice(5, 10)}-${comment.createdAt.slice(0, 4)}`}</p>
              {displayDeleteComment(comment)}
            </div>
          )
        })}
        {displayAddComment(post)}
      </div>
    </Layout>
  )
}