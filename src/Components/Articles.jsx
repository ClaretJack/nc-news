import { useState, useEffect } from 'react'
import { fetchAllArticles } from '../api'
import ArticleCard from './ArticleCard'
import { Link, useParams } from 'react-router-dom'

function Articles() {
    const [allArticles, setAllArticles] = useState([])
    const { slug } = useParams()

    useEffect(() => {
        fetchAllArticles(
            {
                params: {
                    topic: slug
                }
            }
        ).then((article) => {
            setAllArticles(article) 
            
        })
    }, [slug])



    return (
        <>
            <h2 className='topic-slug'>{slug}</h2>
            {allArticles.length === 0 && (<><h1>/\</h1><h2>No articles by that topic, Please select a topic in the nav bar above to see more amazing articles</h2> </>)}
             <ul className='articleCard-container'>
                {allArticles.map((article) => {
                    const date = new Date(article.created_at)
                    return (
                        <Link to={`/article/${article.article_id}`} key={article.article_id} className='articleCardLinks'>
                            <ArticleCard
                                date={date}
                                article_id={article.article_id}
                                author={article.author}
                                votes={article.votes}
                                title={article.title}
                                article_img_url={article.article_img_url}
                                topic={article.topic}
                            />
                        </Link>
                )
            }
                
             
         )}
            </ul>
            </>
    )
}

export default Articles