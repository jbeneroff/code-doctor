import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { verify } from './services/users';
import AllPosts from './views/AllPosts/AllPosts';
import Home from './views/Home/Home';
import NewPost from './views/NewPost/NewPost';
import PostDetails from './views/PostDetails/PostDetails';
import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';
import User from './views/User/User';
import AboutUs from "./views/About/AboutUs"
import UpdatePost from './views/UpdatePost/UpdatePost';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const verifyUser = async () => {
      setUser(await verify())
    }
    verifyUser()
  }, [])

  return (
    <div className="App">
      <Route exact path="/">
        <Home user={user} setUser={setUser} />
      </Route>
      <Route path="/sign-up">
        <SignUp user={user} setUser={setUser} />
      </Route>
      <Route path="/sign-in">
        <SignIn user={user} setUser={setUser} />
      </Route>
      <Route path="/new-post">
        <NewPost user={user} setUser={setUser} />
      </Route>
      <Route path="/user/:id">
        <User user={user} setUser={setUser} />
      </Route>
      <Route exact path="/posts">
        <AllPosts user={user} setUser={setUser} />
      </Route>
      <Route path="/posts/:id">
        <PostDetails user={user} setUser={setUser} />
      </Route>
      <Route path="/about">
        <AboutUs user={user} setUser={setUser} />
      </Route>
      <Route path={`/update-post/:id`}>
        <UpdatePost user={user} setUser={setUser} />
      </Route>
    </div>
  );
}

export default App;
