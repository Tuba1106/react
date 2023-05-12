import "./style.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "../../axios";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export function Header() {
  const { token } = useContext(UserContext);
  console.log(token);
  const Logout = () => {
    axios.post("/user/logout");
  };
  return (
    <div className="links">
      {token.id ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/CreatePost">Create new post</Link>
          <Link to="/Mypost">My posts</Link>
          <a href="/" onClick={Logout}>
            Logout
          </a>
        </>
      ) : (
        <>
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/Login">Login</Link>
        </>
      )}
    </div>
  );
}
export default Header;
