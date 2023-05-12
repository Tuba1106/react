import CreatePost from "./component/createPost/createpost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./component/header/header";
import Login from "./component/login/login";
import Register from "./component/register/register";
import { Home } from "./component/home/home";
import { PostDetails } from "./component/postDetails/postDetail";
import { useState } from "react";
import { UserContext } from "./component/context/userContext";
import Mypost from "./component/myPosts/myPosts";
import Edit from "./component/edit/edit";

function App() {
  const [token, setToken] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ token, setToken }}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/CreatePost" element={<CreatePost />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/post/:id" element={<PostDetails />} />
            <Route exact path="/Mypost" element={<Mypost />} />
            <Route exact path="/post/:id/edit" element={<Edit />} />
            <Route exact path="/Mypost/post/:id" element={<PostDetails />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
