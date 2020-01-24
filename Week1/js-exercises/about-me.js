const body = document.querySelector("body");

//change the font-family
body.style.fontFamily = "Arial, sans-serif";

//replace the spans with my infos
let spans = document.querySelectorAll("span");
let infos = ["Mike","Pasta","Athens"];
for (let i = 0; i < spans.length; i++){
    spans[i].replaceWith(infos[i]);
}

//change className to li
let lis = document.querySelectorAll("li");
for (let i = 0; i < lis.length; i++){
    lis[i].className = "list-item";
}

//append img of me
const img = document.createElement("img");
img.setAttribute("src","https://png.pngtree.com/png-clipart/20190516/original/pngtree-boy-with-sunglasses-cool-boy-white-shirt-black-sunglasses-png-image_3802214.jpg");
img.style.width = "200px";
body.appendChild(img);

