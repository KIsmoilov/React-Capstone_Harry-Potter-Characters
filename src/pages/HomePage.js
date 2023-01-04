import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// Components
import CharactersInfo from '../components/Home';

// Stylesheet
import './HomePage.css';

const Characters = () => {
  const characters = useSelector((state) => state.Characters);
  const [search, setSearch] = useState('');

  return (
    <>
      <div>
        <input className="inputField" onChange={(e) => setSearch(e.target.value)} value={search} />
        <div className="container">
          <div className="characters-main-section">
            {characters.filter((character) => character.name.toLowerCase()
              .includes(search.toLowerCase()))
              .map((character) => (
                <CharactersInfo
                  key={character.id}
                  character={character}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Characters;
