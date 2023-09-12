import { createSlice } from '@reduxjs/toolkit';
import getPlatforms from './fetchPlatforms';

const initialState = {
  platforms: [],
  isLoading: true,
  error: undefined,
};

const platformsSlice = createSlice({
  name: 'platforms',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPlatforms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPlatforms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.platforms = action.payload;
      })
      .addCase(getPlatforms.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default platformsSlice.reducer;
