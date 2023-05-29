
import React from 'react';

let stringArray1 = ['string1', 'string2'];
let stringArray2 = [];

for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    stringArray2.push(string1.toUpperCase());
}

const ForLoops = () => {
    return (
        <div>
            <h3>Working with For Loops</h3>
            <p>stringArray1: {stringArray1}</p>
            <p>stringArray2: {stringArray2}</p>
        </div>
    );
};

export default ForLoops;
