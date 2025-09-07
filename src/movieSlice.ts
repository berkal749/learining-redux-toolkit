import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    { movie: "interstaller", id: 1 },
    { movie: "lol", id: 2 },
  ],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      const newMovie = {
        movie: action.payload,
        id: state.movies[state.movies.length - 1].id + 1,
      };
      state.movies.push(newMovie);
    },
    removeMovie: (state, action) => {
        console.log("lol")
      state.movies= state.movies.filter((movie) => movie.movie != action.payload);

    },
  },
});
export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
