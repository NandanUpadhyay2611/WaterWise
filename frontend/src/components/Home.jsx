import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import Quiz from './Quiz';
import HomeSlider from './HomeSlider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const Home = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const effects = ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'zoom-in', 'zoom-out', 'flip-left', 'flip-right', 'slide-up'];

  const getRandomEffect = () => {
    return effects[Math.floor(Math.random() * effects.length)];
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleReturnFromQuiz = () => {
    setShowQuiz(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  if (showQuiz) {
    return <Quiz onReturn={handleReturnFromQuiz} />;
  }

  return (
    <div className="homepage">
      {/* Hero Section */}
      <HomeSlider />

      {/* Featured Content */}
      <Element name="featured-content">
        <section className="featured-content" data-aos={getRandomEffect()}>
          <h2>Featured Techniques</h2>
          <div className="featured-grid">
            <div className="card" data-aos={getRandomEffect()}>
              <h3>Irrigation Efficiency</h3>
              <p>Learn advanced methods for improving irrigation practices, saving up to 30% of water.</p>
            </div>
            <div className="card" data-aos={getRandomEffect()}>
              <h3>Water Reuse</h3>
              <p>Discover how to effectively reuse water in agriculture and urban settings.</p>
            </div>
            <div className="card" data-aos={getRandomEffect()}>
              <h3>Domestic Conservation</h3>
              <p>Explore everyday techniques to reduce water use in households.</p>
            </div>
          </div>
        </section>
      </Element>

      {/* Interactive Tools Section */}
      <Element name="interactive-tools">
        <section className="interactive-tools" data-aos={getRandomEffect()}>
          <h2>AI-Driven Tools</h2>
          <p>Use our interactive tools to estimate your water usage and learn how to optimize it.</p>
          <button className="cta-button">Try Tools</button>
        </section>
      </Element>

      {/* Community Section */}
      <Element name="community">
        <section className="community" data-aos={getRandomEffect()}>
          <h2>Join the Community</h2>
          <p>Connect with over 10,000 global users, share knowledge, and contribute to sustainable water management.</p>
          <button className="cta-button">Explore Forums</button>
        </section>
      </Element>

      {/* Multimedia Section */}
      <Element name="multimedia">
        <section className="multimedia" data-aos={getRandomEffect()}>
          <h2>Multimedia Learning</h2>
          <div className="media-grid">
            <div className="media-item" data-aos={getRandomEffect()}>
              <h3>Webinars</h3>
              <p>Join live discussions and expert talks on water conservation.</p>
            </div>
            <div className="media-item" data-aos={getRandomEffect()}>
              <h3>Podcasts</h3>
              <p>Listen to our expert podcasts focused on water efficiency techniques.</p>
            </div>
            <div className="media-item" data-aos={getRandomEffect()}>
              <h3>Videos</h3>
              <p>Watch educational videos to learn more about water-saving practices.</p>
            </div>
          </div>
        </section>
      </Element>

      {/* Gamification Section */}
      <Element name="gamification">
        <section className="gamification" data-aos={getRandomEffect()}>
          <h2>Take a Challenge!</h2>
          <p>Test your knowledge with quizzes, challenges, and earn rewards for learning about water-saving techniques.</p>
          <button className="cta-button" onClick={handleStartQuiz}>Start Quiz</button>
        </section>
      </Element>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Learn more about our mission and the team behind this platform.</p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: contact@waterconserve.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/articles">Articles</a></li>
              <li><a href="/waterCalc">Water Calculator</a></li>
              <li><a href="/quiz">Quiz</a></li>
              <li><a href="/map">Map</a></li>
              <li><a href="/videos">Videos</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <p>Stay connected through our social media channels.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 WaterConserve. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
