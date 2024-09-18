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
import VideoGallery from './components/VideoGallery';
import IrrigationArticles from './pages/IrrigationArticles';
import Register from './components/Register';

import ThreadList from './components/ThreadList';
import Thread from './components/Threads';
import CreateThread from './components/CreateThread';
import WaterConservationDashboard from './components/WaterConservationDashboard';
import Login from './Login';
import NgoDashboard from './NgoDashboard';
import AuthorityDashboard from './AuthorityDashboard';




function App() {
  return (
    
      <div className="App">
      
        <Chatbot />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />

          <Route exact path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/map' element={<Map />} />
          <Route path='/multimedia' element={<VideoGallery />} /> {/* Add this line for VideoGallery */}
          <Route path='/map' element={<Map />} />
          <Route path='/articles/irrigation' element={<IrrigationArticles />} />
          <Route path='/watercalc' element={<WaterUsageCalc />} />
          <Route path="/register" element={<Register />} />
          <Route path="/threads" element={<ThreadList />} />
          <Route path="/threads/:id" element={<Thread />} />
          <Route path="/createThread" element={<CreateThread />} />
          <Route path="/dashboard" element={<WaterConservationDashboard />} />
          <Route path="/ngo-dashboard" element={<NgoDashboard />} />
         <Route path="/authority-dashboard" element={<AuthorityDashboard />} />

        
        </Routes>
      </div>
    
  );
}

export default App;
