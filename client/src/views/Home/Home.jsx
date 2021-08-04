import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Link } from "react-router-dom"
import "./Home.css"

export default function Home(props) {
  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div className="home">
        <h1>Code Doctor</h1>
        <Link to="/posts">
        <button>See Community Posts</button>
        </Link>
       
      </div>
   </Layout>
  )
}
