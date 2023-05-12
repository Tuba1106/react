import "./style.css"
import Post from "../post/post";
import axios from "../../axios";
import { useEffect, useState } from "react";

export function Posts(){
    const [posts,setPosts] =useState(null);
    useEffect(()=>{
        async function fetchData() {
                const response =await axios.get("/post")
                const data = response.data.data;
                setPosts(data);
              return data
          }
          fetchData();
        
    },[])
    return(
        <div className="posts">
            {posts &&  posts.map(post=>(
                <Post {...post}/>
            ))}
        </div>
    )
}