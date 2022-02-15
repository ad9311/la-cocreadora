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
  openScore: false,
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
      openScore: state.openScore,
    }),
    openScoreModal: (state) => ({
      status: state.status,
      challenges: state.challenges,
      selected: state.selected,
      openScore: !state.openScore,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChallenges.fulfilled, (state, action) => ({
        status: 'ready',
        challenges: action.payload,
        selected: state.selected,
        openScore: state.openScore,
      }));
  },
});

export const { selectChallenge, openScoreModal } = challengesSlice.actions;
export default challengesSlice;
