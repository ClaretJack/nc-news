import { deleteArticleComment } from '../api'
import { useContext, useState } from 'react'
import { UserContext } from '../Contexts/contexts'


function Comment({ date, author, body, comment }) {
    const [isDeleted, setIsDeleted] = useState(false)
    const { user } = useContext(UserContext);

    function handleDelete() {
        setIsDeleted(true)
        deleteArticleComment(comment.comment_id)
        alert('Comment Deleted Succesfully')
      }
    return (<>
        {!isDeleted &&
            <div>
                <p>{body}</p>
                <p>From: {author}</p>
                <p>{date}</p>
                {user === comment.author && (<button onClick={() => handleDelete()}>Delete</button>)}
            </div>
        }
        </>
    )
}

export default Comment