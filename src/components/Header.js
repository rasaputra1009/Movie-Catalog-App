import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";
import { updateSearch } from '../features/movies/movieInfo';
import { useDispatch, useSelector } from 'react-redux';
function Header() {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.movieInfo.search);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
    }
    return (
        <div className="header">
            <Link to="/">
                <h1 className="header-left">Trending Movies</h1>
            </Link>
            <div className="header-right">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search Movies" onChange={(e)=>dispatch(updateSearch(e.target.value)) } />
                </form>
                <Link to="/add">
                    <h1 className="header-right-add">Add Now</h1>
                </Link>
            </div>
        </div>
    )
}

export default Header
