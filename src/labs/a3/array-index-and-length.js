import React from 'react';

let numberArray1 = [1, 2, 3, 4, 5];
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);

const ArrayIndexAndLength = () => {
    return (
        <div>
            <h3>Working with Array Index and Length</h3>
            <p>numberArray1: {numberArray1}</p>
            <p>Length of numberArray1: {length1}</p>
            <p>Index of 3 in numberArray1: {index1}</p>
        </div>
    );
};

export default ArrayIndexAndLength;
