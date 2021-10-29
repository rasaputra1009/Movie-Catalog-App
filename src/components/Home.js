import React,{useEffect} from 'react'
import Movies from './Movies'
import { useDispatch} from 'react-redux'
import { fetchMovies } from '../features/movies/moviesThunk'

function Home() {
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(fetchMovies());
    })
    return (
        <div>
            <Movies />
        </div>
    )
}
export default Home
