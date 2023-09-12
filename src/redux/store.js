import { configureStore } from '@reduxjs/toolkit';
import genresReducer from './byGenres/genresSlice';
import gameDetailsReducer from './gameDetails/gameDetailsSlice';
import platformsReducer from './byPlatforms/platformsSlice';

const store = configureStore({
  reducer: {
    genres: genresReducer,
    game: gameDetailsReducer,
    platforms: platformsReducer,
  },
});

export default store;
