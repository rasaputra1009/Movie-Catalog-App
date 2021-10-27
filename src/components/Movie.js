import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/MovieCard.css"

function Movie({ index, movie }) {
    return (
        <div className="movie-card">
            <Link to="/movie-detail">
                <img className="poster" src={movie.imageUrl} alt="POSTER" />
            </Link>
            <div className="movie-info">
                <h1 className="title">{movie.title}</h1>
                <Link to={{
                    pathname: `/edit/${movie.title}`,
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
