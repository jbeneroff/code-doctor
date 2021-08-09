import React from 'react'
import { Link } from "react-router-dom"
import "./Home.css"

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
        <div className="image-area">
        <h1 className="slogan">A Secure Platform for Web Developers to Post Code and Get Help from Others in the Community</h1>
            {/* <img className="codeDoctor" src="https://images.theconversation.com/files/59470/original/bmc3zndq-1411073854.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=900&h=500&fit=crop" alt="doctors"/> */}
        </div>
      </div>
      </div>
      
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
      <div className="CTA">
        Join a community of like-minded developers who have a unifying passion for for functional and D.R.Y. code.
        <br/>
           <Link to="/posts">
         <button className="b1">See Community Posts</button>
           </Link>
           <h2>Do You Want to Start Sharing Your Code?</h2>
        <h4>Create an Account & Get Started!</h4>
        <div className="BTN">
           <Link to="/sign-up">
            <button className="b2">Sign Up</button>
       </Link>
       <p>OR</p>
       <Link to="/sign-in">
            <button className="b3">Sign In</button>
          </Link>
          </div>
       </div>
      </div>
  )
}
