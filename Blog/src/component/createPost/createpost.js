import "./style.css"
import { useState } from "react";
import axios from "../../axios";

function CreatePost(){
    const [title,setTitle]=useState('')
    const [file,setFile] = useState('');
    const[caption,setCaption]= useState('')

    const createNewPost = async(e)=>{
        e.preventDefault();
        // console.log(title,file,caption)
    
    var formData = new FormData();
    formData.set('title', title);
    formData.set('file',file)
    formData.set('description',caption)

   try{
    await axios.post('/post',formData);
   }catch(err){
    console.log(err)
   }
    }

    return(
        <div className="createPost">
        <form  className="form" onSubmit={createNewPost}>
            <label>Title</label>
            <br></br>
            <input type="text" className="titleInp" onChange = {(e)=>{setTitle(e.target.value)}}/>
            <br></br>
            <input type="file" onChange={(e)=>{setFile(e.target.files[0])}}/>
            <br></br>
            <label>Description</label>
            <br></br>
            <textarea className="descInput" onChange={(e)=>{setCaption(e.target.value)}} ></textarea>
            <button className="subBtn">Submit</button>
        </form>
            
        
    </div>


     
    )
}
export default CreatePost;
