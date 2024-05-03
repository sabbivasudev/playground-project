// SignupForm.jsx
import React, { useState } from 'react';
import '../components/SignupForm'; // Import your CSS file for styling
import CreateTeamPage from '../components/CreateTeampage';
import { Link } from 'react-router-dom';

function SignupForm() { // Add onNext as a prop
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your signup logic here
    // Once signup is successful, store the user data in local storage
    localStorage.setItem('loggedInUser', JSON.stringify({ username }));
    // Redirect or perform any other action
  };

  const handleNextClick = () => {
    setShowCreateTeam(true);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div className="signup-form-container">
      <div className="signup-form">
        <h2>How to Signup</h2>
        <button type="submit">Sign Up</button>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          <button type="submit"><Link to="/CreateTeampage">Next</Link></button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
