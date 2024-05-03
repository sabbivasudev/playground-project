import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faListAlt, faPalette, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import '../App.css'; // Import your CSS file for styling

export default function InitialPage() {
    const [selectedTab, setSelectedTab] = useState(null);

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };

    return (
        <div className="container">
            <div className="left-side">
                <ul>
                    <li>
                        <Link to="#" onClick={() => handleTabClick('team-creation')}>
                            <FontAwesomeIcon icon={faUsers} /> <span>Team Creation</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" onClick={() => handleTabClick('team-name')}>
                            <FontAwesomeIcon icon={faListAlt} /> <span>Team Name Selection</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" onClick={() => handleTabClick('team-icon')}>
                            <FontAwesomeIcon icon={faPalette} /> <span>Team Icon Selection</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#" onClick={() => handleTabClick('rules')}>
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Rules and Regulations</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="right-side">
                {selectedTab === 'team-creation' && <div>Content for Team Creation</div>}
                {selectedTab === 'team-name' && <div>Content for Team Name Selection</div>}
                {selectedTab === 'team-icon' && <div>Content for Team Icon Selection</div>}
                {selectedTab === 'rules' && <div>Content for Rules and Regulations</div>}
            </div>
        </div>
    );
}
