import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

// Components
import Details from '../components/Details';

// Stylesheet

import './DetailsPage.css';

const DetailsInfo = () => {
  const details = useSelector((state) => state.Characters);
  const { id } = useParams();
  const character = details.find((character) => character.id === id);
  return (
    <>
      <div className="details-main-section">
        <Details
          character={character}
        />
      </div>
    </>
  );
};

export default DetailsInfo;
