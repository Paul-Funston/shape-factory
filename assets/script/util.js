'use strict';
/*
    JavaScript Basics
    Paul Funston

    Utility Functions
*/

// working with DOM
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}


// get a random number from a to b inclusive
function numFrom(a, b) {
    return Math.trunc(Math.random() * (b - (a + 1)) + a);
}

// Print
function print(arg) {
    console.log(arg);
}

function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
} 



export {select, onEvent, selectAll, sleep, numFrom, print};