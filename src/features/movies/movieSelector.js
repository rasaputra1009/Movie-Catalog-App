import { createSelector } from "reselect";
import {initialState, searchMovies} from "./movieSlice";

const selectMovies = (state) => state.movies;
const search = (state) => state.movieInfo.search;

export const makeSelectAllMovies=()=>createSelector(
    selectMovies,
    (movieState)=>movieState.movies,
)
export const makeSelectSearchText=()=>createSelector(
    selectMovies,
    (movieState)=>movieState.searchText,
)
export const makeSelectSearchMovies=()=>createSelector(
    makeSelectAllMovies(),
    makeSelectSearchText(),
    (movies,search)=>{
        return searchMovies((!search ? movies:movies.filter(({title})=>title.toLowerCase().includes(search.toLowerCase()))))
    }
)
