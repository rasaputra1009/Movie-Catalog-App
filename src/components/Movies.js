import React from 'react'
import { useSelector } from 'react-redux'
import { getallMovies } from '../features/movies/movieSlice'
import Movie from './Movie';
function Movies() {
    let movies=useSelector(getallMovies);
    return (
        <div>
           {/* {movies.map((movie,index)=>(
               <Movie key={index} data={movie}/>
           ))} */}
           {console.log(movies)}
        </div>
    )
}

export default Movies
