//Book constructor: Represent a book
const Book = function (title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI object: Handle UI Tasks
const UI = {
    displayBooks : function() {
        const books = store.getBooks();

        books.forEach((book) => UI.addBookToList(book))
    } ,

    addBookToList : function(book) {
        const list = document.getElementById("book-list");
        const row = document.createElement("tr");
        list.appendChild(row);
        row.innerHTML = 
            "<td>" + book.title + "</td>" + 
            "<td>" + book.author + "</td>" +
            "<td>" + book.isbn + "</td>" +
            "<td><button class = 'btn btn-sm btn-danger delete'>X</button></td>"    
        ;
    }, 

    clearFields : function() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    },

    deleteBook : function(target) {
        if (target.classList.contains("delete")) {
            target.parentElement.parentElement.remove();
        }
    },

    showAlert : function(message , className) {
        const div = document.createElement("div");
        div.className = "alert alert-" + className + " mt-1";

        const firstForm = document.querySelector(".container div");
        const container = document.querySelector(".container");
        container.insertBefore(div , firstForm);
        div.innerText = message;

        //disappear after 2.5sec
        setTimeout(() => div.remove(),2500);
    }
};


//Store object: Handle storage
const store = {
    getBooks : function() {
        let books;
        if (localStorage.getItem("books") === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books
    },

    addBook : function(book) {
        const books = store.getBooks();
        books.push(book);
        localStorage.setItem("books" , JSON.stringify(books));
    },

    removeBook : function(isbn) {
        const books = store.getBooks();
        
        books.forEach((book , index) => {
            if (book.isbn === isbn){
                books.splice(index , 1);
            }
        })

        localStorage.setItem("books" , JSON.stringify(books));
    } 

}


//Event: Display books that are storage
document.addEventListener("DOMContentLoaded",UI.displayBooks);


//Event: Add book
    //catch the values when submit clicked
document.querySelector("button").addEventListener("click",() => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    //validate
    if (title === "" || author === "" || isbn === ""){
        UI.showAlert("Please fill the fields..." , "danger");
    }else{
       //create a new book using the Book constructor
        const book = new Book(title,author,isbn);

        //Add book to UI
        UI.addBookToList(book);

        //Add book to Store
        store.addBook(book);

        //show alert that book added successfully
        UI.showAlert("The book is added..." , "success");

        //Clear Fields
        UI.clearFields(); 
    }
})

//Event: Remove a book 
document.getElementById("book-list").addEventListener("click",(e) => {
    //remove from UI
    UI.deleteBook(e.target);

    //remove book from store
    store.removeBook(e.target.parentElement.previousSibling.innerText);

    //show alert that book removed
    UI.showAlert("Book removed..." , "success");
});