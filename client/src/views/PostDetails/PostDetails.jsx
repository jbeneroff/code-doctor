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
      return (
        <Link id='edit' to={`/update-post/${post._id}`}>
          <button id='edit-post'>Edit</button>
        </Link>
      )
  }

  const displayDelete = (post) => {
    if (post.userId === props.user?.id)
      return <button id='delete-post' onClick={handleDelete}>Delete</button>
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
        <h2 id ='post-title' >{post.title}</h2>
        <p id='username' >{user?.username}</p>
        <hr />
        <div id='code'>
          <SyntaxHighLighter id='post-content' language="javascript" style={vs} wrapLongLines={true} customStyle={{ backgroundColor: 'rgb(238, 238, 238)'}}>
            {`${post.content}`}
          </SyntaxHighLighter>
        </div>
        <br />
        {displayEditLink(post)}
        {displayDelete(post)}
      </div>
      <hr />
      <h3 id='comments-header'>Comments</h3>
      <div>
        {comments.map((comment, key) => {
          const displayDeleteComment = (comment) => {
            if (props.user?.id === comment.userId._id) {
              return <button id='delete-comment' onClick={handleDeleteComment}>Delete</button>
            }
          }
          const handleDeleteComment = async () => {
            await deleteComment(id, comment._id)
            window.location.reload(false)
          }
          return (
            <div id='comment' key={comment._id}>
              <p id='commenter' >{comment.userId.username}</p>
              <SyntaxHighLighter id='comment-content'  language="javascript" style={vs} wrapLongLines={true} customStyle={{ backgroundColor: 'rgb(238, 238, 238)' }}>
                {`${comment.content}`}
              </SyntaxHighLighter>
              <p className='timestamp' >{`Posted at ${comment.createdAt.slice(11, 16)} on ${comment.createdAt.slice(5, 10)}-${comment.createdAt.slice(0, 4)}`}</p>
              {displayDeleteComment(comment)}
              <hr />
            </div>
          )
        })}
        {displayAddComment(post)}
      </div>
    </Layout>
  )
}