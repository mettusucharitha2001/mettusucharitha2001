// Movie.js
import React from 'react';

function Movie(props) {

    return (
        <div className="movie">
            <img src={props.url} alt="movies"/>
            <h2>{props.title}</h2>
        </div>
    );
}

export default Movie;
