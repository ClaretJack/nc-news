import { useState, useEffect } from 'react'
import { fetchArticleByID } from '../api'
import { useParams } from 'react-router-dom'



function ArticlePage() {
    const [article, setArticle] = useState([])
    const {article_id} = useParams()

    useEffect(() => {
        fetchArticleByID(article_id).then(({ article }) => {
            setArticle(article) 
            
        })
    }, [])


    return (
        <div className='article-container'> 
            <h1>{article.title}</h1>
            <img src={article.article_img_url} />
            <p>{article.author}</p>
            <div className='article-description'>
                <p>{article.body}</p>
            </div>
            <button>See Comments</button>
            <div className='article-votes'>
                <button>Vote up</button>
                <p>{article.votes}</p>
                <button>Vote Down</button>
            </div>
           
            
        </div>
    )
}

export default ArticlePage