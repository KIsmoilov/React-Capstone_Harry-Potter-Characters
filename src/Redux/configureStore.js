import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './CharacterDetails';

const store = configureStore({
  reducer: {
    Characters: characterReducer,
  },
});

export default store;
