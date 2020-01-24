const books = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
    },
];

const body = document.querySelector("body");

//create the ul and append it to the site
const ul = document.createElement("ul");
body.appendChild(ul);

for (let i = 0; i < 2; i++){      
  const li = document.createElement("li");
  ul.appendChild(li);
}

let lis = document.getElementsByTagName("li");

//append to li book infos
let x = 0;
for (book of books){
  const newPar = document.createElement("p")
  newPar.innerText = book.title + " by " + book.author;
  lis[x].appendChild(newPar);
  x++; 
}

//append to li book imgs
imgs = ["https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg"];

for (let i = 0; i < 2; i++){
  let img = document.createElement("img");
  img.setAttribute("src",imgs[i]);
  lis[i].appendChild(img);
  img.style.height = "200px";
}

//add color depends of alreadyRead
let y = 0;
for (book of books){
  if (book.alreadyRead == false){
    lis[y].style.backgroundColor = "red";
    y++;
  }else{
    lis[y].style.backgroundColor = "green";
  }
}
