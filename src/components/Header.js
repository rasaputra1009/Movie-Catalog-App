import React, { useEffect } from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";
import { updateSearch } from '../features/stateInfo/movieInfo';
import "../styles/Movies.css";
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../features/movies/movieSlice';
import { fetchSearchMovies } from '../features/movies/moviesThunk';
function Header() {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.movieInfo.search);
    useEffect(() => {
        if (search.length > 0) {
            setTimeout(() => {
                dispatch(fetchSearchMovies(search));
            }, 100);
        }
        else {
            dispatch(searchMovies([]));
        }
    }, [search])
    return (
        <div className="header">
            <Link to="/">
                <h1 className="header-left">Trending Movies</h1>
            </Link>
            <div className="header-right">
                <input type="text" placeholder="Search Movies" onChange={(e) => dispatch(updateSearch(e.target.value))} />
                <Link to="/add">
                    <h1 className="header-right-add">Add Now</h1>
                </Link>
            </div>
        </div >
    )
}
export default Header
