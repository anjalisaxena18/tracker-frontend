import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Screenshots from './pages/Screenshots';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '500px',marginRight:'200px', padding: '10px', width: '50%' , alignItems: 'center'}}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/screenshots" element={<Screenshots />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
