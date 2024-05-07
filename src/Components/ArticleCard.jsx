function ArticleCard({date, author, votes, title, article_img_url, topic}) {
    return (
        <li>
            <h2>{title}</h2>
            <img src={article_img_url} />
            <p>{date.toLocaleDateString("en-GB")}</p>
            <p>Author: {author} | Topic: {topic}</p>
            <p>{votes}</p>
        </li>
    )
}

export default ArticleCard