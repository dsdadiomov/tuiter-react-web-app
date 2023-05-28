import React from 'react';

const multiply = (a, b) => a * b;

function ImpliedReturn() {
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);

  return (
    <>
      <h3>ES6 arrow functions with implied return</h3>
      fourTimesFive = { fourTimesFive }<br />
      multiply(4, 5) = { multiply(4, 5) }<br />
    </>
  )
}

export default ImpliedReturn;
