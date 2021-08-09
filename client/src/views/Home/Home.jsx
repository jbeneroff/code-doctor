import React from 'react'
import { Link } from "react-router-dom"
import "./Home.css"
import doctor from '../../../public/doctor.jpg'



export default function Home() {
  return (
    
 
      <div className="section">
      <h1>Welcome to Code Doctor!</h1>
      <h3>A Secure Platform for Web Developers to Post Code and Get Help from Others in the Community! </h3>
          <Link to="/posts">
        <button className="b1">See Community Posts</button>
          </Link>
          <h2>Do You Want to Start Sharing Your Code?</h2>
          <h4>Create an Account & Get Started!</h4>
          <Link to="/sign-up">
           <button className="b2">Sign Up</button>
      </Link>
      <p>OR</p>
      <Link to="/sign-in">
           <button className="b3">Sign In</button>
          </Link>
      </div>
     
    // <div className="theStory">
    //   <div className="Homebg">
    //     <div className="image-area">
    //       <img className="codeDoctor" src={doctor}/>
    //     </div>

    //   </div>
    // </div>
    
       
     

  )
}
