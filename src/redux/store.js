import { configureStore } from '@reduxjs/toolkit';
import genresReducer from './byGenres/genresSlice';
import gameDetailsReducer from './gameDetails/gameDetailsSlice';

const store = configureStore({
  reducer: {
    genres: genresReducer,
    game: gameDetailsReducer,
  },
});

export default store;
