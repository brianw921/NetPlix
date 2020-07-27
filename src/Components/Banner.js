import React, { useState, useEffect} from 'react';
import axios from '../axios.js';
import requests from '../requests.js'
function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            //Select a random movie from an array of movies 
            let idx = Math.floor(Math.random() * request.data.results.length - 1)
            setMovie( request.data.results[idx])
        };
        fetchData();
    }, []);
    
    console.log("MOVIE", movie)

    return (
        <header className="banner"
            style={{
                backgroundSize: "coover", backgroundImage: `url('http://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,backgroundPosition: 'center center'
            }}
        > 
            <div className="banner-contents">
                HELLO
                <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
            </div>
            {/* Header is background image */}
            {/* title */}
            {/* div with two buttons "Play" "MyList" */}
            {/* description */}
        </header>
    )
}

export default Banner
