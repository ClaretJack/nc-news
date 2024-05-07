function Comment({date, author, body, comment_id }) {
    return (
        <div>
            <p>{body}</p>
            <p>From: {author}</p>
            <p>{date}</p>
        </div>
    )
}

export default Comment