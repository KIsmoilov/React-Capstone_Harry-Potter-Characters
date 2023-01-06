import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// pages
import Navbar from './components/Navbar';
import { fetchCharacters } from './Redux/CharacterDetails';

// Stylesheet
import './App.css';
import Characters from './pages/HomePage';
import DetailsInfo from './pages/DetailsPage';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchCharacters()).unwrap();

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Characters />} />
        <Route exact path="/Details/:id" element={<DetailsInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
