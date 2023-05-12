import "./style.css"
import {Link} from "react-router-dom"

function Post({_id,title,photo,description}){
    return(
        <div className="post">
            <Link className="postTitle" to={`post/${_id}`}>
                <h3>{title}</h3>
            </Link>
            <Link className="zuragPost" to={`post/${_id}`}>
                <img 
                    src= {`http://localhost:3001/upload/${photo}`}
                    alt=""
                />
            </Link>
            
            <p>{description}</p>
        </div>
    )
}
export default Post;
