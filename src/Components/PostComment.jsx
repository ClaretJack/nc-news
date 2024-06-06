import { useContext, useState } from "react"
import { UserContext } from "../Contexts/contexts"
import { postArticleComment } from "../api"
import { useParams } from "react-router-dom"

function PostComment({setComments,setIsPostActive}) {
    const [commentInput, setCommentInput] = useState("")
    const { user } = useContext(UserContext)
    const { article_id } = useParams();
    
    function handleChange(e) {
        setCommentInput(e.target.value)
    }

    function handleCancel(e) {
        e.preventDefault()
        setIsPostActive(false)
        setCommentInput("")
    }

    function handleSubmit(e) {
        e.preventDefault()
        setCommentInput("")
        postArticleComment(article_id, user, commentInput).then(({ data }) => {
        setComments((comments) => [data, ...comments])
        }).then(() => {
            location.reload()
            alert("Comment was successfully posted")
        })
        }
    
    return (
        <div>
            <h2>Write your comment below</h2>
            <form onSubmit={handleSubmit}>
                <textarea type="text"
                    placeholder="Please write your comment here..."
                    value={commentInput}
                    required={true}
                    onChange={handleChange}
                    className="post-comment-message"
                >
                    
                    </textarea>
                <button type="submit" className="comment-submit-button">✅</button>
                <button type="cancel" onClick={handleCancel} className="comment-cancel-button">❌</button>
            </form>
        </div>
    )
}

export default PostComment;