import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import MentalHealthTracker from './components/MentalHealthTracker';
import ForumPage from './components/ForumPage';
import ResourceLibrary from './components/ResourceLibrary';
import { ThemeContextProvider } from './ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <div className="App">
          <Navbar /> {/* Navbar is always visible */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tracker" element={<MentalHealthTracker />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/resources" element={<ResourceLibrary />} />
          </Routes>
        </div>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
