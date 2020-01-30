"use strict";

function createBase(base){
    return function(num){
        console.log(base + num);
    }
}
//store the closure in a variable
const addSix = createBase(6);
//call function three times
addSix(9);
addSix(18);
addSix(30);
