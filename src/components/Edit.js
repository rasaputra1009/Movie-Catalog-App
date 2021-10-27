import React, { useEffect } from 'react'
import Form from './Form';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { addMovies } from '../features/movies/movieSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../features/movies/movieSlice';
function Edit() {
  let { title } = useParams();
  let movies = useSelector(getMovies);
  const dispatch = useDispatch();
  let movieEdit = {};
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('http://localhost/backend/getData.php')
        .catch((err) => {
          console.log("Error:", err);
        });
      dispatch(addMovies(response.data));
    };
    if (!movies.length) {
      fetchMovies();
    }
  });
  movieEdit = movies.filter((movie) => (movie.title === title));
  return (
    <div>
      {(movies.length > 0) ? (<Form name={movieEdit[0]} edit={true} />) : ("null")}
    </div>
  )
}
export default Edit
