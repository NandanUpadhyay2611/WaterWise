import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import ArticleD from './ArticleDesign';
// import ArticleSlider from './ArticleDesign';
import IrrigationDesign from './IrrigationDesign';

function IrrigationArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const API_KEY="d087ec18cb414d68bfb45f051852a24a"
        const query="Irrigation techniques";
        const res = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
        console.log(res.data.articles);
        
        setArticles(res.data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h2>Peer-Reviewed Articles</h2>
    

{articles.length > 0 ? (
        <IrrigationDesign articles={articles} />
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
}

export default IrrigationArticles;