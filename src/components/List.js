/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet

const CharacterLists = ({ character }) => {
  const { name } = character;

  return (
    <div className="rocket-main-container">
      <span className="profile-rocket-name">{ name }</span>
    </div>
  );
};

CharacterLists.propTypes = {
  character: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CharacterLists;
