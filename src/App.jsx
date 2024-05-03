import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import { Link } from 'react-router-dom';
import './App.css'; // Import your CSS file for styling
import TeamIconPage from './components/TeamIcon';
import TeamNamePage from './components/TeamName';
import RulesPage from './components/Rules';
import Createteam from './components/Createteam';
import LoginPage from '../../reactproject/src/components/LoginPage';
import InitialPage from './components/InitialPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/team-name" element={<TeamNamePage />} />
        <Route path="/team-icon" element={<TeamIconPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/team-creation" element={<Createteam />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
