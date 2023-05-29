
import React from 'react';

const squares = [1, 4, 9, 16, 25, 36];

const JSONStringify = () => {
    return (
        <div>
            <h3>JSON Stringify</h3>
            <p>squares = { JSON.stringify(squares) }</p>
        </div>
    );
};

export default JSONStringify;
