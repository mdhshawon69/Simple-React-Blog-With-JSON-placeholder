import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetail.css';
import Comments from '../Comments/Comments';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setComments(data));
  });
  return (
    <>
      <div className='detail-container'>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className='comments-container'>
        <h1>Comments</h1>
        {comments.map((comment) => (
          <Comments comment={comment}></Comments>
        ))}
      </div>
    </>
  );
};

export default PostDetail;
