import React from "react";
import AddCommentForm from "./AddCommentForm";

export default function CommentList({ articleInfo, setArticleInfo }) {
  return (
    <React.Fragment>
      <h4 className='pt-5'>Comments</h4>
      <hr></hr>
      <AddCommentForm name={articleInfo.name} setArticleInfo={setArticleInfo} />

      {articleInfo.comments.map((comment, key) => (
        <div key={key}>
          <p></p>
          <p className='font-weight-bold'>
            <img
              src='https://img.icons8.com/ios-filled/50/000000/user-male-circle.png'
              width='3%'
              alt='User'
            />{" "}
            {comment.username}:{" "}
          </p>
          <span>{comment.text}</span>
        </div>
      ))}
    </React.Fragment>
  );
}
