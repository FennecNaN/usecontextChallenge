import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MyJob from '../pages/MyJob';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import { ThemeContext } from '../themes/ThemeContext';

const RoutesApp = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/myjob">MyJob</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myjob" element={<MyJob />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RoutesApp;
