import React,{useEffect} from 'react'
import Movies from './Movies'
import { useDispatch,useSelector } from 'react-redux'
import { addMovies, getMovies } from '../features/movies/movieSlice'
import axios from 'axios'

function Home() {
    const movies=useSelector(getMovies);
    const dispatch=useDispatch();
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get('http://localhost/backend/getData.php')
            .catch((err)=>{
                console.log("Error:",err);
            });
            dispatch(addMovies(response.data));
        };
        fetchMovies();
    }, [])
    return (
        <div>
            <Movies />
        </div>
    )
}

export default Home
