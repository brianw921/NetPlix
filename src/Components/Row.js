import React, { useState, useEffect}from 'react'
import axios from '../axios.js'
import './Row.css'
const poster_url = 'http://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl}) {
    
    const [movies, setMovies] = useState([]);
   

    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log("hi",request.data.results);
            setMovies(request.data.results);
            return request
        };
        fetchData();
    }, [fetchUrl]);
    // if empty array, it runs once.
    
    console.log("hello",movies)
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {/* Several Posters */}
                {movies.map( (movie) => (
                    <img className = "row-poster"
                    src={`${poster_url}${movie.poster_path}`} alt={movie.name}></img>
                ))}
            </div>
            Title
            Container for Posters
        </div>
    )
}

export default Row;
