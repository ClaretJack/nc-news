import { useState, useEffect } from 'react'
import { fetchArticleByID, patchArticleVotes } from '../api'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ErrorPage from './ErrorPage'





function ArticlePage() {
    const [article, setArticle] = useState([])
    const [voteChange, setVoteChange] = useState(0)
    const [articleExist, setArticleExist] = useState(null)
    const { article_id } = useParams()
    
    

    useEffect(() => {
        fetchArticleByID(article_id).then(({ article }) => {
            setArticle(article) 
        }).catch((err) => {
            setArticleExist(err)
        })
    }, [])

    

    const handleVotes = (vote) => {
        patchArticleVotes(article_id, vote)
            .then(() => { 
                setVoteChange((currVoteChange) => currVoteChange + vote)
        }).catch(() => {
            alert('Error, Vote not counted')
        })
    }
    
    if (articleExist) {
        return <ErrorPage message={articleExist.message} />
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
                <button disabled={voteChange === 1} onClick={() => handleVotes(1)} className='articlePage-voteUp'>/\</button>
                <div className='articlePageVoteCount'>{article.votes + voteChange}</div>
                <button disabled={voteChange === -1} onClick={() => handleVotes(-1)} className='articlePage-voteDown'>\/</button>
                
            </div>
           
            
        </div>
    )
}

export default ArticlePage