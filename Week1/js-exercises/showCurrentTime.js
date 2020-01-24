//append a paragraph element 
const body = document.querySelector("body");
let para = document.createElement("p");
body.appendChild(para);
 
//change the style
para.style.marginLeft = "auto";
para.style.marginRight = "auto";
para.style.marginTop = "15%"; 
para.style.textAlign = "center";
para.style.fontSize = "8em";
para.style.fontFamily = "sans-serif";
para.style.color = "white";
body.style.backgroundColor = "#60646e";

//run the time
function timeTeller(){
    today = new Date();
    let time = today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds();
    para.innerText = time;
}    

let changeTime = setInterval(timeTeller,1000);
