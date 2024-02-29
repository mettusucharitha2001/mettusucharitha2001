// MovieList.js 
import React from 'react';
import Movies from './Movies';
import Movies1 from './Movies1';
import Movies2 from './Movies2';

function MovieList() {
    return (
        
        <div  className="movies-container">
            <h1>popular on Netflix</h1>
            <Movies/>
            <h1>US Tv Shows</h1>
            <Movies1/>
            <h1>TV Comedies</h1>
            <Movies2/>
        </div>
    );
}

export default MovieList;











