import { configureStore } from "@reduxjs/toolkit";
import movieInfo from "./movies/movieInfo";
import movieReducer from "./movies/movieSlice";

export const store=configureStore({
    reducer:{
        movies:movieReducer,
        movieInfo:movieInfo
    }
})