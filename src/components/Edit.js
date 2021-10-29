import React, { useEffect } from 'react'
import Form from './Form';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../features/movies/movieSlice';
import { fetchMovies } from '../features/movies/moviesThunk';
function Edit() {
  let { title } = useParams();
  let movies = useSelector(getMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    if (movies.length === 0) {
      dispatch(fetchMovies())
    }
  });
  const [movieEdit] = movies.filter((movie) => (movie.title === title));
  if (!movies.length) { return null }
  console.log("hello");
  return (
    <div>
      <Form name={movieEdit} edit />
    </div>
  )
}
export default Edit
