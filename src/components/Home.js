/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet

const CharactersInfo = ({ character }) => {
  const {
    name, image, yearOfBirth,
  } = character;

  return (
    <>
      <div className="rocket-details-container">
        <div className="rocket-image-section">
          <img src={image} alt={name} />
        </div>
        <div className="rocket-detail-section">
          <h2 className="rocket-name">{name}</h2>
          <div>
            <span className="rocket-description">{yearOfBirth}</span>
          </div>
        </div>
      </div>
    </>
  );
};

CharactersInfo.propTypes = {
  character: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CharactersInfo;
