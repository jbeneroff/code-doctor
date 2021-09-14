import React from 'react'
import { Link } from "react-router-dom"
import "./Home.css"

import Navbar from '../../components/Navbar/Navbar'

export default function Home() {
  return (
    
    <div className="body">
      <div className="theStory">
        <div className="Homebg">
          <Navbar/>
          <div className="image-area">
            <div className="slogan-area">
              <p className="para">Join a community of like-minded developers who have a unifying passion for exceptional code.</p>
              <p className="para">See what's up in the Code Doctor community.</p>
              <Link to="/posts">
                <button className="b1">See Community Posts</button>
              </Link>
              {/* <h2 className="question">Want to Start Sharing Your Code?</h2> */}
              <h4 className="engage">Get Started</h4>
              <div className="BTN">
                <Link to="/sign-up">
                  <button className="b1">Sign Up</button>
                </Link>
                <p className="para">OR</p>
                <Link to="/sign-in">
                  <button className="b1">Sign In</button>
                </Link>
                <br />
                {/* <h1 className="slogan">We turn 404s into 200s again!</h1> */}
              </div>    
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
