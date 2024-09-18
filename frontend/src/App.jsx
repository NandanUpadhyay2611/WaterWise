
import React from 'react';
import Navbar from './components/Navbar'; // Assuming you created the Navbar component
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import ArticleDetails from './pages/ArticleDetails';
import ArticlesList from './pages/ArticlesList';
import Chatbot from './components/chatbot';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import WaterUsageCalc from './components/WaterUsageCalc';
import Quiz from './components/Quiz';
import Map from './components/Map';
import IrrigationArticles from './pages/IrrigationArticles';
import ThreadList from './components/ThreadList';
import Thread from './components/Threads';
import Register from './components/Register';
import Login from './components/Login';
import CreateThread from './components/CreateThread';
// import Switch from 'react-router-dom';

function App() {

  return (

   
      <div className="App">
        <Navbar />
        <Chatbot />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/map' element={<Map />} />
          <Route path='/articles/irrigation' element={<IrrigationArticles />} />
          <Route path='/watercalc' element={<WaterUsageCalc />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/threads" element={<ThreadList />} />
          <Route path="/threads/:id" element={<Thread />} />
          <Route path="/createThread" element={<CreateThread />} />
        
        </Routes>
      </div>
  );
}

export default App;
