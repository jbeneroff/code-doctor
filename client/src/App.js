import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AllPosts from './views/AllPosts/AllPosts';
import Home from './views/Home/Home';
import NewPost from './views/NewPost/NewPost';
import PostDetails from './views/PostDetails/PostDetails';
import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';
import User from './views/User/User';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const verifyUser = async () => {
      setUser(await verify())
    }
    verifyUser()
  })

  return (
    <div className="App">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/sign-up">
        <SignUp />
      </Route>
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route path="/new-post">
        <NewPost />
      </Route>
      <Route path="/user/:id">
        <User />
      </Route>
      <Route path="/posts">
        <AllPosts />
      </Route>
      <Route path="/posts/:id">
        <PostDetails />
      </Route>
    </div>
  );
}

export default App;
