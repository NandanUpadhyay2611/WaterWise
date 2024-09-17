import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './HomeSlider.css'; // Import necessary CSS

function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hero content array with Link wrappers for navigation
  const heroContent = [
    <Link to="/articles" key="1">
      <Element name="hero">
        <section className="hero">
          <div className="hero-content">
            <h1>Explore Water-Saving Techniques</h1>
            <p>Join the global movement to combat water scarcity by learning and sharing water-efficient methods.</p>
            <button className="cta-button">Learn More</button>
          </div>
        </section>
      </Element>
    </Link>,

    <Link to="/innovative-water-solutions" key="2">
      <Element name="hero">
        <section className="hero">
          <div className="hero-content">
            <h1>Innovative Water Solutions</h1>
            <p>Discover innovative solutions to preserve and manage water resources efficiently.</p>
            <button className="cta-button">Get Started</button>
          </div>
        </section>
      </Element>
    </Link>,

    <Link to="/global-water-conservation" key="3">
      <Element name="hero">
        <section className="hero">
          <div className="hero-content">
            <h1>Global Water Conservation</h1>
            <p>Learn from global leaders in water conservation and adopt sustainable practices.</p>
            <button className="cta-button">Join the Movement</button>
          </div>
        </section>
      </Element>
    </Link>
  ];

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
      prevIndex === heroContent.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {heroContent.map((content, index) => (
          <div className="slide" key={index}>
            {content}
          </div>
        ))}
      </div>
      <button className="next-button" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
}

export default HomeSlider;
