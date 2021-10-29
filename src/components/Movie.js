import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/MovieCard.css"
import star from "../Images/star.png"
import starlight from "../Images/starlight.png"
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { fetchMovies } from '../features/movies/moviesThunk'

function Movie({ index, movie }) {
    const dispatch = useDispatch();
    const favClick = () => {
        axios.post('http://localhost/backend/updateFav.php', movie, { crossDomain: true })
        dispatch(fetchMovies());
    }
    return (
        <div className="movie-card">
            <Link to="/movie-detail">
                <img className="poster" src={movie.imageUrl} alt="POSTER" />
            </Link>
            <button className="btn" onClick={favClick}>
                <img className="favourite" src={(movie.favourite === "1") ? starlight : star} alt="NETWORK Error" />
            </button>
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
