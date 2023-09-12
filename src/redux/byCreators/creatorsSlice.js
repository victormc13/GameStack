import { createSlice } from "@reduxjs/toolkit";
import getCreators from './fetchCreators';

const initialState = {
  creators: [],
  isLoading: true,
  error: undefined,
}

const creatorsSlice = createSlice({
  name: 'creators',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCreators.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCreators.fulfilled, (state, action) => {
        state.isLoading = false;
        state.creators = action.payload;
      })
      .addCase(getCreators.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})

export default creatorsSlice.reducer;