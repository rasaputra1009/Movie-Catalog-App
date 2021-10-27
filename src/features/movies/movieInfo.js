import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    title: "",
    description: "",
    imagepathurl: "",
    cast: "",
    search:"",
    favourite: 0,
};
const movieInfo = createSlice({
    name: "moviesInfo",
    initialState,
    reducers: {
        updateTitle: (state, { payload }) => {
            state.title = payload
        },
        updateDescription: (state, { payload }) => {
            state.description = payload
        },
        updateImagePathUrl: (state, { payload }) => {
            state.imagepathurl = payload
        },
        updateCast: (state, { payload }) => {
            state.cast = payload
        },
        updateFavourite: (state, { payload }) => {
            state.favourite = payload
        },
        updateSearch:(state,{payload})=>{
            state.search=payload
        }
    }
})

export const { updateCast, updateDescription, updateTitle, updateFavourite, updateImagePathUrl ,updateSearch} = movieInfo.actions
export const obj=(state)=>state.movieInfo;
export default movieInfo.reducer
