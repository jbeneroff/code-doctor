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
        <button className="b2">See Community Posts</button>
          </Link>
       
        </div>

        <div className="home-2">
          <h1>Not a Member Yet? Get Signed Up Below!</h1>
          <Link to="/sign-up">
           <button className="b1">Sign Up</button>
          </Link>
         
      
          <div className="color-box">
            
            
          </div>
       
        </div>
       
        
      </div>
   </Layout>
  )
}
