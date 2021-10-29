import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addMovieInfo = createAsyncThunk('moviesInfo/addMovieInfo', async (all) => {
    axios.post('http://localhost/backend/add.php', all, { crossDomain: true })
        .then(res => console.log(res.data));
});

export const updateMovieInfo = createAsyncThunk('moviesInfo/addMovieInfo', async (all) => {
    axios.post('http://localhost/backend/update.php', all, { crossDomain: true })
        .then(res => console.log(res.data));
});

