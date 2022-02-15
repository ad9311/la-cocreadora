import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rating: 0,
  next: false,
};

const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    selectRating: (state, action) => ({
      rating: action.payload,
      next: state.next,
    }),
    nextPage: (state) => ({
      rating: state.rating,
      next: !state.next,
    }),
  },
});

export const { selectRating, nextPage } = ratingSlice.actions;
export default ratingSlice;
