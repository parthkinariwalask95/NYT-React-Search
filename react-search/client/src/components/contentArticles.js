import React from "react";
import Articles from "./Articles";
import SavedArticles from "./saved";


const styles = {
  heading: {
    background: "#9a74db",
  }
}
const ArticleContainer = props => (
  <div className="container">
    <div style={styles.heading} className="jumbotron">
      <h1>Search Results</h1>
      <hr className="my-4" />
      <div className="row">
        <div className="col">
          <Articles articles={props.articles} saveArticle={props.saveArticle} />
        </div>
      </div>
    </div>
    <div style={styles.heading} className="jumbotron">
      <h1>Saved Articles</h1>
      <hr className="my-4" />
      <div className="row">
        <div className="col">
          <SavedArticles
            deleteArticle={props.deleteArticle}
            savedArticles={props.savedArticles}
          />
        </div>
      </div>
    </div>
  </div>
);

export default ArticleContainer;