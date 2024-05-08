export function fetchAllArticles() {
  return fetch(
    `https://backend-project-nc-news-k5t8.onrender.com/api/articles`
  ).then((res) => {
    return res.json();
  });
}

export function fetchArticleByID(article_id) {
  return fetch(
    `https://backend-project-nc-news-k5t8.onrender.com/api/articles/${article_id}`
  ).then((res) => {
    return res.json();
  });
}

export function fetchArticleComments(article_id) {
  return fetch(
    `https://backend-project-nc-news-k5t8.onrender.com/api/articles/${article_id}/comments`
  ).then((res) => {
    return res.json();
  });
}
