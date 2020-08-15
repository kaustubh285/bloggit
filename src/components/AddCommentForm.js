import React, { useState } from "react";

export default function AddCommentForm({ name, setArticleInfo }) {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const addComment = async (event) => {
    event.preventDefault();
    const result = await fetch(`/api/article/${name}/add-comment`, {
      method: "post",
      body: JSON.stringify({ username, text: comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setComment("");
  };
  return (
    <form>
      <div className='form-group'>
        <label htmlFor='username'>Username :</label>
        <input
          type='text'
          name='username'
          className='form-control'
          id='username'
          placeholder='Username'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='comment'>Comment :</label>
        <textarea
          className='form-control'
          name='comment'
          id='comment'
          placeholder='Enter your comment'
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </div>
      <div className='text-right'>
        <button className='btn btn-outline-info rounded' onClick={addComment}>
          Add Comment
        </button>
      </div>
    </form>
  );
}
