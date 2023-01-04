import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

// Components
import Details from '../components/Details';

// Stylesheet

const DetailsInfo = () => {
  const details = useSelector((state) => state.Characters);
  const { id } = useParams();
  const character = details.find((character) => character.id === id);
  return (
    <>
      <div className="container">
        <div className="details-main-section">
          <Details
            key={character.id}
            character={character}
          />
        </div>
      </div>
    </>
  );
};

export default DetailsInfo;
