import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    title: "",
    description: "",
    imagepathurl: "",
    cast: "",
    search: "",
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
            state.favourite = 1 - payload;
        },
        updateSearch: (state, { payload }) => {
            state.search = payload
        },
        updateStateInfo: (state, { payload: { title, description, imageUrl,cast } }) => (
                state.title=title,
                state.description = description,
                state.imagepathurl = imageUrl,
                state.cast = cast
        )
    }
})

export const { updateCast, updateDescription, updateTitle, updateFavourite, updateImagePathUrl, updateSearch,updateStateInfo } = movieInfo.actions
export default movieInfo.reducer



//