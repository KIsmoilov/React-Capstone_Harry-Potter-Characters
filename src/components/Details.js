/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet

const Details = ({ character }) => {
  const {
    name, image, yearOfBirth, dateOfBirth, actor,
    gender, species, house, ancestry, eyeColour,
    hairColour, patronus, hogwartsStudent, hogwartsStaff,
  } = character;

  return (
    <>
      <div className="rocket-details-container">
        <div className="actor-image-section">
          <img src={image} alt={name} />
        </div>
        <div className="rocket-detail-section">
          <h2 className="rocket-name">{name}</h2>
          <div>
            <span className="year-of-birth">
              Year of birth:
              {' '}
              {yearOfBirth}
            </span>
            <span>{dateOfBirth}</span>
            <span>{actor}</span>
            <span>{gender}</span>
            <span>{species}</span>
            <span>{house}</span>
            <span>{ancestry}</span>
            <span>{eyeColour}</span>
            <span>{hairColour}</span>
            <span>{patronus}</span>
            <span>{hogwartsStudent}</span>
            <span>{hogwartsStaff}</span>
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
