"use strict"

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

function theLemonsOut(fruits){
    let basket = fruits.filter(fruit => fruit !== "Lemon");  //filter to put out the lemons
    return basket; 
}

console.log("My mom bought me a fruit basket, containing " + theLemonsOut(fruitBasket));