import axios from "axios";

const BASEURL ="https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "4fde698513084b0cbb48bfd80bd0eab8";

export default {
  search: function(query, yearStart, yearEnd) {
    return axios.get(
      BASEURL +
        APIKEY +
        "&q=" +
        query +
        "&begin_date" +
        yearStart +
        "0101&end_date=" +
        yearEnd +
        "1231"
    );
  },
  getArticles: function() {
    return axios.get("/api/articles");
  },
  getArticlesById: function(id) {
    return axios.get("/api/articles/" + id);
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};