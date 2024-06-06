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
    const [sortBy, setSortBy] = useState('created_at')
    const [orderList, setOrderList] = useState('DESC')
    const { slug } = useParams()

    useEffect(() => {
        fetchAllArticles(
            { 
                params: {
                    topic: slug,
                    sort_by: sortBy,
                    order: orderList
                }
            }
        ).then((article) => {
            setAllArticles(article) 
            
        }).catch((err) => {
            setErrorState(err)
        })
        setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        
    }, [slug])
   
    function handleSortBy(e) {
        e.preventDefault()
        const query = e.target.value.split('-')
        setSortBy(query[0])
        setOrderList(query[1])
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetchAllArticles(
            { 
                params: {
                    topic: slug,
                    sort_by: sortBy,
                    order: orderList
                }
            }
        ).then((article) => {
            setAllArticles(article) 
            
        }).catch((err) => {
            setErrorState(err)
        })
        setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        
    }

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

    return (
        <div className="articleList">
            <h2 className='topic-slug'>{slug}</h2>
            <form onSubmit={handleSubmit} className='sortbyForm'>
                <label htmlFor="sortBy">
                    Sort By
                </label>
                    <select name='sortBy' id='sortByOptions' onChange={handleSortBy} className='sortbyDrop'>
                        <option value='' hidden={true}>Choose here..</option>
                        <option value='created_at-DESC'>Date Newest</option>
                        <option value='created_at-ASC'>Date Oldest</option>
                        <option value='title-ASC'>Title A-Z</option>
                        <option value='title-DESC'>Title Z-A</option>
                        <option value='author-ASC'>Author A-Z</option>
                        <option value='author-DESC'>Author Z-A</option>
                        <option value='comment_count-DESC'># of Comments High-Low</option>
                        <option value='comment_count-ASC'># of Comments Low-High</option>
                        <option value='votes-DESC'># of Votes High-Low</option>
                        <option value='votes-ASC'># of Votes Low-High</option>
                </select>
                    <button type='submit'>✔️</button>
                </form>
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
                                comment_count={article.comment_count}
                            />
                        </Link>
                )
            }
                
             
         )}
            </ul>
            </div>
    )
}

export default Articles