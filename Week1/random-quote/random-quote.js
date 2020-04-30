let quote = document.querySelector("p");
let name = document.querySelector("p:nth-child(2)");
let btn = document.getElementById("btn");
// let num; //use to avoid to repeat the same quote two times in a row


//api call for quotes
async function quotesApi (){
    const data = await fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json");
    const quoList = await data.json();

    btn.addEventListener("click", () => quoteGenerator(quoList));
}

quotesApi();


function quoteGenerator(quoList){
    let num = Math.round(Math.random() * quoList.length - 1);
    quote.innerHTML = "<i class=\"fas fa-quote-left\"></i> " + quoList[num].quote;
    name.innerText = quoList[num].author;
}
