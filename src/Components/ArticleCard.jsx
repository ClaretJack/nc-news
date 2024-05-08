function ArticleCard({date, author, votes, title, article_img_url, topic}) {
    return (
        <div className="articleCard">
            <img src={article_img_url} className="articleCard-img"/>
            <h2 className="articleCard-title">{title}</h2>
            <p className="articleCard-date">{date.toLocaleDateString("en-GB")}</p>
            <p className="articleCard-author">Author: {author}|Topic: {topic}</p>
            <p className="articleCard-votes">{votes}</p>
        </div>
    )
}

export default ArticleCard