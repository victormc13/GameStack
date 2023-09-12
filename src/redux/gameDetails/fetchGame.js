import { createAsyncThunk } from '@reduxjs/toolkit';

const apiKey = 'f64740ecca36488fb60f955ce2dc76fb';

const getGame = createAsyncThunk('game/getGame', async (id, thunkAPI) => {
  try {
    const resp = await fetch(`https://api.rawg.io/api/games/${id}?key=${apiKey}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ message: error.message });
  }
});

export default getGame;
