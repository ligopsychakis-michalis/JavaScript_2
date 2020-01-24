"use strict";
function doubleEvenNumbers(number){
    const newNumbers = number
        .filter(num => num % 2 === 0)  //use filter to keep only even numbers
        .map(num => num * 2);  //use map to multiply the evenNumbers
    return newNumbers;    
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers));