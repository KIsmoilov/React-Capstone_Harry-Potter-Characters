import React from 'react';
import { useSelector } from 'react-redux';

// Components
import CharactersInfo from '../components/Home';

// Stylesheet

const Characters = () => {
  const characters = useSelector((state) => state.Characters);

  return (
    <>
      <div className="rockets-main-section">
        {characters.map((character) => (
          <CharactersInfo
            key={character.id}
            character={character}
          />
        ))}
      </div>
    </>
  );
};

export default Characters;
