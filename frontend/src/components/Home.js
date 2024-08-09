import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Blogging Platform</h1>
      <nav>
        <Link to="/posts">View Posts</Link>
        <Link to="/create">Create New Post</Link>
      </nav>
    </div>
  );
}

export default Home;
