import React from 'react';
import { useDispatch } from 'react-redux';

// pages
import Navbar from './components/Navbar';
import { fetchCharacters } from './Redux/CharacterDetails';

// Stylesheet
import './App.css';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchCharacters()).unwrap();

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
