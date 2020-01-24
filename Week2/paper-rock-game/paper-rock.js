//for main page
let body = document.body;
const rock = document.getElementById("rock-choise");
const paper = document.getElementById("paper-choise");
const scissors = document.getElementById("scissors-choise");
const choises = document.getElementsByClassName("choise");
const btn = document.querySelector("button");

//for result page
let result = document.getElementById("result");
let playerScore = document.querySelector("#score div:first-child");
let computerScore = document.querySelector("#score div:last-child");
let computerChoseIcon = document.querySelector("#result i");
let resultState = document.querySelector("#result h3");
let computerChose = document.querySelector("#result p");


//when user click a choise the game begin
for (let i = 0; i < choises.length; i++){
    choises[i].addEventListener("click",() => play(i));
}


//function of the main game 
function play(i){
    if (result.style.display !== "block"){      //an if to make sure that user cannot play when result page is on 
        let userChoise;     //keep the choise of the user
        if (choises[i] === rock){
            userChoise = "Rock";
        }else if(choises[i] === paper){
            userChoise = "Paper";
        }else{
            userChoise = "Scissors";
        }  
        let computerChoise = pcChoise();        //keeps the choise of computer
        let winner = theWinnerIs(userChoise,computerChoise);        //keeps the winner
        resultPage(winner,computerChoise);      //call the function that shows the result
    }   
}


//makes a random choise for computer
function pcChoise(){
    let rand = Math.random();
    if (rand <= 0.33){
        return "Paper"
    }else if (rand <= 0.66){
        return "Rock"
    }else{
        return "Scissors"
    }
}


//find out who the winner is
let scoreForPl = 0;     //use to keep and show the score of player
let scoreForPc = 0;     //use to keep and show the score of computers

function theWinnerIs(player,computer){
    let phrase;
    if (player === computer){
        phrase = "It's a Draw";
    }else if(player === "Paper"){
        if (computer === "Rock"){
            scoreForPl += 1;
            phrase = "You Win";
        }else{
            scoreForPc += 1;
            phrase = "You Lose";
        }   
    }else if (player === "Rock"){
        if (computer === "Paper"){
            scoreForPc += 1;
            phrase = "You Lose";
        }else{
            scoreForPl += 1;
            phrase = "You Win";
        }
    }else{
        if (computer === "Rock"){
            scoreForPc += 1;
            phrase = "You Lose";
        }else{
            scoreForPl += 1;
            phrase = "You Win";
        }
    }
    playerScore.innerText ="Player: " + scoreForPl;
    computerScore.innerText ="Computer: " + scoreForPc;
    return phrase
}


//shows the result of the game on a card
function resultPage(winner,computer){
    computerChoseIcon.className = "fas fa-hand-" + computer.toLowerCase();
    computerChose.innerText = "Computer chose " + computer + "...";
    if (winner === "You Win"){
        resultState.style.color = "#09ad35";
    }else if (winner === "You Lose"){
        resultState.style.color = "#d42222";
    }else{
        resultState.style.color = "black";
    }
    resultState.innerText = winner;
    body.className = "result-page";
    result.style.display = "block";
}


//restart the game when click the button 
btn.addEventListener("click",function(){
    scoreForPc = 0;
    scoreForPl = 0;
    playerScore.innerText = "Player: " + scoreForPl;
    computerScore.innerText = "Computer: " + scoreForPc;
})


//if result page is on, after click anywhere, result page disappear
let secondClick = 0;        //use for help, cause with first click i want to show result page and with the second disappear it 
window.addEventListener("click",function(){
    if (result.style.display === "block" && secondClick === 1){
        result.style.display = "none";
        body.className = "";
        secondClick = 0;
    }else if (result.style.display === "block" && secondClick === 0){
        secondClick = 1;
    }    
})

//hover to blue choises, if result page is off
for (let i = 0; i < choises.length; i++){
    choises[i].addEventListener("mouseover",function(){
        if (result.style.display !== "block"){
            choises[i].style.color = "#0a38ab";
            choises[i].style.cursor = "pointer";
        }else{
            choises[i].style.color = "black";
            choises[i].style.cursor = "unset"; 
        }
    })
}
//turn choises to black when mouseout
for (let i = 0; i < choises.length; i++){
    choises[i].addEventListener("mouseout",function(){
        choises[i].style.color = "black";
    })    
}




