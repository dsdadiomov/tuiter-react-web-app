
import React from 'react';

let numberArray1 = [1, 2, 4, 5, 6];
const square = a => a * a;

const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);

const MapFunction = () => {
    return (
        <div>
            <h2>Working with Array Map Function</h2>
            <p>Squares: {squares}</p>
            <p>Cubes: {cubes}</p>
        </div>
    );
};

export default MapFunction;
