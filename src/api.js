import axios from "axios";

export const fetchAllArticles = (params) => {
  return axios
    .get(
      `https://backend-project-nc-news-k5t8.onrender.com/api/articles`,
      params
    )
    .then(({ data: { article } }) => {
      return article;
    });
};

export const fetchTopics = () => {
  return axios.get(
    `https://backend-project-nc-news-k5t8.onrender.com/api/topics`
  );
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

export const patchArticleVotes = (article_id, votes) => {
  return axios
    .patch(
      `https://backend-project-nc-news-k5t8.onrender.com/api/articles/${article_id}`,
      { inc_votes: votes }
    )
    .catch((err) => {
      return Promise.reject({ status: err.code, msg: err.message });
    });
};

export const postArticleComment = (article_id, username, body) => {
  return axios.post(
    `https://backend-project-nc-news-k5t8.onrender.com/api/articles/${article_id}/comments`,
    { username: username, body: body }
  );
};

export const deleteArticleComment = (comment_id) => {
  return axios.delete(
    `https://backend-project-nc-news-k5t8.onrender.com/api/comments/${comment_id}`
  );
};
