import React, { useState, useEffect } from 'react';

function WaterUsageCalc() {
  const [formData, setFormData] = useState({
    showers: 0,
    laundry: 0,
    dishes: 0,
    lawn: 0,
    baths: 0,
    cars: 0,
    machines: 0,
    processes: 0,
    manufacturingWater: 0,
    cleaningWater: 0,
    employees: 0,
    shifts: 0
  });
  const [usageType, setUsageType] = useState('personal'); // personal or industry
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [warnings, setWarnings] = useState([]);
  const [genAI, setGenAI] = useState(null);


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  const handleUsageTypeChange = (e) => {
    setUsageType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    setWarnings([]);

    // Define water usage thresholds for each activity
    const thresholds = {
      personal: {
        showers: 10,
        laundry: 5,
        dishes: 7,
        lawn: 50,
        baths: 5,
        cars: 50
      },
      industry: {
        machines: 20,
        processes: 100,
        manufacturingWater: 10000,
        cleaningWater: 2000,
        employees: 50,
        shifts: 3
      }
    };

    const currentThresholds = thresholds[usageType];
    const currentWarnings = [];

    // Check for warnings based on the selected usage type
    if (usageType === 'personal') {
      if (formData.showers > currentThresholds.showers) {
        currentWarnings.push("You are taking too many showers per week.");
      }
      if (formData.laundry > currentThresholds.laundry) {
        currentWarnings.push("You are doing too many loads of laundry per week.");
      }
      if (formData.dishes > currentThresholds.dishes) {
        currentWarnings.push("You are washing dishes by hand too often per week.");
      }
      if (formData.lawn > currentThresholds.lawn) {
        currentWarnings.push("Your lawn size is too large for efficient water usage.");
      }
      if (formData.baths > currentThresholds.baths) {
        currentWarnings.push("You are taking too many baths per week.");
      }
      if (formData.cars > currentThresholds.cars) {
        currentWarnings.push("You are using too much water for cleaning cars.");
      }
    } else if (usageType === 'industry') {
      if (formData.machines > currentThresholds.machines) {
        currentWarnings.push("You are using too many machines that consume water.");
      }
      if (formData.processes > currentThresholds.processes) {
        currentWarnings.push("You are running too many processes that use water.");
      }
      if (formData.manufacturingWater > currentThresholds.manufacturingWater) {
        currentWarnings.push("You are using too much water for manufacturing.");
      }
      if (formData.cleaningWater > currentThresholds.cleaningWater) {
        currentWarnings.push("You are using too much water for cleaning.");
      }
      if (formData.employees > currentThresholds.employees) {
        currentWarnings.push("You have too many employees impacting water usage.");
      }
      if (formData.shifts > currentThresholds.shifts) {
        currentWarnings.push("You are running too many shifts that consume water.");
      }
    }

    // Update state with the result or warnings
    if (currentWarnings.length > 0) {
      setWarnings(currentWarnings);
    } else {
      setResult("You are perfectly using water..");
    }
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e2e8f0'
    }}>
      <h1 style={{
        fontSize: '24px',
        fontWeight: '700',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#2d3748'
      }}>Water Usage Calculator</h1>

      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          fontWeight: '600',
          color: '#4a5568'
        }}>Select Usage Type:</label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="radio"
              value="personal"
              checked={usageType === 'personal'}
              onChange={handleUsageTypeChange}
              style={{ marginRight: '8px', height: '16px', width: '16px', color: '#3182ce' }}
            />
            <span style={{ color: '#4a5568' }}>Personal Use</span>
          </label>
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="radio"
              value="industry"
              checked={usageType === 'industry'}
              onChange={handleUsageTypeChange}
              style={{ marginRight: '8px', height: '16px', width: '16px', color: '#3182ce' }}
            />
            <span style={{ color: '#4a5568' }}>Industry Use</span>
          </label>
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {usageType === 'personal' ? (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontWeight: '500',
                  color: '#2d3748'
                }}>Number of showers per week:</label>
                <input
                  type="number"
                  name="showers"
                  value={formData.showers}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    outline: 'none',
                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                    fontSize: '16px'
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontWeight: '500',
                  color: '#2d3748'
                }}>Loads of laundry per week:</label>
                <input
                  type="number"
                  name="laundry"
                  value={formData.laundry}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    outline: 'none',
                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                    fontSize: '16px'
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontWeight: '500',
                  color: '#2d3748'
                }}>Dishes washed by hand per week:</label>
                <input
                  type="number"
                  name="dishes"
                  value={formData.dishes}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    outline: 'none',
                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                    fontSize: '16px'
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontWeight: '500',
                  color: '#2d3748'
                }}>Lawn size (square meters):</label>
                <input
                  type="number"
                  name="lawn"
                  value={formData.lawn}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    outline: 'none',
                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                    fontSize: '16px'
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontWeight: '500',
                  color: '#2d3748'
                }}>Number of baths per week:</label>
                <input
                  type="number"
                  name="baths"
                  value={formData.baths}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    outline: 'none',
                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                    fontSize: '16px'
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontWeight: '500',
                  color: '#2d3748'
                }}>Water used for cleaning cars (liters per week):</label>
                <input
                  type="number"
                  name="cars"
                  value={formData.cars}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    outline: 'none',
                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                    fontSize: '16px'
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontWeight: '500',
                  color: '#2d3748'
                }}>Number of machines using water:</label>
                <input
                  type="number"
                  name="machines"
                  value={formData.machines}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    outline: 'none',
                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                    fontSize: '16px'
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontWeight: '500',
                  color: '#2d3748'
                }}>Water-consuming processes per week:</label>
                <input
                  type="number"
                  name="processes"
                  value={formData.processes}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    outline: 'none',
                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                    fontSize: '16px'
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontWeight: '500',
                  color: '#2d3748'
                }}>Liters of water used in manufacturing:</label>
                <input
                  type="number"
                  name="manufacturingWater"
                  value={formData.manufacturingWater}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    outline: 'none',
                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                    fontSize: '16px'
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontWeight: '500',
                  color: '#2d3748'
                }}>Liters of water used for cleaning:</label>
                <input
                  type="number"
                  name="cleaningWater"
                  value={formData.cleaningWater}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    outline: 'none',
                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                    fontSize: '16px'
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontWeight: '500',
                  color: '#2d3748'
                }}>Number of employees:</label>
                <input
                  type="number"
                  name="employees"
                  value={formData.employees}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    outline: 'none',
                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                    fontSize: '16px'
                  }}
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '4px',
                  fontWeight: '500',
                  color: '#2d3748'
                }}>Number of shifts using water resources:</label>
                <input
                  type="number"
                  name="shifts"
                  value={formData.shifts}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #e2e8f0',
                    borderRadius: '4px',
                    outline: 'none',
                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                    fontSize: '16px'
                  }}
                />
              </div>
            </div>
          </>
        )}

        <button type="submit" style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#3182ce',
          color: 'white',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '600',
          textAlign: 'center',
          transition: 'background-color 0.2s',
          outline: 'none'
        }} onMouseOver={(e) => e.target.style.backgroundColor = '#2b6cb0'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3182ce'}
        >
          Calculate
        </button>
      </form>

      {warnings.length > 0 && (
        <div style={{ marginTop: '24px' }}>
          <h2 style={{
            color: '#e53e3e',
            fontWeight: '700',
            fontSize: '18px'
          }}>Warning:</h2>
          <ul style={{
            listStyleType: 'disc',
            paddingLeft: '20px',
            color: '#e53e3e',
            marginTop: '8px'
          }}>
            {warnings.map((warning, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>{warning}</li>
            ))}
          </ul>
        </div>
      )}

      {result && (
        <div style={{ marginTop: '24px' }}>
          <h2 style={{
            color: '#38a169',
            fontWeight: '700',
            fontSize: '18px'
          }}>{result}</h2>
        </div>
      )}
    </div>
  );
}

export default WaterUsageCalc;
