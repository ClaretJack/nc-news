import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom"
function Header() {
   
    return (
        
        <header className="header">
            <img src={Logo} className="header-logo" />
            <nav>
                <Link to={`/articles`} >
                <p>All</p>
                </Link>
                
            </nav>
    
        </header>
    )
}


export default Header