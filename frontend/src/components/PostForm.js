import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function PostForm() {
  const [post, setPost] = useState({ title: '', content: '', author: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/posts/${id}`)
        .then(response => setPost(response.data))
        .catch(error => console.error('Error fetching post:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:5000/api/posts/${id}`, post)
        .then(() => navigate('/posts'))
        .catch(error => console.error('Error updating post:', error));
    } else {
      axios.post('http://localhost:5000/api/posts', post)
        .then(() => navigate('/posts'))
        .catch(error => console.error('Error creating post:', error));
    }
  };

  return (
    <div>
      <h1>{id ? 'Edit Post' : 'Create Post'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={post.title} onChange={handleChange} required />
        </label>
        <label>
          Content:
          <textarea name="content" value={post.content} onChange={handleChange} required></textarea>
        </label>
        <label>
          Author:
          <input type="text" name="author" value={post.author} onChange={handleChange} required />
        </label>
        <button type="submit">{id ? 'Update Post' : 'Create Post'}</button>
      </form>
    </div>
  );
}

export default PostForm;
