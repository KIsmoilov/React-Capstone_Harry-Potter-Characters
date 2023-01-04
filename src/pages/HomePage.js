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
      <div className="container">
        <h1>Harry Potter Characters</h1>
        <div className="input"><input className="inputField" placeholder="Search by name..." onChange={(e) => setSearch(e.target.value)} value={search} /></div>
      </div>
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
    </>
  );
};

export default Characters;
