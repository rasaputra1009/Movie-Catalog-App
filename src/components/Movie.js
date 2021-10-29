import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/MovieCard.css"
import star from "../Images/star.png"
import starlight from "../Images/starlight.png"
import { useSelector, useDispatch } from 'react-redux'
import Home from './Home'
import { updateFavourite } from '../features/stateInfo/movieInfo'
import axios from 'axios'
import { fetchMovies } from '../features/movies/moviesThunk'

function Movie({ index, movie }) {
    const dispatch = useDispatch();
    let [click, setClick] = useState(0);
    const favClick = () => {
        setClick(1);
        axios.post('http://localhost/backend/updateFav.php', movie, { crossDomain: true })
            .then(res => console.log(res.data));
        dispatch(fetchMovies());
    }
    return (
        <div className="movie-card">
            <Link to="/movie-detail">
                <img className="poster" src={movie.imageUrl} alt="POSTER" />
            </Link>
            {console.log(movie.favourite)}
            <img className="favourite" src={(movie.favourite === "1") ? starlight : star} alt="NETWORK Error" onClick={favClick} />
            <div className="movie-info">
                <h1 className="title">{movie.title}</h1>
                <Link to={{
                    pathname:
                        `/edit/${movie.title}`,
                    state: {
                        name: movie.title
                    }
                }}>
                    <h1 className="edit">Edit</h1>
                </Link>
            </div>

        </div>
    )
}

export default Movie
