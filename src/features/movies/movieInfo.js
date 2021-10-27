import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    title: "",
    description: "",
    imagepathurl: "",
    cast: "",
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
    }
})

export const { updateCast, updateDescription, updateTitle, updateFavourite, updateImagePathUrl } = movieInfo.actions
export const obj=(state)=>state.movieInfo;
export default movieInfo.reducer
