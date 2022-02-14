import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchAPI from '../../api/fetchAPI';

const FETCH_CHALLENGES = 'challenges/fetchChallenges';

const initialState = {
  status: 'default',
  challenges: {
    message: '',
    data: [],
  },
  selected: {},
};

export const fetchChallenges = createAsyncThunk(FETCH_CHALLENGES, async () => fetchAPI());

const challengesSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {
    selectChallenge: (state, action) => ({
      status: 'selected',
      challenges: state.challenges,
      selected: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChallenges.fulfilled, (state, action) => ({
        status: 'ready',
        challenges: action.payload,
        selected: state.selected,
      }));
  },
});

export const { selectChallenge } = challengesSlice.actions;
export default challengesSlice;
