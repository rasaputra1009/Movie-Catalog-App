import React from 'react'
import { useSelector } from 'react-redux'
import { getMovies } from '../features/movies/movieSlice'
import Movie from './Movie';
import "../styles/Movies.css"
function Movies() {
    let movies = useSelector(getMovies);
    return (
        <div className="movies">
            {(movies.map((movie, index) => <Movie key={index} movie={movie} />))};
        </div>
    )
}

export default Movies
