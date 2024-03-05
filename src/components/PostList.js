import React, { useState, useEffect } from 'react';
// import { fetchPosts } from '../services/postService'; // Uncomment when service is available

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      // Replace with a real API call
      // const data = await fetchPosts();
      const mockData = [
        { id: 1, title: 'First Post', content: 'This is the first post' },
        { id: 2, title: 'Second Post', content: 'This is the second post' },
      ];
      setPosts(mockData);
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {/* Here you would render CommentList for each post */}
        </div>
      ))}
    </div>
  );
};

export default PostList;


