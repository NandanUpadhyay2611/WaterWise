import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

function WaterUsageCalc() {
  const [formData, setFormData] = useState({
    showers: 0,
    laundry: 0,
    dishes: 0,
    lawn: 0
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [genAI, setGenAI] = useState(null);

  useEffect(() => {
    // Initialize the Google Generative AI client
    const API_KEY = "AIzaSyDXygtaHxlAYSERRObTbDEwLkTLkoV5NXA"; // Replace with your actual API key
    setGenAI(new GoogleGenerativeAI(API_KEY));
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!genAI) {
      setError('AI model not initialized. Please try again.');
      return;
    }

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `You are a water usage calculator. Calculate water usage for: ${formData.showers} showers, ${formData.laundry} loads of laundry, ${formData.dishes} dishes washed by hand, and ${formData.lawn} square meters of lawn per week. Provide a JSON object containing totalUsage (in liters), potentialSavings (in liters), and an array of recommendations.`;

      const result = await model.generateContent(prompt);
      
      // Log the result to inspect the response structure
      console.log('Raw AI Response:', result);

      // Extract the text from the response, assuming it returns JSON content directly
      const responseText = result?.response?.content || ''; 

      // Try parsing it as JSON
      const jsonData = JSON.parse(responseText);
      setResult(jsonData);

    } catch (error) {
      console.error('Error calculating water usage:', error);
      setError('Failed to calculate water usage. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Water Usage Calculator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Number of showers per week:</label>
          <input
            type="number"
            name="showers"
            value={formData.showers}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Loads of laundry per week:</label>
          <input
            type="number"
            name="laundry"
            value={formData.laundry}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Dishes washed by hand per week:</label>
          <input
            type="number"
            name="dishes"
            value={formData.dishes}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Lawn size (square meters):</label>
          <input
            type="number"
            name="lawn"
            value={formData.lawn}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Calculate</button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {result && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">Results</h2>
          <p>Estimated weekly water usage: {result.totalUsage} liters</p>
          <p>Potential savings: {result.potentialSavings} liters</p>
          <h3 className="font-semibold mt-3 mb-2">Recommendations:</h3>
          <ul className="list-disc pl-5">
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
