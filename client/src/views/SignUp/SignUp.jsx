import {useState} from 'react'
import Layout from "../../components/Layout/Layout"
import { signUp } from "../../services/users.js"
import { useHistory } from "react-router-dom";
import "./SignUp.css"

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
