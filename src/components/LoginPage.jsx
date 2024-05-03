// LoginPage.jsx
import React, { useState } from 'react';
import backgroundImage from '../../public/cric.png';
import SignupForm from './../components/SignupForm';
import { Link } from 'react-router-dom';


function LoginPage({ onToggleForm }) {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Your login logic here
    // Once login is successful, store the user data in local storage
    localStorage.setItem('loggedInUser', JSON.stringify({ username: 'exampleUser' }));
    // Redirect or perform any other action
  }
   const handleSignupClick = () => {
     setShowSignupForm(true);
   };
  return (
    
    <div className="login-page-container">
      <div className="login-page"></div>
      <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Login form fields */}
          <button type="submit">Login</button>
        </form>
        <button onClick={handleSignupClick}>Sign Up</button>
       {showSignupForm ? (
        <SignupForm />
      ) : (
      <div className="login-page">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit"><Link to="/CreateTeampage">Next</Link></button>
        </form>
        <button onClick={handleSignupClick}>Sign Up</button> {/* Add the signup button */}
      </div>
      )}
    </div>
  );
}

export default LoginPage;
