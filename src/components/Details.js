/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet

import './Details.css';

const Details = ({ character }) => {
  const {
    name, image, yearOfBirth, dateOfBirth, actor,
    gender, species, house, ancestry, eyeColour,
    hairColour, patronus, hogwartsStudent, hogwartsStaff,
  } = character;

  return (
    <>
      <div className="details-container">
        <h2 className="charc-name">{name}</h2>
        <div className="actor-image">
          <img src={image} alt={name} />
        </div>
        <div className="detail-section">
          <div className="info">
            <ul className="all-details">
              <li className="list">
                <span>Year of Birth</span>
                <span className="year-of-birth">{yearOfBirth}</span>
              </li>
              <li className="list">
                <span className="info-type">Date of Birth</span>
                <span className="info-detail">{dateOfBirth}</span>
              </li>
              <li className="list">
                <span className="info-type">Actor</span>
                <span className="info-detail">{actor}</span>
              </li>
              <li className="list">
                <span className="info-type">Gender</span>
                <span className="info-detail">{gender}</span>
              </li>
              <li className="list">
                <span className="info-type">Species</span>
                <span className="info-detail">{species}</span>
              </li>
              <li className="list">
                <span className="info-type">House</span>
                <span className="info-detail">{house}</span>
              </li>
              <li className="list">
                <span className="info-type">Ancestry</span>
                <span className="info-detail">{ancestry}</span>
              </li>
              <li className="list">
                <span className="info-type">Eye colour</span>
                <span className="info-detail">{eyeColour}</span>
              </li>
              <li className="list">
                <span className="info-type">Hair colour</span>
                <span className="info-detail">{hairColour}</span>
              </li>
              <li className="list">
                <span className="info-type">Patronus</span>
                <span className="info-detail">{patronus}</span>
              </li>
              <li className="list">
                <span className="info-type">Hogwarts Student</span>
                <span className="info-detail">{hogwartsStudent}</span>
              </li>
              <li className="list">
                <span className="info-type">Hogwarts Staff</span>
                <span className="info-detail">{hogwartsStaff}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

Details.propTypes = {
  character: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Details;
