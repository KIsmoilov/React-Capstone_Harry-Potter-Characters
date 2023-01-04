/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Stylesheet
import './Home.css';

const CharactersInfo = ({ character }) => {
  const {
    name, image, yearOfBirth,
  } = character;
  return (
    <>
      <Link className="link" to={`/Details/${character.id}`} key={character.id}>
        <h2 className="name">{name}</h2>
        <div className="actor-image-section">
          <img className="actor-img" src={image} alt={name} />
        </div>
        <span className="year-of-birth">
          Year of birth:
          {' '}
          {yearOfBirth}
        </span>
      </Link>
    </>
  );
};

CharactersInfo.propTypes = {
  character: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CharactersInfo;
