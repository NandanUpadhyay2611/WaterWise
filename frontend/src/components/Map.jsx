import React from 'react';

const Map = () => {
  return (
    <div style={styles.container}>
      {/* World Bank Data iframe */}
      <iframe 
        src="https://data.worldbank.org/share/widget?end=2022&indicators=SH.H2O.SMDW.UR.ZS&start=2000&view=chart" 
        width='100%' 
        height='600px' 
        frameBorder='0' 
        scrolling="no"
        title="World Bank Data Visualization"
        style={styles.iframe}
      ></iframe>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    width: '100%',
    maxWidth: '800px',
    margin: '20px auto',
    padding: '10px',
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  },
  iframe: {
    width: '100%',
    height: '600px',
    border: 'none'
  }
};

export default Map;