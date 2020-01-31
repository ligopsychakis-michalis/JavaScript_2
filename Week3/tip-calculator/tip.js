//constractor function with the three key-value pairs
function Inputs(bill , service , people){
    this.bill = bill;
    this.service = service;
    this.people = people;
}


//UI object with methods that handles the UI tasks
const UI = {
    dissapearTipAmount : function(){
        document.querySelector(".tip-amount").style.display = "none";
    },

    calculate : function(inputs){
        const result = ((inputs.bill * inputs.service) / inputs.people).toFixed(2);
        UI.showTipAmount(result , inputs.people);
    },

    showTipAmount : function(result , people){
        document.getElementById("result").innerText = "$ " + result;
        document.querySelector(".tip-amount").style.display = "block";
        document.getElementById("each").style.display = "block";
        //if there is only one person dissapear the word "each" from UI
        if  (people === "1"){
            document.getElementById("each").style.display = "none";
        }
    },
    
    showAlert : function(){
        alert("Please fill all the fields..");
    },

    clearFields : function(){
        document.getElementById("bill").value = "";
        document.getElementById("service").value = "0.3";
        document.getElementById("people").value = "";
    }
}


//at the begining dissapear the tip-amount
UI.dissapearTipAmount();


//Event: click button 'CALCULATE!'
const btn = document.querySelector("button");
btn.addEventListener("click" , function(){
    //create an Inputs object
    const bill = document.getElementById("bill").value;
    const service = document.getElementById("service").value;
    const people = document.getElementById("people").value;

    const inputs = new Inputs(bill , service, people);

    //if click button without fill all fields, show an alert that 'must fill all'
    if (inputs.bill === "" || inputs.people === ""){ 
        UI.showAlert();
    }else {
        //calculate tip amount-per person and show it
        UI.calculate(inputs);

    }
})


//Event: when input to fields then dissapear the result of tip-amount
    const calculator = document.querySelector(".calculator");
    calculator.addEventListener("click" , function(e){
        if(e.target.className === "input" && document.querySelector(".tip-amount").style.display === "block") {
            UI.dissapearTipAmount();
            UI.clearFields();
        }    
    }) 