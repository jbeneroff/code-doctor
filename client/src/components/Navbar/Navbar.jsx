import './Navbar.css'
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
    <div className="Nav">
      <div className="header">
        <Link to="/" className="logo" ><h1>Code Doctor</h1></Link>
        <div className="header-right">
          {props.user ? (
            <>
              <Link to="/posts">All Posts</Link>
              <Link to={`/user/${props.user.id}`}>User Profile</Link>
              <Link to="/new-post">Create New Post</Link>
              <Link to="/about">About Us</Link>
              <button className="btn" onClick={handleSignOut}>Sign Out</button>
            </>
          ) : (
            <>
              <Link to="/posts">All Posts</Link>
              <Link to="/about">About Us</Link>
              <Link to="/sign-in">Sign In</Link>
              <Link to="/sign-up">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
