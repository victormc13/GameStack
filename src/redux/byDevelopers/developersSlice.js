import { createSlice } from '@reduxjs/toolkit';
import getDevelopers from './fetchDevelopers';

const initialState = {
  developers: [],
  isLoading: true,
  error: undefined,
};

const developersSlice = createSlice({
  name: 'developers',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDevelopers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDevelopers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.developers = action.payload;
      })
      .addCase(getDevelopers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default developersSlice.reducer;
