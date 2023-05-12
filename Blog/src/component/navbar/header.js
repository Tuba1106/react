import "./style.css"
import { Header } from "../header/header";
import { Logo } from "../logo";

export function Navbar(){
    return(
        <div className="navbar" >
            <Logo/>
            <Header/>
        </div>
        
    )
}