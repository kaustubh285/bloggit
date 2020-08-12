import React from "react";
import { Link } from "react-router-dom";

export default function ArticleList({ articles }) {
  return (
    <React.Fragment>
      {articles.map((oneArticle, key) => {
        return (
          <li key={key}>
            <div
              className='mt-3 mb-2'
              style={{ borderBottom: "2px solid black" }}>
              <Link
                className='article-content-link'
                style={{ textDecoration: "none" }}
                to={`/article/${oneArticle.name}`}>
                <h5 className='article-content-title'>{oneArticle.title}</h5>
                <p>{oneArticle.content[0].substring(0, 150)}...</p>
              </Link>
            </div>
          </li>
        );
      })}
    </React.Fragment>
  );
}
