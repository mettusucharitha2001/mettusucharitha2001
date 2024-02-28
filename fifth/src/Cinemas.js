import React from 'react';
import Cinema from './Cinema';

function Cinemas() {
    let name = ["Bahubali", "rrr", "ss"];
    let age = [20, 25, 30];
    return (
        <div>
            {name.map((n, index) => (
                <Cinema key={index} nam={n} ages={age[index]} />
            ))}
        </div>
    );
}

export default Cinemas;
