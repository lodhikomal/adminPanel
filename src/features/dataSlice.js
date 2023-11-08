import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  movie: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});
export const { setMovie } = dataSlice.actions;
export const selectMovie = (state) => state.data.movie;

export default dataSlice.reducer;
