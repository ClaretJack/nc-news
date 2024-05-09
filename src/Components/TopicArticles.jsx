import { useEffect, useState } from 'react'
import { fetchAllArticles } from '../api'
import { useParams } from 'react-router-dom'
import ArticleCard from './ArticleCard'
import { Link } from 'react-router-dom'

function TopicArticles() {
    const { slug } = useParams()
    const [topicArticles, setTopicArticles] = useState([])


    useEffect(() => {
        fetchAllArticles({
            params: {
                topic: slug
            }
        }).then((res) => {
            setTopicArticles(res)
        })
    })

    return (<>
        <h2 className='topic-slug'>{slug}</h2>

        <ul className='articleCard-container'>
            {topicArticles.map((article) => {
                const date = new Date(article.created_at)
                return (
                    <Link to={`/articles/${article.article_id}`} key={article.article_id} className='articleCardLinks'>
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

export default TopicArticles