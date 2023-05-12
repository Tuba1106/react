import "./style.css"
import { useState } from "react";
import axios from "../../axios"
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import jwt_decode from "jwt-decode";

export default function Login() {
    const {setToken} = useContext(UserContext)
    
    const [email,setEmail]= useState(null);
    const [password,setPassword]= useState(null);
    const [redirect,setRedirect] = useState(false);
    
    const typeChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const typeChangePassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleClick = async(e)=>{
      e.preventDefault()
      try{
        
        const res = await axios.post("/user/login",{
        email,
        password
      });
        const user = jwt_decode( res.data.token);
        setToken(user)
        setRedirect(true)
      }catch(err){
        console.log(err)
        // setError(true)
      }
      
    }
    if(redirect){
      return <Navigate to = {'/'}/>
    }
  return (
    <div className="login">
        <div className="loginTitle">Login</div>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" onChange={typeChangeEmail} className="loginInput" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" onChange={typeChangePassword} className="loginInput" placeholder="Enter your password..." />
        <button onClick={handleClick} className="loginButton">Login</button>
      </form>
      {/* {error==true && <span>Something went wrong!</span>} */}
    </div>
  )
}





