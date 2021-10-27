import React from 'react'
import { useSelector } from 'react-redux'
import { getMovies, searchRes } from '../features/movies/movieSlice'
import movieInfo from '../features/movies/movieInfo';
import Movie from './Movie';
import "../styles/Movies.css"
function Movies() {
    let movies = useSelector(getMovies);
    let searchResults=useSelector(searchRes);
    let search=useSelector((state)=>state.movieInfo.search);
    return (
        <div className="movies">
           {(search.length===0 && searchResults.length===0)? (movies.map((movie, index) => <Movie key={index} movie={movie} />)):
           ((search.length>0 && searchResults.length===0)?(<h1>No Movie Found</h1>):(searchResults.map((movie, index) => <Movie key={index} movie={movie} />)))};

        </div>
    )
}

export default Movies
