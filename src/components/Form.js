import React from 'react'
import axios from 'axios';
import "../styles/Form.css";
import { useSelector, useDispatch } from 'react-redux';
import { updateCast, updateDescription, updateImagePathUrl, updateTitle } from '../features/movies/movieInfo'
import { getMovies } from '../features/movies/movieSlice';

function Form({name}) {
    const dispatch = useDispatch();
    let movies = useSelector(getMovies);
    let all = useSelector(state => state.movieInfo);
    let edit = false;
    let movieEdit = {};
    let title=name;
    if (title) {
        edit = true;
        movieEdit = movies.filter((movie) => (movie.title === title));
    }
    const formSubmit = (e) => {
        e.preventDefault();
        if (!edit) {
            axios.post('http://localhost/backend/add.php', all, { crossDomain: true })
                .then(res => console.log(res.data));
        }
        else {
            dispatch(updateTitle(title));
            axios.post('http://localhost/backend/update.php', all, { crossDomain: true })
                .then(res => console.log(res.data));
        }
    }
    return (
        <div>
            <form onSubmit={formSubmit} className="form">
                <h1 className="formTitle">New Movie</h1>
                <hr />
                <label htmlFor="title">Name</label><br />
                {!edit ? (<input type="text" placeholder="Movie-Name" name="title" onChange={(e) => dispatch(updateTitle(e.target.value))} required />) : (<input type="text" value={title} readOnly />)}<br />
                <label htmlFor="description">Description</label><br />
                <textarea col="70" rows="5" type="text" name="description" placeholder="Tell us a bit about movie" onChange={(e) => dispatch(updateDescription(e.target.value))} required /><br />
                <label htmlFor="imageUrl">ImagePathUrl</label><br />
                <input type="text" name="imageUrl" onChange={(e) => dispatch(updateImagePathUrl(e.target.value))} required /><br />
                <label htmlFor="cast">cast</label><br />
                <input type="text" name="cast" onChange={(e) => dispatch(updateCast(e.target.value))} required /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Form
