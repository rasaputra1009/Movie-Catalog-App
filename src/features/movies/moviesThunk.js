import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await axios.get('http://localhost/backend/getData.php')
        .catch((err) => {
            console.log("Error:", err);
        });
    return response.data;
});
export const fetchSearchMovies = createAsyncThunk('movies/fetchSearchMovies', async (search) => {
    const response = await axios.get(`http://localhost/backend/getSearchData.php?link=${search}`)
        .catch((err) => {
            console.log("Error:", err);
        });
    return response.data;
});

