import React from 'react'
import { useSelector } from 'react-redux'
import { getMovies } from '../features/movies/movieSlice'
import Movie from './Movie';
import "../styles/Movies.css"
function Movies() {
    let movies = useSelector(getMovies);
    return (
        <div className="movies">
            {(movies.map((movie, index) => <Movie index={index} movie={movie} />))};
            {/* {console.log(movies)} */}
        </div>
    )
}

export default Movies
