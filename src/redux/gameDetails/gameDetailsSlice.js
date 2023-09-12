import { createSlice } from '@reduxjs/toolkit';
import getGame from './fetchGame';

const initialState = {
  game: {},
  isLoading: true,
  error: undefined,
};

const gameDetailsSlice = createSlice({
  name: 'game',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGame.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGame.fulfilled, (state, action) => {
        state.isLoading = false;
        state.game = action.payload;
      })
      .addCase(getGame.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default gameDetailsSlice.reducer;
