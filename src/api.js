import axios from "axios";

export const fetchAllArticles = () => {
  return axios
    .get(`https://backend-project-nc-news-k5t8.onrender.com/api/articles`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const fetchArticleByID = (article_id) => {
  return axios
    .get(
      `https://backend-project-nc-news-k5t8.onrender.com/api/articles/${article_id}`
    )
    .then(({ data }) => {
      return data;
    });
};

export const fetchArticleComments = (article_id) => {
  return axios
    .get(
      `https://backend-project-nc-news-k5t8.onrender.com/api/articles/${article_id}/comments`
    )
    .then(({ data: { comments } }) => {
      return comments;
    });
};
