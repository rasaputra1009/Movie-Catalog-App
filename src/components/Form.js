import React from 'react'
import axios from 'axios';
import "../styles/Form.css";
import { useSelector, useDispatch } from 'react-redux';
import { updateCast, updateDescription, updateImagePathUrl, updateTitle } from '../features/movies/movieInfo'

function Form({name,edit}){
    const dispatch = useDispatch()
    let all = useSelector(state => state.movieInfo);
    const formSubmit = (e) => {
        e.preventDefault();
        if (!edit) {
            axios.post('http://localhost/backend/add.php', all, { crossDomain: true })
                .then(res => console.log(res.data));
        }
        else {
            dispatch(updateTitle(name.title));
            axios.post('http://localhost/backend/update.php',all, { crossDomain: true })
                .then(res => console.log(res.data));
        }
    }
    return (
        <div>
            <form onSubmit={formSubmit} className="form">
                {!edit?(<h1 className="formTitle">Add New Movie</h1>):(<h1 className="formTitle">Editing Movie {name.title}</h1>)};
                <hr />
                <label htmlFor="title">Name</label><br />
                {!edit ? (<input type="text" placeholder="Movie-Name" name="title" onChange={(e) => dispatch(updateTitle(e.target.value))} required />) : (<input type="text" value={name.title} readOnly />)}<br />
                <label htmlFor="description">Description</label><br />
                {edit?(<textarea col="70" rows="5" type="text" value={name.description} name="description" placeholder="Tell us a bit about movie" onChange={(e) => dispatch(updateDescription(e.target.value))} required />):(<textarea col="70" rows="5" type="text"  name="description" placeholder="Tell us a bit about movie" onChange={(e) => dispatch(updateDescription(e.target.value))} required/>)}<br />
                <label htmlFor="imageUrl">ImagePathUrl</label><br />
                {edit?(<input type="text" name="imageUrl" value={name.imageUrl} onChange={(e) => dispatch(updateImagePathUrl(e.target.value))} />):(<input type="text" name="imageUrl" onChange={(e) => dispatch(updateImagePathUrl(e.target.value))} required />)}<br />
                <label htmlFor="cast">cast</label><br />
                {edit?(<input type="text" name="cast" value={name.cast} onChange={(e) => dispatch(updateCast(e.target.value))} />):(<input type="text" name="cast" onChange={(e) => dispatch(updateCast(e.target.value))} required />)}<br />
                <button onSubmit={formSubmit}>Submit</button>
            </form>
        </div>
    )
}
Form.defaultProps = {
   edit:false
  }
export default Form
