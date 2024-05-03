import React from 'react';
import { Link } from 'react-router-dom';

export default function InitialPage() {
    return (
        <div className="left-side">
        <ul>
          <li><Link to="/team-creation">team creation</Link></li>
          <li><Link to="/team-name">Team Name Selection</Link></li>
          <li><Link to="/team-icon">Team Icon Selection</Link></li>
          <li><Link to="/rules">Rules and Regulations</Link></li>
        </ul>
      </div>
    )
}