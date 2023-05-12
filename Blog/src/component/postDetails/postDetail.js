import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "../../axios";
import "./style.css"
import {Link} from "react-router-dom"


export function PostDetails(){
    const params = useParams()
    const [post ,setPost] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get(`/post/${params.id}`);
            const data = response.data.data;
            setPost(data)            
        }
        fetchData()
    })
    const handleDelete = async()=>{
        const res = await axios.delete(`/post/${params.id}`)
        res.data && window.location.replace("/")
    }
    
   return(
    <div className="postDet">
        <h1>{post.title}</h1>
        <img 
            src= {`http://localhost:3001/upload/${post.photo}`}
            alt=""
            className="zurag"
        />
        <p>{post.description}</p>
        <button onClick={handleDelete}>delete</button>
        <Link className="edit" to={`edit`}>
                <p>edit</p>
        </Link>
    </div>
   ) 
}
