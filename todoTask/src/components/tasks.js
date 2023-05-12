import { useEffect, useState } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";


function Tasks({userId}) {
    // const params = useParams()
    // console.log(params)
   const [task,setTask] = useState('');
   const [tasks,setTasks ] = useState([])
   useEffect(()=>{
        const getData=async()=>{
            const response = await axios.get('/tasks');
            const data =response.data.data
            const usertasks = data.filter((el)=>{
                return el.createUserId === userId
            })
            setTasks([...usertasks])
        }   
        getData()
   },[]) 


    const addTask = async()=>{
        try{
            const response = await axios.post("/tasks",{
                task
            });
            const data =response.data.data
            console.log(response)
        setTasks([...tasks, data])

        }catch(err){
            console.log(err)
        }
    }
    // const DeleteBtn =async()=>{
    //     const res = await axios.delete(`/tasks/${params.id}`)
    // }
    return (  
        <div>
            <input type="text" onChange={(e)=>{setTask(e.target.value)}}/>
            <button onClick={addTask}>add</button>
            <div>
                {tasks.map(el=>(
                    <>
                        <Link to={`/tasks/${el._id}`}><p>{el.task}</p></Link>
                        {/* <Link to={`/tasks/${el._id}`}><button onClick={DeleteBtn}>delete</button></Link> */}
                    </>
                ))}
            </div>
        </div>
    );
}

export default Tasks
