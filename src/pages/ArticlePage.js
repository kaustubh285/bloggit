import React, { Fragment, useState, useEffect } from "react";
import articleContent from "./article-content";
import ArticleList from "../components/ArticleList";
import PageNotFound from "./PageNotFound";

export default function ArticlePage({ match }) {
  const name = match.params.name;

  const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/article/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  // useEffect(() => {
  //   console.log("updates!");
  //   setArticleInfo({ upvotes: Math.ceil(Math.random() * 10) });
  //* }, []);
  //? We pass an empty array to useEffect to tell it, if anyone of the variable present in the array changes, then exec the function again.
  //? But the issue is when a different article is loaded, it doesnt execute the useEffect again.
  // * That is why we passed [name] in the array. So whenever the name AKA the Url changes, it executes again, i.e for every article

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
        <div>
          <p className='text-right'>
            This post has {articleInfo.upvotes} upvotes{" "}
            <i style={{ fontSize: 25 }} className='fa'>
              {" "}
              &#xf087;
            </i>
          </p>
        </div>
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
