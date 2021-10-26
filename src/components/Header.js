import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <h1 className="header-left">Trending Movies</h1>
            </Link>
            <div className="header-right">
                <input type="text" placeholder="Search Movies" />
                <Link to="/add">
                    <h1>Add Now</h1>
                </Link>
            </div>
        </div>
    )
}

export default Header
