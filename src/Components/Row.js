import React, { useState, useEffect}from 'react'
import axios from '../axios.js'
import './Row.css'
const poster_url = 'http://image.tmdb.org/t/p/original/';

function Row({ title, fetchUrl, isLargeRow}) {
    
    const [movies, setMovies] = useState([]);
   

    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // console.log("hi",request.data.results);
            setMovies(request.data.results);
            return request
        };
        fetchData();
    }, [fetchUrl]);
    
    
    // console.log("hello",movies)
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {/* Several Posters */}
                {movies.map( (movie) => (
                    <img className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                    key={movie.id}
                    src={`${poster_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}></img>
                ))}
            </div>
            
        </div>
    )
}

export default Row;
