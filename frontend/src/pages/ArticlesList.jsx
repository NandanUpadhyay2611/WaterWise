import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/articles');
        setArticles(res.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h2>Peer-Reviewed Articles</h2>
      {articles.map(article => (
        <div key={article._id}>
          <h3><Link to={`/articles/${article._id}`}>{article.title}</Link></h3>
          <h3>{article.content}</h3>
          <p>Author: {article.author}</p>
          <p>Verified by: {article.verifiedBy}</p>
        </div>
      ))}
    </div>
  );
}

export default ArticlesList;