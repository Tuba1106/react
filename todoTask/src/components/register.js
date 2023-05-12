import axios from "../axios";
import { useState } from "react";

function Register() {
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handle = async()=>{
        try{
            const data = await axios.post("/user",{
                userName,
                email,
                password
            })
            console.log(data)
        
        }catch(err){
            console.log(err)
        }
    }
       
    return ( 
        <div>
            <input type=" text" placeholder="username" onChange={(e)=>{setUserName(e.target.value)}}/>
            <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={handle}>register</button>
        </div>
     );
}

export default Register;