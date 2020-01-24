let description = document.getElementById("description");
let severity = document.getElementById("severity");
let assignedTo = document.getElementById("assigned");
let add = document.getElementById("add");
let num = 0;  //use num to give different ids on every different issue card 


//function that shows the issue via a card
function assignmentCard(desc , sev , assign , num){
    let cardsPlace = document.getElementById("assignment-cards");
    let addCard = document.createElement("div");
    addCard.className = "jumbotron"
    addCard.id = "card" + num //change the id in order to every issue card has a different id

    //HTML code for every new issue card
    addCard.innerHTML = "<p><span id = 'status' class = 'bg-info text-white p-1 rounded' style = 'font-size:0.85em;'>Open</span></p>" +
                        "<h2>" + desc.value + "</h2>" +
                        "<p>" + "<span class = 'far fa-clock mr-2'> " + sev.value + "</span>" + 
                        "<span class = 'far fa-user'> " + assign.value + "</p>" +
                        "<button id = 'close' class = 'btn btn-warning mr-2'>Close</button>" +
                        "<button id = 'del' class = 'btn btn-danger'>Delete</button>";
    cardsPlace.appendChild(addCard);

    //clear the inputs when click add button
    desc.value = "";
    sev.value = "Low";
    assign.value = "";

    //change open to close when close buttton onclick
    let close = document.getElementById("close");
    close.id = "close" + num; //change the id in order to every close button has a different id
    let status = document.getElementById("status");
    status.id = "status" + num;  //change the id in order to every status has a different id

    function closeFunc(statusId){
        let status = document.getElementById(statusId);
        status.innerText = "Closed";  
    }
    close.addEventListener("click",function(){closeFunc(status.id)});
    
    //delete the issue card when delete button onclick
    let del = document.getElementById("del");
    del.id = "del" + num;  //change the id in order to every delete button has a different id
    del.addEventListener("click",function(){
        addCard.remove(); 
    })
}

add.addEventListener("click" , function(){assignmentCard(description , severity , assignedTo, num++)});
