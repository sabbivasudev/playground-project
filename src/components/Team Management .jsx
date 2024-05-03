import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  const [selectedTab, setSelectedTab] = useState('create-team');

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="container">
      <div className="left-side">
        <ul>
          <li onClick={() => handleTabClick('create-team')}>Create Team Page</li>
          <li onClick={() => handleTabClick('team-name')}>Team Name Selection</li>
          <li onClick={() => handleTabClick('team-icon')}>Team Icon Selection</li>
          <li onClick={() => handleTabClick('rules')}>Rules and Regulations</li>
        </ul>
      </div>
      <div className="right-side">
        {selectedTab === 'create-team' && (
          <div className="team-content">
            <h2>Create Team Page</h2>
            {/* Content for Create Team Page */}
          </div>
        )}
        {selectedTab === 'team-name' && (
          <div className="team-content">
            <h2>Team Name Selection</h2>
            {/* Content for Team Name Selection */}
          </div>
        )}
        {selectedTab === 'team-icon' && (
          <div className="team-content">
            <h2>Team Icon Selection</h2>
            {/* Content for Team Icon Selection */}
          </div>
        )}
        {selectedTab === 'rules' && (
          <div className="team-content">
            <h2>Rules and Regulations</h2>
            {/* Content for Rules and Regulations */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
