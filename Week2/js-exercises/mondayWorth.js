"use strict";

const mondayTasks = [
    {
      name: 'Daily standup',
      duration: 30, // specified in minutes
    },
    {
      name: 'Feature discussion',
      duration: 120,
    },
    {
      name: 'Development time',
      duration: 240,
    },
    {
      name: 'Talk to different members from the product team',
      duration: 60,
    },
];

function mondayWorth (tasks){
    let hours = tasks
        .map(task => task.duration / 60)  //map to get an array of tasks duration in hours
        .reduce((total,dur) => total + dur , 0);  //reduce to sum the working hours
    let salary = hours * 25;
    return salary;
}

console.log(mondayWorth(mondayTasks) + " Euros");




