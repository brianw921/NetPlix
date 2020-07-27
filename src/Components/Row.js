import React, { useState, useEffect}from 'react'
import axios from '../axios.js'

function Row({ title, fetchUrl}) {
    // const [movies, setMovies] = useState([]);
    const [movies, setMovies] = useState([]);
    //context API

    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.log("hi",request)
            return request
        };
        fetchData();
    }, []);
    // if empty array, it runs once.
    
    console.log("hi")
    return (
        <div>
            <h2>{title}</h2>
            Title
            Container for Posters
        </div>
    )
}

export default Row;
