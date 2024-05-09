import { useState, useEffect } from 'react'
import { fetchArticleByID, patchArticleVotes } from '../api'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'



function ArticlePage() {
    const [article, setArticle] = useState([])
    const [voteChange, setVoteChange] = useState(0)
    const { article_id } = useParams()
    

    useEffect(() => {
        fetchArticleByID(article_id).then(({ article }) => {
            setArticle(article) 
        })
    }, [])

  

    const handleVotes = (vote) => {
        userVote += vote
        patchArticleVotes(article_id, vote)
            .then(() => { 
                setVoteChange((currVoteChange) => currVoteChange + vote)
        }).catch(() => {
            alert('Error, Vote not counted')
        })
    }
    
    
    


    return (
        <div className='article-container'> 
            <h1>{article.title}</h1>
            <img src={article.article_img_url} />
            <p>{article.author}</p>
            <div className='article-description'>
                <p>{article.body}</p>
            </div>
            <Link to={`/articles/${article_id}/comments`}>
                <button>See Comments</button>
            </Link>
            <div className='article-votes'>
                <button disabled={voteChange ===1 } onClick={() => handleVotes(1)}>Vote up</button>
                {article.votes + voteChange}
                <button disabled={voteChange === -1} onClick={() => handleVotes(-1)}>Vote Down</button>
                
            </div>
           
            
        </div>
    )
}

export default ArticlePage