import { createSlice } from "@reduxjs/toolkit";
const initialState={
    movies:[],
    searchMovies:[]
};
const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies=payload;
        },
        searchMovies:(state,{payload})=>{
            state.searchMovies=payload;
        }
    }
})

export const { addMovies,searchMovies } =movieSlice.actions
export const getMovies=(state)=>state.movies.movies;
export const searchRes=(state)=>state.movies.searchMovies;
export default movieSlice.reducer


// selector with reselect