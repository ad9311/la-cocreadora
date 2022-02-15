import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { postScore } from '../../api/fetchAPI';

const RATE_CHALLENGE = 'challenges/rate_challenge';

const initialState = {
  rating: 0,
  next: false,
  confirmation: '',
};

export const rateChallenge = createAsyncThunk(RATE_CHALLENGE, async (scoreData) => postScore(scoreData));

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    selectRating: (state, action) => ({
      rating: action.payload,
      next: state.next,
      confirmation: '',
    }),
    nextPage: (state) => ({
      rating: state.rating,
      next: !state.next,
      confirmation: '',
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(rateChallenge.fulfilled, (state, action) => ({
        rating: state.rating,
        next: state.next,
        confirmation: action.payload,
      }));
  },
});

export const { selectRating, nextPage } = ratingSlice.actions;
export default ratingSlice;
