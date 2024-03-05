import React, { useState } from 'react';
// import { createPost } from '../services/postService'; // Uncomment when service is available

const PostCreate = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Replace with a real API call
    // await createPost({ title, content });
    console.log('Post created:', { title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
