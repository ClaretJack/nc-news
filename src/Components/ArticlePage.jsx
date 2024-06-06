import { useState, useEffect } from 'react'
import { fetchArticleByID, patchArticleVotes, fetchUserByUsername } from '../api'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import LoadingIcon from '../assets/loading-icon.png'

function ArticlePage() {
    const [article, setArticle] = useState({})
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [voteChange, setVoteChange] = useState(0)
    const [errorState, setErrorState] = useState(null)
    const { article_id } = useParams()
    
   async function fetchArticlesInfo() {
        fetchArticleByID(article_id).then(({ article }) => {
            setArticle(article) 
        }).catch((err) => {
            setErrorState(err)
        })
        setTimeout(() => {
            setIsLoading(false);
          }, 1000);
    }



    
    useEffect(() => {
        fetchArticlesInfo()
    }, [])
        

    

    const handleVoteChange = (vote) => {
        patchArticleVotes(article_id, vote)
            .then((res) => { 
                if (res.status !== 200) {
                    throw error
                }
                setArticle((prevState) => ({ ...prevState, votes: res.data.article.votes }))
                setVoteChange(voteChange + vote)
        }).catch(() => {
            alert('Error, Vote not counted')
        })
    }



    if (errorState) {
        return <ErrorPage message={errorState.message} />
    }

    if (isLoading) {
        return (
            <div className='loadingScreen'>
                <img src={LoadingIcon} alt="loading screen" className='loading-icon'/>
                <p>Please wait whilst we get your article</p>
            </div>
        )
    }



    return (
        <div className='article-container'> 
            <h1 className='articlePage-title'>{article.title}</h1>
            <img src={article.article_img_url} className='articlePage-img' />
            {/* <img src={user.avatar_url} /> */}
            <p className='articlePage-author'>{article.author}</p>
            <div className='articlePage-description'>
                <p>{article.body}</p>
            </div>
            <Link to={`/article/${article_id}/comments`} className='articlePage-comments-button'>
                <button >See Comments</button>
            </Link>
            <div className='article-votes'>
                <button disabled={voteChange === 1} onClick={() => handleVoteChange(1)} className='articlePage-voteUp'>/\</button>
                <div className='articlePageVoteCount'>{article.votes}</div>
                <button disabled={voteChange === -1} onClick={() => handleVoteChange(-1)} className='articlePage-voteDown'>\/</button>
                
            </div>
           
            
        </div>
    )
}

export default ArticlePage