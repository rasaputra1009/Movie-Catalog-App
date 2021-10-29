import { createSlice} from "@reduxjs/toolkit";
import "../movies/moviesThunk"
import { fetchMovies } from "../movies/moviesThunk";
import { fetchSearchMovies } from "../movies/moviesThunk";

const initialState = {
    movies: [],
    searchMovies: []
};
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
        searchMovies: (state, { payload }) => {
            state.searchMovies = payload;
        }
    },
    extraReducers: {
        [fetchMovies.fulfilled]: (state, { payload }) => {
            return { ...state, movies: payload }
        },
        [fetchSearchMovies.fulfilled]: (state, { payload }) => {
            return { ...state, searchMovies: payload }
        },
        
    }
})

export const { addMovies, searchMovies } = movieSlice.actions
export const getMovies = (state) => state.movies.movies;
export const searchRes = (state) => state.movies.searchMovies;
export default movieSlice.reducer


// selector with reselect