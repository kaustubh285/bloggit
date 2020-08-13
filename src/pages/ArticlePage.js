import React, { Fragment } from "react";
import articleContent from "./article-content";
import ArticleList from "../components/ArticleList";
import PageNotFound from "./PageNotFound";

export default function ArticlePage({ match }) {
  const name = match.params.name;

  const article = articleContent.find((article) => article.name === name);

  const relatedArticles = articleContent.filter(
    (article) => article.name !== name
  );
  if (!article)
    return (
      <PageNotFound />
      // <div className='alert'>
      //   <h5 className='alert alert-danger'> Article does not exist! </h5>
      // </div>
    );
  return (
    <Fragment>
      <div className='mt-3 mb-3'>
        <h1 className='display-4'>
          <u>{article.title}</u>
        </h1>
      </div>
      <div className='w-75 mx-auto mt-5 '>
        {article.content.map((paragraph, key) => (
          <p key={key} style={{ fontWeight: "400", textAlign: "justify" }}>
            {paragraph}
          </p>
        ))}

        <div className='mt-5 text-left'>
          <hr></hr>
          <h4 className='mb-5 text-center'>More like this </h4>
          <ArticleList articles={relatedArticles} />
        </div>
      </div>
    </Fragment>
  );
}
