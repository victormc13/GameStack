import { configureStore } from '@reduxjs/toolkit';
import genresReducer from './byGenres/genresSlice';
import gameDetailsReducer from './gameDetails/gameDetailsSlice';
import platformsReducer from './byPlatforms/platformsSlice';
import creatorsReducer from './byCreators/creatorsSlice';
import developersReducer from './byDevelopers/developersSlice';

const store = configureStore({
  reducer: {
    genres: genresReducer,
    game: gameDetailsReducer,
    platforms: platformsReducer,
    creators: creatorsReducer,
    developers: developersReducer,
  },
});

export default store;
