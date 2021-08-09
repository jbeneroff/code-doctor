import {useState} from 'react'
import Layout from "../../components/Layout/Layout"
import { signUp } from "../../services/users.js"
import { useHistory } from "react-router-dom";
import "./SignUp.css"
import Particles from 'react-particles-js';

export default function SignUp(props) {
  const [input, setInput] = useState({ username: "", email: "", password: "" });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signUp(input);
    console.log(user);
    props.setUser(user);
    history.push(`/user/${user.id}`);
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };
  return (
    <Layout>
      <div className="background">
      < Particles
        params={{
          "particles": {
            "number":
            {
              "value": 80,
              "density":
              {
                "enable": true,
                "value_area": 800
              }
            },
            "color":
            {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke":
                { "width": 0, "color": "#000000" },
              "polygon": { "nb_sides": 5 },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            }, "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
              }
            }, "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            }, "move": {
              "enable": true,
              "speed": 1,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          }, "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }, "onclick": {
                "enable": true,
                "mode": "push"
              }, "resize": true
            }, "modes": {
              "grab": {
                "distance": 400,
                "line_linked": { "opacity": 1 }
              }, "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 1
              },
              "repulse":
              {
                "distance": 200,
                "duration": 0.4
              }, "push":
                { "particles_nb": 4 },
              "remove": { "particles_nb": 2 }
            }
          }, "retina_detect": true
        }}
      />
        <div className="auth-form">
          <h1>Sign Up</h1>

          <form onSubmit={handleSubmit}>
            <div className="text-field">
            <span></span>
        <label>Username</label>
        
        <input
          id="username"
          type="text"
          value={input.username}
          onChange={handleInput}
        />
            </div>
            <div className="text-field">
            <span></span>
        <label>Email</label>
        
        <input
          id="email"
          type="email"
          value={input.email}
          onChange={handleInput}
              />
            </div>
            <div className="text-field">
              <span></span>
       
        <label>Password</label>
        
        <input
          id="password"
          type="password"
          value={input.password}
          onChange={handleInput}
              />
            </div>
            
            <button className="signup-button">Create Account</button>

            <button className="already-button">Already a Member?</button>
            
          </form>

        </div>
        
      </div>
      
    </Layout>
  );
}
