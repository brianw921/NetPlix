import React, { useState }from 'react'

function Row({title}) {
    const [movies, setMovies] = useState([]);
    console.log("hi", title)
    //context API
    return (
        <div>
            <h2>{title}</h2>
            Title
            Container for Posters
        </div>
    )
}

export default Row;
