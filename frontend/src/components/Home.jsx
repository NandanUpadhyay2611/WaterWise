import React, { useState } from 'react';
import { Element } from 'react-scroll';
import Quiz from './Quiz'; // Import the Quiz component
import './Home.css';

const Home = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleReturnFromQuiz = () => {
    setShowQuiz(false);
  };

  if (showQuiz) {
    return <Quiz onReturn={handleReturnFromQuiz} />;
  }

  return (
    <div className="homepage">
      {/* Hero Section */}
      <Element name="hero">
        <section className="hero">
          <div className="hero-content">
            <h1>Explore Water-Saving Techniques</h1>
            <p>Join the global movement to combat water scarcity by learning and sharing water-efficient methods.</p>
            <button className="cta-button">Learn More</button>
          </div>
        </section>
      </Element>

      {/* Featured Content */}
      <Element name="featured-content">
        <section className="featured-content">
          <h2>Featured Techniques</h2>
          <div className="featured-grid">
            <div className="card">
              <h3>Irrigation Efficiency</h3>
              <p>Learn advanced methods for improving irrigation practices, saving up to 30% of water.</p>
            </div>
            <div className="card">
              <h3>Water Reuse</h3>
              <p>Discover how to effectively reuse water in agriculture and urban settings.</p>
            </div>
            <div className="card">
              <h3>Domestic Conservation</h3>
              <p>Explore everyday techniques to reduce water use in households.</p>
            </div>
          </div>
        </section>
      </Element>

      {/* Interactive Tools Section */}
      <Element name="interactive-tools">
        <section className="interactive-tools">
          <h2>AI-Driven Tools</h2>
          <p>Use our interactive tools to estimate your water usage and learn how to optimize it.</p>
          <button className="cta-button">Try Tools</button>
        </section>
      </Element>

      {/* Community Section */}
      <Element name="community">
        <section className="community">
          <h2>Join the Community</h2>
          <p>Connect with over 10,000 global users, share knowledge, and contribute to sustainable water management.</p>
          <button className="cta-button">Explore Forums</button>
        </section>
      </Element>

      {/* Multimedia Section */}
      <Element name="multimedia">
        <section className="multimedia">
          <h2>Multimedia Learning</h2>
          <div className="media-grid">
            <div className="media-item">
              <h3>Webinars</h3>
              <p>Join live discussions and expert talks on water conservation.</p>
            </div>
            <div className="media-item">
              <h3>Podcasts</h3>
              <p>Listen to our expert podcasts focused on water efficiency techniques.</p>
            </div>
            <div className="media-item">
              <h3>Videos</h3>
              <p>Watch educational videos to learn more about water-saving practices.</p>
            </div>
          </div>
        </section>
      </Element>

      {/* Gamification Section */}
      <Element name="gamification">
        <section className="gamification">
          <h2>Take a Challenge!</h2>
          <p>Test your knowledge with quizzes, challenges, and earn rewards for learning about water-saving techniques.</p>
          <button className="cta-button" onClick={handleStartQuiz}>Start Quiz</button>
        </section>
      </Element>
    </div>
  );
};

export default Home;