import Logo from "../assets/Logo.png"
import { Link, useNavigate } from "react-router-dom"

function Header() {
   const navigate = useNavigate()
    function handleHome() {
        navigate('/')
    }

    return (
        
        <header className="header">
            <img src={Logo} onClick={handleHome} className="header-logo" />
            <nav>
                <Link to={`/articles`} >
                <p>All</p>
                </Link>
                
            </nav>
    
        </header>
    )
}


export default Header