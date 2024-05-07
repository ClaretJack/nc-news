import { useState, useEffect } from 'react'
import { fetchAllArticles } from '../api'
import ArticleCard from './ArticleCard'
import { Link } from 'react-router-dom'

function Articles() {
    const [allArticles, setAllArticles] = useState([])

    useEffect(() => {
        fetchAllArticles().then(({ article }) => {
            setAllArticles(article) 
            
        })
    }, [])

    

    return (
        <ul>
            {allArticles.map((article) => {
                const date = new Date(article.created_at)
                return (
                    <ArticleCard
                        date={date}
                        article_id={article.article_id}
                        author={article.author}
                        votes={article.votes}
                        title={article.title}
                        article_img_url={article.article_img_url}
                        topics={article.topics}
                        key={article.article_id}
                    />
                )
            }
                
             
         )}
        </ul>
    )
}

export default Articles