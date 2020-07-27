import React, { useState, useEffect} from 'react';
import axios from '../axios.js';
import requests from '../requests.js';
import '../Components/Banner.css';
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

    const truncate = (str, n) => ( str?.length > n ? str.substr(0, n-1) + "..." : str)

    return (
        <header className="banner"
            style={{
                backgroundSize: "coover", backgroundImage: `url('http://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,backgroundPosition: 'center center'
            }}
        > 
            <div className="banner-contents">
                <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                </div>
                <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
            </div>
            
            {/* description */}
        </header>
    )
}

export default Banner
