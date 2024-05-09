import { useState, useEffect } from 'react'
import { fetchArticleComments, fetchArticleByID } from '../api'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Comment from './Comment'
import PostComment from './PostComment'


function ArticleComments() {
    const [comments, setComments] = useState([])
    const [title, setTitle] = useState('')
    const [isPostActive, setIsPostActive] = useState(false)
    const {article_id} = useParams()
    useEffect(() => {
        fetchArticleComments(article_id).then((comments) => {
            setComments(comments)
        })
    }, [])
    
    useEffect(() => {
        fetchArticleByID(article_id).then(({ article }) => {
            setTitle(article.title)
        })
    }, [])
    
    function handlePost() {
        setIsPostActive((prev) => {
            return !prev;
          });
    }
    
    return (
        <div>

            <h2><Link to={`/articles/${article_id}`}>
                {title}
            </Link></h2> 
            {!isPostActive && (<button onClick={handlePost}>Post Comment</button>)}
            {isPostActive && (<PostComment setComments={setComments} setIsPostActive={setIsPostActive} />)}
            <h3>Comments:</h3>
                <ul>
                {comments.map((comment) => {
                   console.log(comment)
                        const date = new Date(comment.created_at)
                        return (
                                <li key={comment.comment_id} >
                                    <Comment
                                        date={date.toLocaleDateString('en-GB')}
                                        body={comment.body}
                                        author={comment.author}
                                        comment_id={comment.comment_id}
                                    />
                                </li>
                            )
                    })}
                </ul>
        </div>
    )
}

export default ArticleComments