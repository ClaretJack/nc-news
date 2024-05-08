import { useState, useEffect } from 'react'
import { fetchArticleComments } from '../api'
import { useParams } from 'react-router-dom'
import Comment from './Comment'


function ArticleComments() {
    const [comments, setComments] = useState([])
    const {article_id} = useParams()
    useEffect(() => {
        fetchArticleComments(article_id).then((comments) => {
            setComments(comments)
        })
    }), []
    
    return (
        
        <div>
            {comments.map((comment) => {
                const date = new Date(comment.created_at)
                    return(
                        <Comment
                            date={date.toLocaleDateString('en-GB')}
                            body={comment.body}
                            author={comment.author}
                            comment_id={comment.comment_id}
                            key={comment.comment_id}
                        />
                    )
            })}
        </div>
    )
}

export default ArticleComments