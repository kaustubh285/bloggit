import React from "react";

export default function Upvote({ articleInfo, setArticleInfo }) {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/article/${articleInfo.name}/upvote`, {
      method: "post",
    });
    const body = await result.json();
    setArticleInfo(body);
  };

  return (
    <button
      onClick={upvoteArticle}
      className='btn btn-info text-capitalize btn-small'>
      {articleInfo.upvotes}
      <i style={{ fontSize: 20 }} className='pl-2 fa fa-thumbs-up'>
        {" "}
      </i>
    </button>
  );
}
