import React, { useEffect } from 'react'
import axios from 'axios';
import "../styles/Form.css";
import { useSelector, useDispatch } from 'react-redux';
import { updateCast, updateDescription, updateImagePathUrl, updateTitle } from '../features/movies/movieInfo'

function Form({ name, edit }) {
    const dispatch = useDispatch();
    const all=useSelector((state)=>state.movieInfo);
    const title = useSelector(state => state.movieInfo.title);
    const description = useSelector(state => state.movieInfo.description);
    const imagepathurl = useSelector(state => state.movieInfo.imagepathurl);
    const cast = useSelector(state => state.movieInfo.cast);
    useEffect(()=>{
        if(edit)
        {
            dispatch(updateTitle(name.title));
            dispatch(updateDescription(name.description));
            dispatch(updateImagePathUrl(name.imageUrl));
            dispatch(updateCast(name.cast));
        }
    },[]);
    const formSubmit = (e) => {
        e.preventDefault();
        if (!edit) {
            axios.post('http://localhost/backend/add.php', all, { crossDomain: true })
                .then(res => console.log(res.data));
        }
        else {
            axios.post('http://localhost/backend/update.php', all, { crossDomain: true })
                .then(res => console.log(res.data));
        }
        dispatch(updateTitle(""));
        dispatch(updateDescription(""));
        dispatch(updateImagePathUrl(""));
        dispatch(updateCast(""));
    }
    return (
        <div>
            <form onSubmit={formSubmit} className="form">
                {!edit ? (<h1 className="formTitle">Add New Movie</h1>) : (<h1 className="formTitle">Editing Movie {name.title}</h1>)};
                <hr />
                <label htmlFor="title">Name</label><br />
                {edit ? (<input type="text" value={title} name="title" />) : (<input type="text" placeholder="Enter Title" onChange={(e)=>dispatch(updateTitle(e.target.value))} required />)}<br />
                <label htmlFor="description">Description</label><br />
                {edit ? (<textarea col="70" rows="5" type="text" value={description} name="description"  onChange={(e) => dispatch(updateDescription(e.target.value))} />) : (<textarea col="70" rows="5" type="text" name="description" placeholder="Tell us a bit about movie" onChange={(e) => dispatch(updateDescription(e.target.value))} required />)}<br />
                <label htmlFor="imageUrl">ImagePathUrl</label><br />
                {edit ? (<input type="text" name="imageUrl" value={imagepathurl} onChange={(e) => dispatch(updateImagePathUrl(e.target.value))} />) : (<input type="text" name="imageUrl" onChange={(e) => dispatch(updateImagePathUrl(e.target.value))} required />)}<br />
                <label htmlFor="cast">cast</label><br />
                {edit ? (<input type="text" name="cast" value={cast} onChange={(e) => dispatch(updateCast(e.target.value))} />) : (<input type="text" name="cast" onChange={(e) => dispatch(updateCast(e.target.value))} required />)}<br />
                <button onSubmit={formSubmit}>Submit</button>
            </form>
        </div>
    )
}
Form.defaultProps = {
    edit: false
}
export default Form
