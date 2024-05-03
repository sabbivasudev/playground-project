import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import LoginPage from './components/LoginPage';
import { Link } from 'react-router-dom';

import './App.css'; // Import your CSS file for styling
import RulesPage from './Rules';
import TeamIconPage from './TeamIcon';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="left-side">
          <ul>
            <li><Link to="/team-creation">team creation</Link></li>
            <li><Link to="/team-name">Team Name Selection</Link></li>
            <li><Link to="/team-icon">Team Icon Selection</Link></li>
            <li><Link to="/rules">Rules and Regulations</Link></li>
          </ul>
        </div>
        <div className="right-side">
        <Routes>
          <Route path="/team-creation" component={Teamcreation} />
          <Route path="/team-name" component={TeamNamePage} />
          <Route path="/team-icon" component={TeamIconPage} />
          <Route path="/rules" component={RulesPage} /> {/* Use the renamed import */}
        </Routes>
        </div>
      </div>
    </Router>
  );
}

function Teamcreation() {
  return (
    <div className="team-content">
      <h2>Create Team Page</h2>
      {/* Content for Create Team Page */}
    </div>
  );
}

function TeamNamePage() {
  return (
    <div className="team-content">
      <h2>Team Name Selection</h2>
      {/* Content for Team Name Selection */}
    </div>
  );
}

function TeamIconContent() {
  return (
    <div className="team-content">
      <h2>Team Icon Selection</h2>
      {/* Content for Team Icon Selection */}
    </div>
  );
}

function RulesContent() {
  return (
    <div className="team-content">
      <h2>Rules and Regulations</h2>
      {/* Content for Rules and Regulations */}
    </div>
  );
}

export default App;
