"use strict";

const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
];

function collectiveAge(infos){
    let sumOfAges = infos
        .map(info => info.age)  //map to keep the ages from the object
        .reduce((total,age) => total + age , 0);  //reduce to add the ages
    console.log("The collective age of HYF is " + sumOfAges);
    return sumOfAges;
}

collectiveAge(hackYourFutureMembers);