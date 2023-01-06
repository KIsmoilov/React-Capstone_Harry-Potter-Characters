import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';

// stylesheet
import './Navbar.css';

const Navbar = () => (
  <nav className="navBar">
    <ul className="menuNav">
      <Link to="/">
        <li>
          <FontAwesomeIcon className="homeIcon" icon={faHome} />
        </li>
      </Link>
      <li>
        <FontAwesomeIcon className="micIcon" icon={faMicrophone} />
        <FontAwesomeIcon className="gearIcon" icon={faGear} />
      </li>
    </ul>
  </nav>
);
export default Navbar;
