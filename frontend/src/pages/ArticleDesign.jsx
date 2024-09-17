import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ArticleD.css';

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
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {articles.map((article, index) => (
          <div className="slide" key={index}>
            <div className="article-tile">
              <div className='imageDiv'><img src="https://www.sih.gov.in/img/problem-statement-bg.jpg" alt="imgerror" /></div>
              <h3>
                <Link to={`/articles/${article._id}`}>{article.title}</Link>
              </h3>
              <p>{article.content}</p>
              <p>Author: {article.author}</p>
              <p>Verified by: {article.verifiedBy}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="next-button" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
}

export default ArticleSlider;
