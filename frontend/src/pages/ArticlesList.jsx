import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleD from './ArticleDesign';
import ArticleSlider from './ArticleDesign';

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
      {/* {articles.map(article => (
        <ArticleD
        _id={article._id}
        title={article.title}
        content={article.content}
        author={article.author}
        verifiedBy={article.verifiedBy}
        images={["/path/to/image1.jpg", "/path/to/image2.jpg", "/path/to/image3.jpg"]}
      />
      
      ))} */}

{articles.length > 0 ? (
        <ArticleSlider articles={articles} />
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
}

export default ArticlesList;