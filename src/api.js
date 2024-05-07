export function fetchAllArticles() {
  return fetch(
    `https://backend-project-nc-news-k5t8.onrender.com/api/articles`
  ).then((res) => {
    return res.json();
  });
}
