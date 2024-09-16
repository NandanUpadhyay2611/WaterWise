import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { configDotenv } from 'dotenv';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);


  const getBotResponse = async (message) => {
    const API_KEY = configDotenv.GEMINI_API_KEY;
    const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

    try {
      const response = await axios.post(API_URL, {
        contents: [{
          parts: [{
            text: `You are a helpful assistant specialized in water conservation. Please respond to the following query: ${message}`
          }]
        }]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        }
      });

      // Extract the response text from the Gemini API response
      const botResponse = response.data.candidates[0].content.parts[0].text;
      return botResponse;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      throw error;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const botResponse = await getBotResponse(input);
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    } catch (error) {
      console.error('Error getting bot response:', error);
      setMessages(prev => [...prev, { text: "I'm sorry, I'm having trouble responding right now. Please try again later.", sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Chat' : 'Open Chat'}
      </button>
      {isOpen && (
        <div className="chatbot">
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                {message.text}
              </div>
            ))}
            {isLoading && <div className="message bot">Thinking...</div>}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="chat-input-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about water conservation..."
              className="chat-input"
              disabled={isLoading}
            />
            <button type="submit" className="chat-submit" disabled={isLoading}>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;