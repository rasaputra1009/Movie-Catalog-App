import React, { useEffect } from 'react';
import axios from 'axios';
import '../styles/Header.css';
import { Link } from "react-router-dom";
import { updateSearch } from '../features/movies/movieInfo';
import "../styles/Movies.css";
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../features/movies/movieSlice';
function Header() {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.movieInfo.search);
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get(`http://localhost/backend/getSearchData.php?link=${search}`)
                .catch((err) => {
                    console.log("Error:", err);
                });
            dispatch(searchMovies(response.data));
        };
        if (search.length > 0) {
            setTimeout(() => {
                fetchMovies();
            }, 100);
            let params = new URLSearchParams();
            params.append('search',search);
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
