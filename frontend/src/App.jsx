import React from 'react';
import Navbar from './components/Navbar'; // Assuming you created the Navbar component
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import ArticleDetails from './pages/ArticleDetails';
import ArticlesList from './pages/ArticlesList';
import Chatbot from './components/chatbot';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WaterUsageCalc from './components/WaterUsageCalc';
import Quiz from './components/Quiz';
import Map from './components/Map';
import VideoGallery from './components/VideoGallery'; // Import the VideoGallery component

function App() {
  return (
    
      <div className="App">
        <Navbar />
        <Chatbot />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
          <Route path="/waterCalc" element={<WaterUsageCalc />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/map' element={<Map />} />
          <Route path='/multimedia' element={<VideoGallery />} /> {/* Add this line for VideoGallery */}
        </Routes>
      </div>
    
  );
}

export default App;
