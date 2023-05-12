import "./style.css"
import { useState } from "react";
import axios from "../../axios"

export default function Register() {
  const [name,setName]= useState(null);
    const [email,setEmail]= useState(null);
    const [password,setPassword]= useState(null);
    const [error,setError] =useState(false)
    const typeChangeName = (e) =>{
        setName(e.target.value)
    }
    const typeChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const typeChangePassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleClick = async (e)=>{
      e.preventDefault();
      setError(false)
      try{
        const res = await axios.post("/user/register",{
          userName:name,
          email:email,
          password:password
        });
        res.data && window.location.replace("/login")
        if(error==="false"){
          console.log('asfasf')
        }
      }catch(err){
        setError(true)
      }
      // .then((result)=>{
      //   console.log(result.data.userName)
      // })
      // .catch((err)=>{
      //   // setError(err.response.data.error.message);
      //   console.log(err)
       
      // })
    }




  return (
    <div className="register">
        <div className="registerTitle">Register</div>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" onChange={typeChangeName} className="registerInput" placeholder="Enter your username..." />
        <label>Email</label>
        <input type="text" onChange={typeChangeEmail} className="registerInput" placeholder="Enter your email..." />
        <label>Password</label>
        <input type="password" onChange={typeChangePassword} className="registerInput" placeholder="Enter your password..." />
        <button onClick={handleClick} className="registerButton">Register</button>
      </form>
      {error &&<span style={{color:"red", marginTop:"1rem"}}> Something went wrong</span>}
    </div>
  )
}
