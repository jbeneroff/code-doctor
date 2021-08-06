import './SignIn.css'
import { useState } from 'react'
import Layout from "../../components/Layout/Layout"
import { signIn } from "../../services/users.js"
import { useHistory, Link } from "react-router-dom";



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
      
      <div className="wrapper">
        <h1>Login</h1>
      
        <form onSubmit={handleSubmit}>

        <div className="text-area">
        <span></span>
        <label>Email</label>
        <input
          id="email"
          type="email"
          value={input.email}
          onChange={handleInput}
            required={true}
        />
         </div>
          <div className="text-area">
            <span></span>
        <label>Password</label>
        <input
            id="password"
            type="password"
            value={input.password}
            onChange={handleInput}
            required={true}
            />
          </div>
          
          <div className="pass">Forgot Password?</div>
        
          <button>Login</button>

          <Link to="/sign-up">
          <div className="Sign-up">
            <button>Not a member?</button>
          </div>
          </Link>
           
        </form>
       
        </div>
    </Layout>
  );
}
