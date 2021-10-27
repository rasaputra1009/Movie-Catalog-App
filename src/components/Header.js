import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Header.css';
import { Link } from "react-router-dom";
import { updateSearch } from '../features/movies/movieInfo';
import Movie from './Movie';
import "../styles/Movies.css";
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../features/movies/movieSlice';
import { useHistory } from 'react-router-dom';
function Header() {
    const dispatch = useDispatch();
     const history = useHistory();
     console.log(typeof history)
    // const [searchres, setSearch] = useState([]);
    const search = useSelector((state) => state.movieInfo.search);
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get(`http://localhost/backend/getSearchData.php?link=${search}`)
                .catch((err) => {
                    console.log("Error:", err);
                });
            dispatch(searchMovies(response.data));
        };
        if(search.length>0)
        {   
            setTimeout(()=>{
                fetchMovies();
            },100);
            history.push(`?search={${search}}`);
        }
        else{
            dispatch(searchMovies([]));
            history.push("");
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
        </div>
    )
}

export default Header
