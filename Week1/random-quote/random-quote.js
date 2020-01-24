let quote = document.querySelector("p");
let name = document.querySelector("p:nth-child(2)");
let btn = document.getElementById("btn");
let num; //use to avoid to repeat the same quote two times in a row

//array of six quotes
let quoteList = ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe..",
                "So many books, so little time..",
                "A room without books is like a body without a soul..",
                "Be the change that you wish to see in the world..",
                "You only live once, but if you do it right, once is enough..",
                "Without music, life would be a mistake.."
];

//array of names in the same index of quote that each own
let nameList = ["- Albert Einstein", "- Frank Zappa", "- Marcus Tullius Cicero", "- Mahatma Gandhi", "- Mae West", "- Friedrich Nietzsche"];

//when button onclick change the quote and the name and keep in "num" the value just to remember the last quote and not repeat it after
btn.addEventListener("click", function(){
    refreshQuote(quote,name,quoteList,nameList,num);
    num = refreshQuote(quote,name,quoteList,nameList,num);
});


function refreshQuote(quo, nam, quoList, namList, n){
    do{
        var i = Math.floor(Math.random() * 6);
    }while(n === i || i === 6)
    quo.innerHTML = "<i class=\"fas fa-quote-left\"></i> " + quoList[i];
    nam.innerText = namList[i];
    return n = i;    
}
