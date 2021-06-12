import { useState, useEffect } from 'react';
import Post from '../Post/Post';
import './Homepage.css';

const Homepage = () => {
  const [posts, setPossts] = useState([]);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPossts(data));
  });
  return (
    <div className='post-container'>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Homepage;
