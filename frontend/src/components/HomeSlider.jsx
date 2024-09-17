import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll'; // Assuming you're using react-scroll for smooth scrolling
import './HomeSlider.css'; // Import necessary CSS

function HomeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hero content array
  const heroContent = [
    <Element name="hero">
      <section className="hero">
        <div className="hero-content">
          <h1>Explore Water-Saving Techniques</h1>
          <p>Join the global movement to combat water scarcity by learning and sharing water-efficient methods.</p>
          <button className="cta-button">Learn More</button>
        </div>
      </section>
    </Element>,

    <Element name="hero">
      <section className="hero">
        <div className="hero-content">
          <h1>Innovative Water Solutions2455</h1>
          <p>Discover innovative solutions to preserve and manage water resources efficiently.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
    </Element>,

    <Element name="hero">
      <section className="hero">
        <div className="hero-content">
          <h1>Global Water Conservation22222</h1>
          <p>Learn from global leaders in water conservation and adopt sustainable practices.</p>
          <button className="cta-button">Join the Movement</button>
        </div>
      </section>
    </Element>
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
