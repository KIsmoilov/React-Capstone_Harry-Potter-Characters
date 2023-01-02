import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

// pages
import Navbar from './components/Navbar';
import { fetchCharacters } from './Redux/CharacterDetails';

// Stylesheet
import './App.css';
import Characters from './pages/HomePage';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchCharacters()).unwrap();

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Characters />} />
      </Routes>
    </>
  );
}

export default App;
