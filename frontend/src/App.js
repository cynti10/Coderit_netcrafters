import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ResourceLibrary from './components/ResourceLibrary';
import Navbar from './components/Navbar';  // Optional - for navigation bar

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* Optional navigation bar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resources" element={<ResourceLibrary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
