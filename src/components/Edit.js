import React, { useEffect } from 'react'
import Form from './Form';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { addMovies } from '../features/movies/movieSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../features/movies/movieSlice';
import { updateCast, updateDescription, updateImagePathUrl, updateTitle } from '../features/movies/movieInfo'
function Edit() {
  let { title } = useParams();
  let movies = useSelector(getMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('http://localhost/backend/getData.php')
        .catch((err) => {
          console.log("Error:", err);
        });
      dispatch(addMovies(response.data));
    };
     if (movies.length===0) {
    fetchMovies();
    } 
  });
  const [movieEdit] = movies.filter((movie) => (movie.title === title));
  if (!movies.length) { return null }
  return (
    <div>
      <Form name={movieEdit} edit />
    </div>
  )
}
export default Edit
