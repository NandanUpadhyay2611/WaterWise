import React, { useState } from 'react';

function WaterUsageCalc() {
  const [formData, setFormData] = useState({
    showers: 0,
    laundry: 0,
    dishes: 0,
    lawn: 0
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null); // Clear previous result

    try {
      // Assuming Gemini API is a POST request and requires a body
      const response = await fetch('https://api.gemini.com/v1/watercalc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_API_KEY' // Replace with actual API key if required
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      console.log('API Response:', data); // Check the API response
      setResult(data); // Assuming the data format is similar to what you shared
    } catch (error) {
      console.error('Error calculating water usage:', error);
      setError('Failed to calculate water usage. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1>Water Usage Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Number of showers per week:</label>
          <input
            type="number"
            name="showers"
            value={formData.showers}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Loads of laundry per week:</label>
          <input
            type="number"
            name="laundry"
            value={formData.laundry}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Dishes washed by hand per week:</label>
          <input
            type="number"
            name="dishes"
            value={formData.dishes}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Lawn size (square meters):</label>
          <input
            type="number"
            name="lawn"
            value={formData.lawn}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Calculate</button>
      </form>

      {error && <p className="error">{error}</p>}

      {result && (
        <div>
          <h2>Results</h2>
          <p>Estimated weekly water usage: {result.totalUsage} liters</p>
          <p>Potential savings: {result.potentialSavings} liters</p>
          <h3>Recommendations:</h3>
          <ul>
            {result.recommendations && result.recommendations.length > 0 ? (
              result.recommendations.map((rec, index) => <li key={index}>{rec}</li>)
            ) : (
              <li>No recommendations available</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WaterUsageCalc;
