"use strict";

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];

    // make array
    for (let num = startIndex; num <= stopIndex; num++){
        numbers.push(num);
    }

    // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
    numbers.forEach(num => {
        if (num % 3 === 0) threeCallback();
        if (num % 5 === 0) fiveCallback();
    })
}

//If num divided by 3
function sayThree(){
    console.log("Three");
}

//If num divided by 5
function sayFive(){
    console.log("Five");
}


threeFive(10, 15, sayThree, sayFive);
  
// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive