import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Stylesheet
import './Home.css';

const CharactersInfo = ({ character }) => {
  const {
    name, image, yearOfBirth,
  } = character;
  let url;
  if (character.id) {
    url = `/Details/${character.id}`;
  } else {
    url = '/';
  }

  return (
    <>
      <Link className="link" to={url} key={character.id}>
        <h2 className="name">{name}</h2>
        <div className="actor-image-section">
          <img className="actor-img" src={image} alt={name} />
        </div>
        <span className="year-of-birth">
          Year of birth:
          {' '}
          {(yearOfBirth !== null) ? `${yearOfBirth}` : 'xxxx' }
        </span>
      </Link>
    </>
  );
};

CharactersInfo.propTypes = {
  character: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CharactersInfo;
