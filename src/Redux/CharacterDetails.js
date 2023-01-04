import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Utils
import pick, { addId } from './utils';

// API

const BASE_URL = 'https://hp-api.onrender.com/api/characters';

// Actions
const FETCH_CHARACTERS = 'Characters/FETCH_CHARACTERS';

// Reducer
const initialState = [];

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_CHARACTERS}/fulfilled`:
      return [...action.payload];
    default:
      return state;
  }
}

// Action Creators
export const fetchCharacters = createAsyncThunk(FETCH_CHARACTERS, async () => {
  const response = await axios.get(BASE_URL);
  const { data } = response;
  let characters = [];
  const selectedData = ['name', 'image', 'yearOfBirth', 'dateOfBirth', 'actor', 'gender', 'species', 'house', 'ancestry', 'eyeColour', 'hairColour', 'patronus', 'hogwartsStudent', 'hogwartsStaff'];

  data.forEach((object) => {
    characters.push(pick(object, selectedData));
  });
  characters = addId(characters);
  return characters.slice(0, 25);
});
