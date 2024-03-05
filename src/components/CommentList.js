import React from 'react';
// import { fetchCommentsByPostId } from '../services/commentService'; // Uncomment when service is available

const CommentList = ({ postId }) => {
  // For now, we'll use static data
  const comments = [
    { id: 1, content: 'Great post!', postId: 1 },
    { id: 2, content: 'Really enjoyed this.', postId: 1 }
  ].filter(comment => comment.postId === postId);

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>{comment.content}</div>
      ))}
    </div>
  );
};

export default CommentList;

Him