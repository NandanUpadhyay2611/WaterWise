
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Thread = () => {
  const { id } = useParams();
  const [thread, setThread] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchThread = async () => {
      const res = await axios.get(`http://localhost:5000/api/threads/${id}`);
      setThread(res.data);
      setComments(res.data.comments);
    };
    fetchThread();
  }, [id]);

  const addComment = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const res = await axios.post(
      `http://localhost:5000/api/threads/${id}/comments`, 
      { content: newComment }, 
      { headers: { 'x-auth-token': token } }
    );
    setComments(res.data.comments);
    setNewComment('');
  };

  return (
    <div>
      <h1>{thread.title}</h1>
      <p>{thread.content}</p>
      <h3>Comments</h3>
      {comments.map(comment => (
        <p key={comment._id}>{comment.content}</p>
      ))}
      <form onSubmit={addComment}>
        <input 
          value={newComment} 
          onChange={(e) => setNewComment(e.target.value)} 
          placeholder="Add a comment" 
        />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
};

export default Thread;
