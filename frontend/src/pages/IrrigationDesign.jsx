import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ArticleD.css';

function IrrigationDesign({ articles }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Automatic slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Progress bar effect
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 100);
    }, 30); // Update progress every 30ms

    return () => clearInterval(progressInterval);
  }, []);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1
    );
    setProgress(0); // Reset progress when changing slides
  };

  // Check if articles exist
  if (!articles || articles.length === 0) {
    return <div>No articles available</div>;
  }

  return (
    <>
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {articles.map((article, index) => (
            <div className="slide" key={index}>
              <div className="article-tile">
                <div className="imageDiv">
                  <img src={article.urlToImage || "https://www.sih.gov.in/img/problem-statement-bg.jpg"} alt={article.title} />
                </div>
                <div className="article-content">
                  <h3>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                  </h3>
                  <p>{article.description || (article.content && article.content.slice(0, 100) + '...')}</p>
                  <p>Author: {article.author || 'Unknown'}</p>
                  <p>Source: {article.source.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="next-button" onClick={nextSlide}>
          Next
        </button>
        <div className="progress-indicator">
          <svg viewBox="0 0 100 100">
            <circle
              className="progress-circle"
              cx="50"
              cy="50"
              r="48"
              strokeDasharray="301.59"
              strokeDashoffset={301.59 - (301.59 * progress) / 100}
            />
          </svg>
        </div>
      </div>

      {/* News Grid Section */}
      <div className="news-grid-container">
        <h2>Latest News</h2>
        <div className="news-grid">
          {articles.map((article, index) => (
            <div className="news-item" key={index}>
              <div className="image-container">
                <img
                  src={article.urlToImage || '/default-image.jpg'}
                  alt={article.title}
                  className="news-image"
                />
              </div>
              <h4 className="news-title">
                <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
              </h4>
              <p className="news-description">
                {article.description || (article.content && article.content.slice(0, 100) + '...')}
              </p>
              <p className="news-source">
                Source: {article.source.name}
              </p>
              <p className="news-author">
                Author: {article.author || 'Unknown'}
              </p>
              <p className="news-date">
                Published: {new Date(article.publishedAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default IrrigationDesign;