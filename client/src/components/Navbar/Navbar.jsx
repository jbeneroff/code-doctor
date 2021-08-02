import React from 'react'
import { Link } from 'react-router-dom'
import { signOut } from "../../services/users.js"

export default function Navbar(props) {

  const handleSignOut = () => {
    signOut()
    props.setUser(null)
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
          <Link>Cre</Link>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <div>
          <Link to="/sign-in">Sign In</Link>
        </div>
      )}
    </div>
  )
}
