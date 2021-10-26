import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    title: "",
    description: "",
    imagepathurl: "",
    cast: "",
    favourite: 0
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
export const title = ((state) => state.movieInfo.title);
export const description = ((state) => state.movieInfo.description);
export const imagepathurl = ((state) => state.movieInfo.imagepathurl);
export const cast = ((state) => state.movieInfo.cast);
export const favourite = ((state) => state.movieInfo.favourite);

export default movieInfo.reducer
