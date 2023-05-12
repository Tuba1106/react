// import "./style.css"
import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";
import axios from "../../axios";

function Edit() {
    const params = useParams()
    const [title,setTitle]=useState('')
    const [file,setFile] = useState('');
    const [description,setCaption]= useState('')
    useEffect(()=>{
        async function fetchData(){
            const res = await axios.get(`/post/${params.id}`)
            const data = res.data.data;
            console.log(data)

            setTitle(data.title)
            setFile(data.file)
            setCaption(data.description)
            }
        fetchData()
        
        },)

    

    const editPost = async(e)=>{
        e.preventDefault();
        try{
            await axios.put(`/post/${params.id}`,{
                file,
                title,
                description
            });
        }catch(err){
            console.log(err)
        }
    }
    return ( 
        <div className="createPost">
        <div  className="form" >
            <label>New Title</label>
            <br></br>
            <input type="text" value={title} className="titleInp" onChange = {(e)=>{setTitle(e.target.value)}}/>
            <br></br>
            <input type="file"  onChange={(e)=>{setFile(e.target.files[0])}}/> 
            <br></br>
            <label>New description</label>
            <br></br>
            <textarea className="descInput" value={description} onChange={(e)=>{setCaption(e.target.value)}} ></textarea>
            <button className="subBtn" onClick={editPost}>Edit</button>
        </div>
            
        
    </div>
    );
}

export default Edit;