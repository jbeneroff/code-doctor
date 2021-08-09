import './SignIn.css'
import { useState } from 'react'
import Layout from "../../components/Layout/Layout"
import { signIn } from "../../services/users.js"
import { useHistory, Link } from "react-router-dom";
import Particles from 'react-particles-js'

export default function SignIn(props) {
  const [input, setInput] = useState({ email: "", password: "" });
  const { setUser } = props;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signIn(input);
    console.log(user);
    setUser(user);
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
    <Layout user={props.user} setUser={props.setUser}>
      <div className="bg">
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
      <div className="authform">
        <h1>Login</h1>
      
        <form onSubmit={handleSubmit}>

        <div className="text-area">
        <span></span>
        <label>Email</label>
            <input
          className="email"
          id="email"
          type="email"
          value={input.email}
          onChange={handleInput}
            required={true}
        />
         </div>
          <div className="text-area">
            <span></span>
        <label>  Password</label>
            <input
            className="password"
            id="password"
            type="password"
            value={input.password}
            onChange={handleInput}
            required={true}
            />
          </div>  
            
        <Link to="/user/:id">
          <button className="login">Login</button>
          </Link>

          <Link to="/sign-up">
          <div className="Sign-up">
            <button className="Not">Don't Have an Account Yet?</button>
          </div>
          </Link>
           
        </form>
       
      </div>
      </div>
      
    </Layout>
  );
}
