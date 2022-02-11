import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import fetchAPI from '../../api/fetchAPI.js';

const FETCH_CHALLENGES = 'challenges/fetchChallenges';

const initialState = {
  status: 'default',
  challenges: '',
};

export const fetchChallenges = createAsyncThunk(FETCH_CHALLENGES, async () => {
  return await fetchAPI();
});

const challengesSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchChallenges.fulfilled, (_state, action) => ({
          status: 'ready',
          challenges: action.payload,
        }));
  },
});

export default challengesSlice;