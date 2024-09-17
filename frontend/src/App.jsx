
import React from 'react';
import Navbar from './components/Navbar'; // Assuming you created the Navbar component
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import ArticleDetails from './pages/ArticleDetails';
import ArticlesList from './pages/ArticlesList';
import Chatbot from './components/chatbot';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
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
          
        </Routes>
      </div>
  );
}

export default App;
