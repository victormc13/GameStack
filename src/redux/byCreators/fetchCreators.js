import { createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = 'f64740ecca36488fb60f955ce2dc76fb';
const url = `https://api.rawg.io/api/creators?key=${apiKey}`;

const getCreators = createAsyncThunk('creators/getCreators', async (thunkAPI) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data.results;
  } catch (error) {
    return thunkAPI.rejectWithValue({ message: error.message });
  }
});

export default getCreators;
