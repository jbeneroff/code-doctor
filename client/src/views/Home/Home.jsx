import React from 'react'
import { Link } from "react-router-dom"
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
export default function Home() {
  return (
    
      // <div className="section">
      // <h1>Welcome to Code Doctor!</h1>
      // <h3>A Secure Platform for Web Developers to Post Code and Get Help from Others in the Community! </h3>
      //     <Link to="/posts">
      //   <button className="b1">See Community Posts</button>
      //     </Link>
      //     <h2>Do You Want to Start Sharing Your Code?</h2>
      //     <h4>Create an Account & Get Started!</h4>
      //     <Link to="/sign-up">
      //      <button className="b2">Sign Up</button>
      // </Link>
      // <p>OR</p>
      // <Link to="/sign-in">
      //      <button className="b3">Sign In</button>
      //     </Link>
      // </div>
   
  <div className="body">
    <div className="theStory">
        <div className="Homebg">
        <Navbar/>
          <div className="image-area">
            <div className="slogan-area">
      
        <p className="para">Join a community of like-minded developers who have a unifying passion for for functional and D.R.Y. code.</p>
              <p className="para1">See what's up in the code doctor community</p>
              <Link to="/posts">
         <button className="b1">See Community Posts</button>
           </Link>
           <h2>Do You Want to Start Sharing Your Code?</h2>
        <h4>Create an Account & Get Started!</h4>
        <div className="BTN">
           <Link to="/sign-up">
            <button className="b2">Sign Up</button>
       </Link>
       <p className="para">OR</p>
       <Link to="/sign-in">
            <button className="b3">Sign In</button>
                </Link>
          
              <br />
              <h1 className="slogan">We turn 404s into 200s again!</h1>
              </div>    
            </div>
      </div>
      </div>
      </div>
    </div>
  )
      {/* <div className="content">
        <h2 className="description">A Secure Platform for Web Developers to Post Code and Get Help from Others in the Community!</h2>
      
      </div>
      <div className="content1">
        <h2 className="description2">
        If you can't get your code fixed within 30 days, the founders themselves will solve the issue directly 
        </h2>
     
      </div>

      <div className="img1">
        <img className="coders" src="https://cdn.seeklearning.com.au/media/images/career-guide/module/programmer.jpg" alt="programmers coding"/>
    </div>
      <div className="img2">
      <img className="owners" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpftHNILHez9wYrHFa3qFE1mvc-20sWDYBfwqHipSUTfkuMlhdl3EzNPQIsxO4QSyd1Y&usqp=CAU" alt="owners?"/>
      </div> */}
        {/* <div className="CTA">
           <Link to="/posts">
         <button className="b1">See Community Posts</button>
           </Link>
           <h2>Do You Want to Start Sharing Your Code?</h2>
        <h4>Create an Account & Get Started!</h4>
        <div className="BTN">
           <Link to="/sign-up">
            <button className="b2">Sign Up</button>
       </Link>
       <p className="para">OR</p>
       <Link to="/sign-in">
            <button className="b3">Sign In</button>
          </Link>
          </div>
       </div>
      </div> */}
  
}
