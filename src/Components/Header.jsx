import Logo from "../assets/Logo.png"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchTopics } from '../api'

function Header({}) {
    const [topics, setTopics] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchTopics().then(({ data: {topics} }) => {
            setTopics(topics)
        })
    },[])
    
    function handleHome() {
        navigate('')
    }

    return (
        
        <header className="header">
            <img src={Logo} onClick={handleHome} className="header-logo" />
            <nav className="nav-bar">
                <Link to={`/articles`} className="navLinks">
                <p className="navPara">ALL</p>
                </Link>
                {topics.map((topic) => {
                    
                    return (
                        <Link to={`/articles/${topic.slug}`} key={topic.slug} className="navLinks">
                            <p className="navPara">{topic.slug.toUpperCase()}</p>
                        </Link>
                    )
                })}
            </nav>
    
        </header>
    )
}


export default Header