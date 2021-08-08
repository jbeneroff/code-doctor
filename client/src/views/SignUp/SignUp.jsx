import {useState} from 'react'
import Layout from "../../components/Layout/Layout"
import { signUp } from "../../services/users.js"
import { useHistory } from "react-router-dom";


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
      <div className="particles">
        
      SignUp
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
        <input
          id="username"
          type="text"
          value={input.username}
          onChange={handleInput}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          id="email"
          type="email"
          value={input.email}
          onChange={handleInput}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          id="password"
          type="password"
          value={input.password}
          onChange={handleInput}
        />
        <br />
        <button>Sign Up</button>
          </form>
    
        </div>
    </Layout>
  );
}
