import React, { useState } from 'react'
import axios from 'axios';
import Form from './Form';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getMovies } from '../features/movies/movieSlice';


function Edit() {
    let location = useLocation();
    let name = location.state.name;
    let movies = useSelector(getMovies);
    return (
        <div>
          <Form />
        </div>
    )
}

export default Edit










  // const [title, setTitle] = useState("");
    // const [imageUrl, setImageUrl] = useState("");
    // const [des, setDes] = useState("");
    // const [cast, setCast] = useState("");
    // const [favourite, setFavourite] = useState(0);
    // let movie = movies.filter((movie, index) => movie.title === name);
    // setTitle(movie[0].title);
    // setImageUrl(movie[0].imageUrl);
    // setDes(movie[0].description);
    // setCast(movie[0].cast);