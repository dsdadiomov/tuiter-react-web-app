import React from 'react';
import ArrayIndexAndLength from './array-index-and-length';
import ForLoops from './for-loops';
import AddingAndRemovingDataToFromArrays from './adding-and-removing-data-to-from-arrays';
import MapFunction from './map-function';
import JSONStringify from "./json-stringify";
import FindFunction from "./find-function";
import FindIndexFunction from "./find-index";
import FilterFunction from './filter-function';

var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
];

const WorkingWithArrays = () => {
    return (
        <div>
            <h1>Working With Arrays</h1>
            <p>numberArray1: {numberArray1}</p>
            <p>stringArray1: {stringArray1}</p>
            <p>variableArray1: {variableArray1}</p>
            <ArrayIndexAndLength />
            <AddingAndRemovingDataToFromArrays />
            <ForLoops />
            <MapFunction />
            <JSONStringify />
            <FindFunction />
            <FindIndexFunction />
            <FilterFunction />
        </div>
    );
};

export default WorkingWithArrays;
