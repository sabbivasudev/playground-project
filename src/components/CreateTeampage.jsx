// CreateTeamPage.jsx
import React, { useState } from 'react';
import SignupForm from '../components/SignupForm';
import backgroundImage from'../../public/Teampage.jpg';

function CreateTeamPage() {
  const [teamMembers, setTeamMembers] = useState([
    { role: 'Batsman', name: '' },
    { role: 'Batsman', name: '' },
    { role: 'Bowler', name: '' },
    { role: 'Bowler', name: '' },
    { role: 'Wicket Keeper', name: '' },
    { role: 'All Rounder', name: '' },
  ]);

  const [captain, setCaptain] = useState('');

  const handleChange = (index, event) => {
    const updatedMembers = [...teamMembers];
    updatedMembers[index].name = event.target.value;
    setTeamMembers(updatedMembers);
  };
  

  const handleCaptainSelect = (index) => {
    setCaptain(teamMembers[index].name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
    console.log('Team Members:', teamMembers);
    console.log('Captain:', captain);
    // You can perform further actions here, such as sending the data to a server
  };

  return (
    <div>
        <div className="create-team-container">
      <div className="create-team-form">
        {/* Create team form content */}
        </div>
    </div>
      <h2>Create Team</h2>
      <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
        {teamMembers.map((member, index) => (
          <div key={index}>
            <label>
              {member.role} {index + 1}:
              <input
                type="text"
                value={member.name}
                onChange={(event) => handleChange(index, event)}
                required
              />
            </label>
            <button type="button" onClick={() => handleCaptainSelect(index)}>
              Set as Captain
            </button>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      <p>Captain: {captain}</p>
    </div>
  );
}

export default CreateTeamPage;
