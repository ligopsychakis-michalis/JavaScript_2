"use strict";

function removeDuplicates(arr){
    for (let i = 0; i < arr.length - 1; i++){
        for (let x = i + 1; x < arr.length; x++){
            if (arr[i] === arr[x]){
                arr[x] = null;
            }
        }
    }
    return arr
        .filter(letter => letter !== null)
        .sort();    
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

console.log(removeDuplicates(letters));