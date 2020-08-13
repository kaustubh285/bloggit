import React, { Fragment } from "react";
import articleContent from "./article-content";
import ArticleList from "../components/ArticleList";

export default function ArticleListPage() {
  return (
    <Fragment>
      <h1 className='pt-2'>Articles</h1>
      <div className='text-left col pt-6'>
        <ol>
          <ArticleList articles={articleContent} />
        </ol>
      </div>
    </Fragment>
  );
}
