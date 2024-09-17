import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ArticleD.css'; // Import your CSS styles

function ArticleSlider({ articles }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* Slider Section */}
      <div className="slider-container">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {articles.map((article, index) => (
            <div className="slide" key={index}>
              {/* Wrap each slide with Link */}
              <Link to={`/articles/${article._id}`} className="slide-link">
                <div className="article-tile">
                  <h3>{article.title}</h3>
                  <p>{article.content}</p>
                  <p>Author: {article.author}</p>
                  <p>Verified by: {article.verifiedBy}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <button className="next-button" onClick={nextSlide}>
          Next
        </button>
      </div>

      {/* News Grid Section */}
      <div className="news-grid-container">
        <h2>Latest News</h2>
        <div className="news-grid">
          {articles.map((article, index) => (
            <div className="news-item" key={index}>
              <div className="image-container">
                <img
                  src={article.imageUrl || '/default-image.jpg'} // Placeholder or default image
                  alt={article.title}
                  className="news-image"
                />
              </div>
              <h4 className="news-title">
                <Link to={`/articles/${article._id}`}>{article.title}</Link>
              </h4>
              <p className="news-description">
                {article.content.slice(0, 100)}... {/* Shortened description */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ArticleSlider;
