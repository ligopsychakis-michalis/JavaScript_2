//initialize the basic variables
const arrowUp = document.getElementById("arrow-up");
const arrowDown = document.getElementById("arrow-down");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const timer = document.getElementById("timer");
const sessionLength = document.getElementById("length");


//when click to arrow up or arrow down, I want to increase or decrease the session length and timer
chooseTime = 0;

arrowUp.addEventListener("click",function(){
    if (timerIsOn === false){
        chooseTime += 1;
        sessionLength.innerText = chooseTime;
        timer.innerText = chooseTime + " : " + "00";
    }    
})

arrowDown.addEventListener("click",function(){
    if (timerIsOn === false){
        chooseTime -= 1;
        if (chooseTime < 0){
            chooseTime = 0;
        }
        sessionLength.innerText = chooseTime;
        timer.innerText = chooseTime + " : " + "00";
    }
})


/* if mousedown to arrows I want to increase or decrease the session lenght and timer constantly
and stop when the mouseup */
let increaseConst;
let decreaseConst;

arrowUp.addEventListener("mousedown",function(){
    if (timerIsOn === false){
        increaseConst = setInterval(function(){
            chooseTime += 1;
            sessionLength.innerText = chooseTime; 
        },300);
    }
})

arrowUp.addEventListener("mouseup",function(){
    clearInterval(increaseConst);
})

arrowDown.addEventListener("mousedown",function(){
    if (timerIsOn === false){
        decreaseConst = setInterval(function(){
            chooseTime -= 1;
            if (chooseTime < 0){
                chooseTime = 0;
            }
            sessionLength.innerText = chooseTime;
        },300);
    }    
})

arrowDown.addEventListener("mouseup",function(){
    clearInterval(decreaseConst);
})


// when click play button I want to begin the reverse counting 
let reverseCount;
let timeOnSec = 0;
let timerIsOn = false;  //use to know if timer counts cause if it's true I want to disable the arrows

play.addEventListener("click",function(){
    timerIsOn = true;
    if((chooseTime + " : " + "00") == timer.innerText){   //I want to continue the reverse count if it's not finished yet
        timeOnSec = chooseTime * 60;
    }    
    timer.innerText = Math.floor(timeOnSec / 60) + " : " + timeOnSec % 60;

    reverseCount = setInterval(function(){
        timeOnSec -= 1;
        timer.innerText = Math.floor(timeOnSec / 60) + " : " + timeOnSec % 60;
        if (timeOnSec === -1){
            timer.innerText = "Time's up!";
            clearInterval(reverseCount);
            timerIsOn = false;
        }
    },1000); 
})


//when click pause button I want to stop the reverse counting
pause.addEventListener("click",function(){
    clearInterval(reverseCount);
    timerIsOn = false;
})