import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthorityDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/');
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'ngo':
        return (
          <div style={styles.sectionContent}>
            <h3>NGO Details</h3>
            <div style={styles.ngoContainer}>
              {ngoData.map((ngo, index) => (
                <div key={index} style={styles.ngoCard}>
                  <img src={ngo.image} alt={ngo.name} style={styles.ngoImage} />
                  <h4>{ngo.name}</h4>
                  <p><strong>Location:</strong> {ngo.location}</p>
                  <p><strong>Contact Number:</strong> {ngo.contact}</p>
                  <a href={ngo.googleFormLink} style={styles.link}>Share Google Form</a>
                </div>
              ))}
            </div>
          </div>
        );
      case 'contact':
        return (
          <div style={styles.sectionContent}>
            <h3>Contact Us</h3>
            <p><strong>Email:</strong> contact@example.com</p>
            <p><strong>Phone:</strong> +123-456-7890</p>
            <p><strong>Address:</strong> 123 Contact Avenue, City, Country</p>
          </div>
        );
      default:
        return (
          <div style={styles.sectionContent}>
            <h2>Higher Authority Dashboard</h2>
            <p>Welcome to the Higher Authority Dashboard. You can approve campaigns, review NGO performance, and manage funding allocations.</p>
            <div style={styles.cardContainer}>
              <div style={styles.card}>
                <h3>Approve Campaigns</h3>
                <p>Review and approve campaigns submitted by NGOs.</p>
                <button style={styles.button}>Approve Campaigns</button>
              </div>
              <div style={styles.card}>
                <h3>NGO Performance</h3>
                <p>Track the performance of NGOs and their impact.</p>
                <button style={styles.button}>View Performance</button>
              </div>
              <div style={styles.card}>
                <h3>Funding Management</h3>
                <p>Manage funding allocations for various NGOs and projects.</p>
                <button style={styles.button}>Manage Funding</button>
              </div>
            </div>
            <button style={styles.backButton} onClick={handleBackToLogin}>
              Back to Login
            </button>
          </div>
        );
    }
  };

  return (
    <div style={styles.dashboard}>
      <nav style={styles.navbar}>
        <button style={styles.navButton} onClick={() => setActiveSection('dashboard')}>Dashboard</button>
        <button style={styles.navButton} onClick={() => setActiveSection('ngo')}>NGO</button>
        <button style={styles.navButton} onClick={() => setActiveSection('contact')}>Contact Us</button>
      </nav>
      {renderSectionContent()}
    </div>
  );
};

const ngoData = [
  { name: 'Green Earth Foundation', location: '123 Green Street, Eco City', contact: '+123-456-7891', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form1' },
  { name: 'Hope for Humanity', location: '456 Hope Avenue, Help Town', contact: '+123-456-7892', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form2' },
  { name: 'Bright Future NGO', location: '789 Future Road, Progress City', contact: '+123-456-7893', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form3' },
  { name: 'Global Relief Fund', location: '321 Relief Lane, Aid City', contact: '+123-456-7894', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form4' },
  { name: 'Support Society', location: '654 Support Blvd, Helpville', contact: '+123-456-7895', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form5' },
  { name: 'Care for Kids', location: '987 Care Lane, Childtown', contact: '+123-456-7896', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form6' },
  { name: 'Animal Aid Network', location: '456 Animal St, Petville', contact: '+123-456-7897', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form7' },
  { name: 'Education First Foundation', location: '789 Education Ave, Learn City', contact: '+123-456-7898', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form8' },
  { name: 'Health for All', location: '321 Health Blvd, Wellness Town', contact: '+123-456-7899', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form9' },
  { name: 'Clean Water Initiative', location: '654 Water Street, Purity City', contact: '+123-456-7800', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form10' },
  { name: 'Youth Development Network', location: '456 Youth Blvd, Future City', contact: '+123-456-7802', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form12' },
  { name: 'Sustainable Living Foundation', location: '789 Sustainable St, Green City', contact: '+123-456-7803', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form13' },
  { name: 'Veterans Support Organization', location: '321 Veterans Ave, Honor City', contact: '+123-456-7804', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form14' },
  { name: 'Disaster Relief Network', location: '654 Relief Road, Rescue Town', contact: '+123-456-7805', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form15' },
  { name: 'Cultural Preservation Society', location: '987 Culture St, Heritage City', contact: '+123-456-7806', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form16' },
  { name: 'Homeless Support Fund', location: '456 Homeless Ave, Shelter City', contact: '+123-456-7807', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form17' },
  { name: 'Green Energy Initiative', location: '789 Green St, Solar City', contact: '+123-456-7808', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form18' },
  { name: 'Community Health Network', location: '321 Community Blvd, Wellness City', contact: '+123-456-7809', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form19' },
  { name: 'Global Peace Foundation', location: '654 Peace Road, Harmony City', contact: '+123-456-7810', image: 'https://via.placeholder.com/150', googleFormLink: 'https://example.com/form20' },
];

const styles = {
  dashboard: {
    padding: '20px',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  navButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  sectionContent: {
    marginTop: '20px',
  },
  ngoContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'space-around',
  },
  ngoCard: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    width: '250px',
    textAlign: 'center',
  },
  ngoImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
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
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  backButton: {
    marginTop: '30px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    marginTop: '10px',
    display: 'inline-block',
  },
};

export default AuthorityDashboard;