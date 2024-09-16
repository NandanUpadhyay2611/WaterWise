import React, { useEffect, useState } from 'react';
import './Navbar.css'; // For styling
import "bootstrap/dist/css/bootstrap.min.css";

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
            <img src="/frontend/my-react-app/src/assets/fire.png" alt="Streak Icon" className="streak-icon" />
            <span>{streak} Day Streak</span>
          </div>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li>
            <a href="/articles">Articles</a>
            <ul className="dropdown">
              <li><a href="/articles/irrigation">Irrigation</a></li>
              <li><a href="/articles/domestic-use">Domestic Use</a></li>
              <li><a href="/articles/water-reuse">Water Reuse</a></li>
            </ul>
          </li>
          <li><a href="/tools">Interactive Tools</a>
            <ul className="dropdown">
              <li><a href="/community">Community Forums</a></li>
              <li><a href="/waterCal">Water Calculator</a></li>
            </ul>
          </li>
          <li>
            <a href="/multimedia">Multimedia</a>
            <ul className="dropdown">
              <li><a href="/multimedia/videos">Videos</a></li>
              <li><a href="/multimedia/podcasts">Podcasts</a></li>
              <li><a href="/multimedia/webinars">Webinars</a></li>
            </ul>
          </li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>

      {/* Notification for Streak */}
      {showNotification && (
        <div className="streak-notification">
          🎉 You've continued your streak! {streak} day(s) in a row! Keep going!
        </div>
      )}
    </>
  );
};

export default Navbar;
