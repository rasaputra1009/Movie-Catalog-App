import React from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {updateCast, updateDescription, updateFavourite, updateImagePathUrl, updateTitle} from '../features/movies/movieInfo'

function Form() {
    const dispatch = useDispatch();
    let title=useSelector((state) => state.movieInfo.title);
    let description=useSelector((state)=>state.movieInfo.description);
    let imagepathurl=useSelector((state)=>state.movieInfo.imagepathurl);
    let cast=useSelector((state)=>state.movieInfo.cast);
    let favourite=useSelector((state)=>state.movieInfo.favourite)
    const formSubmit = (e) => {
        e.preventDefault();
        const obj = {
            title,imagepathurl,description,cast,favourite
        }
        axios.post('http://localhost/backend/add.php', obj, { crossDomain: true })
            .then(res => console.log(res.data));
    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                <label htmlFor="title">Name</label><br />
                <input type="text" placeholder="Movie-Name" name="title" onChange={(e) => dispatch(updateTitle(e.target.value))} required />             <br />
                <label htmlFor="description">Description</label><br />
                <textarea col="40" rows="5" type="text" name="description" placeholder="Tell us a bit about movie" onChange={(e) => dispatch(updateDescription(e.target.value))} required /><br />
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
