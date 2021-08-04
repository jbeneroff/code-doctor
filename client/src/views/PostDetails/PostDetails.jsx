import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'
import { getPost } from '../../services/posts'
// import { getComments } from '../../services/comments'

export default function PostDetails(props) {
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const postId = useParams()

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPost(postId.id)
      setPost(data)
    }
    fetchPost()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const fetchComments = async () => {
      // const data = await getComments(userId)
      // setComments(data)
      // console.log(props.user)
    }
    fetchComments()
  }, [])

  const displayEditLink = (post) => {
    if (post.userId === props.user?.id)
      return <Link to={`/update-post/${post._id}`}>Edit</Link>
  }

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <h2>{post.title}</h2>
      {/*  */}
      {displayEditLink(post)}
      {/* {props.user === post.userId ? (
        <Link>
          <button onClick={displayEditLink(post)}>Edit Post</button>
        </Link>
      ) : (null)} */}
      {/* show username associated with post? */}
      {/* <p>{post.user.username}</p> */}
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
