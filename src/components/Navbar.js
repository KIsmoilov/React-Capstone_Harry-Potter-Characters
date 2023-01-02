import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGear } from '@fortawesome/free-solid-svg-icons';

// stylesheet
import './Navbar.css';

const Navbar = () => (
  <nav className="navBar">
    <ul className="menuNav">
      <li>
        <FontAwesomeIcon className="homeIcon" icon={faHome} />
      </li>
      <li>
        <FontAwesomeIcon className="gearIcon" icon={faGear} />
      </li>
    </ul>
  </nav>
);
export default Navbar;
