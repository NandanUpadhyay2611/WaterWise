import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateThread = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Get the JWT token from localStorage
      const token = localStorage.getItem('token');
      
      // Create a config object to add token in the request header
      const config = {
        headers: {
          'x-auth-token': token,
        },
      };

      // Send POST request to create the thread
      const res = await axios.post('http://localhost:5000/api/threads', { title, content }, config);
      
      // Navigate to the thread list or specific thread after creation
      navigate('/threads');
    } catch (err) {
      console.error('Error creating thread:', err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Thread</h2>
      
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      
      <div>
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      
      <button type="submit">Create Thread</button>
    </form>
  );
};

export default CreateThread;
