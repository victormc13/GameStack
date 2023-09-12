import { createSlice } from '@reduxjs/toolkit';
import getGenres from './fetchGenres';

const initialState = {
  genres: [],
  isLoading: true,
  error: undefined,
};

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.isLoading = false;
        state.genres = action.payload;
      })
      .addCase(getGenres.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default genresSlice.reducer;
