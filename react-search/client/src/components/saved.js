import React from "react";

const SavedArticles = props => (
  <div>
    {props.savedArticles.map(article => (
      <div>
        <div className="card">
          <div className="card-header">
            <a href={article.url}>
              {article.title} ({article.date.substring(0, 4)})
            </a>

            <button
              type="button"
              className="btn-sm btn-warning float-right"
              articleid={article._id}
              articlename={article.title}
              articledate={article.date}
              articleurl={article.url}
              onClick={props.deleteArticle}
            >
              Delete
            </button>
          </div>
        </div>
        <br />
      </div>
    ))}
  </div>
);

export default SavedArticles;