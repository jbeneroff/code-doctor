import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { signOut } from "../../services/users.js"


export default function Navbar(props) {
  const history = useHistory();

  const handleSignOut = () => {
    signOut()
    props.setUser(null)
    history.push('/')
  }

  return (
    <div>
      <Link to="/" >
        <h1>Code Doctor</h1>
      </Link>
      <Link to="/posts">All Posts</Link>
      <Link to="/about">About Us</Link>
      {props.user ? (
        <>
          <div>{props.user?.username}</div>
          <Link to={`/user/${props.user.id}`}>User Profile</Link>
          <Link to="/new-post">Create New Post</Link>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <div>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      )}
    </div>
  )
}
