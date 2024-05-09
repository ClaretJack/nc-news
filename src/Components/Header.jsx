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
    })
    
    function handleHome() {
        navigate('/')
    }

    return (
        
        <header className="header">
            <img src={Logo} onClick={handleHome} className="header-logo" />
            <nav>
                <Link to={`/articles`} >
                <p>ALL</p>
                </Link>
                {topics.map((topic) => {
                    
                    return (
                        <Link to={`/topics/${topic.slug}/articles`} key={topic.slug}>
                            <p>{topic.slug.toUpperCase()}.</p>
                        </Link>
                    )
                })}
            </nav>
    
        </header>
    )
}


export default Header