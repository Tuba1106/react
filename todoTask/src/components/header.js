import { Link } from "react-router-dom";

function Header() {
    return (  
        <div>
            <Link to="/register">register</Link>
            <Link to="/Tasks">Tasks</Link>
            <Link to="/Login">Login</Link>

        </div>
    );
}

export default Header
