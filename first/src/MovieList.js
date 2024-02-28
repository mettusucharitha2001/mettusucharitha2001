// MovieList.js
import React from 'react';
import Movies from './Movies';

function MovieList() {
    return (
        <div className="movies-container">
            <Movies/>
            <Movies/>
            <Movies/>
        </div>
    );
}

export default MovieList;
