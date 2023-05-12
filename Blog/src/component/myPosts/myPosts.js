import { useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { useContext } from "react";
import axios from "../../axios";
import Post from "../post/post";
import "./style.css"
function Mypost() {
    const [myPosts , setMyposts]= useState(null);
    const {token} = useContext(UserContext)
useEffect(()=>{
    async function fetchData(){
        const res = await axios.get("/post")
        const data = res.data.data;
        const myData = data.filter((el)=>{
            return el.createUserId === token.id
        })
        setMyposts(myData)
        return data
    }
    fetchData()
})
    return (    
    <div className="myPosts">
        {/* <div>{token.id}</div> */}
        {myPosts &&  myPosts.map(post=>(
            <Post {...post}/>
        ))}
    </div>   
    );
}

export default Mypost;