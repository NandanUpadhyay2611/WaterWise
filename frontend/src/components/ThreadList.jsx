import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ThreadList = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const fetchThreads = async () => {
      const res = await axios.get('http://localhost:5000/api/threads');
      setThreads(res.data);
    };
    fetchThreads();
  }, []);

  return (
    <div>
      <h1>Threads</h1>
      {threads.map(thread => (
        <div key={thread._id}>
          <h2>{thread.title}</h2>
          <p>{thread.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ThreadList;