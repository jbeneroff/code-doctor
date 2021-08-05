
import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from "../../services/users.js"

export default function Navbar(props) {

  const handleSignOut = () => {
    signOut()
    props.setUser(null)
  }

  return (
      <div className="header">
      
        <div>
      <Link to="/" >
      <h1 className="Logo">Code Doctor</h1>
      </Link>
      </div>
      <div>
      <Link to="/posts">All Posts</Link>
      <Link to="/about">About Us</Link>
    
      
      {props.user ? (
        <>
          {/* <div>{props.user?.username}</div> */}
          <Link to={`/user/${props.user.id}`}>User Profile</Link>
          <Link to="/new-post">Create New Post</Link>
          <button className="btn signout" onClick={handleSignOut}>Sign Out</button>
          {/* It displays well - but the user name should be placed in a different component such as the view of the user's home page -> api/user/:id */}
        </>
      ) : (
        <>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
        </>
      )}
      </div>
      </div>
  )
}
