import React from 'react';
import { useNavigate } from 'react-router-dom';

const NgoDashboard = () => {

    const navigate = useNavigate(); // Initialize useNavigate

  const handleBackToLogin = () => {
    navigate('/'); // Navigate to login page when clicked
  };

  return (
    <div style={styles.dashboard}>
      <h2>NGO Dashboard</h2>
      <p>Welcome to the NGO Dashboard. Here you can manage your campaigns, check donations, and interact with volunteers.</p>
      
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3>Manage Campaigns</h3>
          <p>Create and update campaigns to help the community.</p>
          <button style={styles.button}>Go to Campaigns</button>
        </div>

        <div style={styles.card}>
          <h3>Donations</h3>
          <p>Track donations made to your NGO.</p>
          <button style={styles.button}>View Donations</button>
        </div>

        <div style={styles.card}>
          <h3>Volunteers</h3>
          <p>Interact with volunteers and manage their contributions.</p>
          <button style={styles.button}>Manage Volunteers</button>
        </div>
      </div>

      <button style={styles.backButton} onClick={handleBackToLogin}>
        Back to Login
      </button>
    </div>
  );
};

const styles = {
  dashboard: {
    padding: '20px',
  },
  cardContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    width: '250px',
    textAlign: 'center',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default NgoDashboard;