import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Link } from "react-router-dom"
import "./Home.css"



export default function Home(props) {
  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div className="wrapper">

        <div className="home-1">

          <h1>Welcome to Code Doctor!</h1>
          <h3>A Secure Platform for Web Developers to Post Code and Get Help from Others in the Community! </h3>
          <Link to="/posts">
        <button>See Community Posts</button>
          </Link>
       
        </div>

        <div className="home-2">
          <img src="https://api.freelogodesign.org/files/60d3d03b49064128906fda813b305475/thumb/logo_200x200.png?v=637637760310000000" className="logo" />
          
         
      
          <div className="color-box">
            
            
          </div>
       
        </div>
       
        
      </div>
   </Layout>
  )
}
