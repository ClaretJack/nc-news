import { deleteArticleComment } from '../api'
import { useContext, useState } from 'react'
import { UserContext } from '../Contexts/contexts'


function Comment({ date, author, body, comment }) {
    const [isDeleted, setIsDeleted] = useState(false)
    const { user } = useContext(UserContext);

    // function handleDelete() {
    //     setIsDeleted(true)
    //     deleteArticleComment(comment.comment_id)
    //     alert('Comment Deleted Succesfully')
    //   }

    const deleteComment = async () => {
        await deleteArticleComment(comment.comment_id)
        setIsDeleted(true)
    }

    function handleDelete() {
        setIsDeleted(true);
        deleteComment();
    }
    return (<>
        {!isDeleted &&
            <div>
                <p>{body}</p>
                <p>From: {author}</p>
                <p>{date}</p>
                {user === comment.author && (<button onClick={() => handleDelete()}>🗑️</button>)}
            </div>
        }
        </>
    )
}

export default Comment