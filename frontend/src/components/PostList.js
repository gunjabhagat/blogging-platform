import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h2><Link to={`/posts/${post._id}`}>{post.title}</Link></h2>
            <p>{post.content.substring(0, 100)}...</p>
            <Link to={`/edit/${post._id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
