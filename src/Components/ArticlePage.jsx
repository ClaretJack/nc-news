import { useState, useEffect } from 'react'
import { fetchArticleByID, patchArticleVotes } from '../api'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ErrorPage from './ErrorPage'





function ArticlePage() {
    const [article, setArticle] = useState({})
    const [voteChange, setVoteChange] = useState(0)
    const [errorState, setErrorState] = useState(null)
    const { article_id } = useParams()
    
    

    useEffect(() => {
        fetchArticleByID(article_id).then(({ article }) => {
            setArticle(article) 
        }).catch((err) => {
            setErrorState(err)
        })
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

    if (Object.keys(article).length === 0) {
        return (
            <div><p>.........</p></div>
        )
    }



    return (
        <div className='article-container'> 
            <h1 className='articlePage-title'>{article.title}</h1>
            <img src={article.article_img_url} className='articlePage-img'/>
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