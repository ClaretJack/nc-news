import { useState, useEffect } from 'react'
import { fetchAllArticles } from '../api'
import ArticleCard from './ArticleCard'
import { Link, useParams } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import LoadingIcon from '../assets/loading-icon.png'

function Articles() {
    const [allArticles, setAllArticles] = useState([])
    const [errorState, setErrorState] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
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
            
        }).catch((err) => {
            setErrorState(err)
        })
        setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        
    }, [slug])

    if (errorState) {
        return (
            <div>
                <h2>No articles by that topic, Please select a topic in the nav bar above to see more amazing articles</h2> 
                <ErrorPage message={errorState.message} />
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className='loadingScreen'>
                <img src={LoadingIcon} alt="loading screen" className='loading-icon'/>
                <p>Please wait whilst we get your articles</p>
            </div>
        )
    }

    // console.log(allArticles.length)
    // if (allArticles.length === 0) {
    //     return(
    //         <div><p>.........</p></div>
    //     )
    // }


    return (
        <>
            <h2 className='topic-slug'>{slug}</h2>
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