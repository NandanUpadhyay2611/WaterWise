import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // For styling
import "bootstrap/dist/css/bootstrap.min.css";
 import fireIcon from '../assets/fire.png';

const Navbar = () => {
  const [streak, setStreak] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  // Function to handle streak logic
  const handleStreak = () => {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentStreak = localStorage.getItem('streak') || 0;

    const currentTime = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    if (lastVisit) {
      const timeDifference = currentTime - parseInt(lastVisit);
      if (timeDifference > oneDay) {
        // Increment streak
        const newStreak = parseInt(currentStreak) + 1;
        setStreak(newStreak);
        localStorage.setItem('streak', newStreak);
        setShowNotification(true); // Show notification about the streak
      } else {
        setStreak(parseInt(currentStreak)); // Keep the current streak
      }
    } else {
      // First-time visit, set streak to 1
      localStorage.setItem('streak', 1);
      setStreak(1);
    }

    // Update the last visit time to the current time
    localStorage.setItem('lastVisit', currentTime);
  };

  useEffect(() => {
    handleStreak();
  }, []);

  // Auto-hide notification after 3 seconds
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          {/* Replace logo with streak counter */}
          <div className="streak-counter">
         

<img src={fireIcon} alt="Streak Icon" className="streak-icon" />

            <span>{streak} Day Streak</span>
          </div>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/articles">Articles</Link>
            <ul className="dropdown">
              <li><Link to="/articles/irrigation">Irrigation</Link></li>
              <li><Link to="/articles/domestic-use">Domestic Use</Link></li>
              <li><Link to="/articles/water-reuse">Water Reuse</Link></li>
            </ul>
          </li>
          <li><Link to="/tools">Interactive Tools</Link>
            <ul className="dropdown">
              <li><Link to="/community">Community Forums</Link></li>
              <li><Link to="/waterCal">Water Calculator</Link></li>
              <li><Link to="/quiz">Quizes and games</Link></li>
              <li><Link to="/map">Stats</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/multimedia">Multimedia</Link>
            <ul className="dropdown">
              <li><Link to="/multimedia/videos">Videos</Link></li>
              <li><Link to="/multimedia/podcasts">Podcasts</Link></li>
              <li><Link to="/multimedia/webinars">Webinars</Link></li>
            </ul>
          </li>
          <li><a href="/footer">About us</a></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>

      {/* Notification for Streak */}
      {showNotification && (
        <div className="streak-notification">
          `🎉 Youve continued your streak! {streak} day(s) in a row! Keep going!`
        </div>
      )}
    </>
  );
};

export default Navbar;