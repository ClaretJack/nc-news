function ArticleCard({date, author, votes, title, article_img_url, topic, comment_count}) {
    return (
        <div className="articleCard">
            <img src={article_img_url} className="articleCard-img"/>
            <h2 className="articleCard-title">{title}</h2>
            <p className="articleCard-date">{date.toLocaleDateString("en-GB")}</p>
            <p className="articleCard-author">Author: {author}<br></br>Topic: {topic}</p>
            <p className="articleCard-votes">{votes}</p>
            <p className="articleCard-comment_count">Comments({comment_count})</p>
        </div>
    )
}

export default ArticleCard