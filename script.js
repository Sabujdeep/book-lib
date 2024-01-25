const title = document.querySelector("#bookTitle");
const author = document.querySelector("#bookAuthor");
const pages = document.querySelector("#bookPages");
const main = document.querySelector(".main")
const submit = document.querySelector("#btn")


let books = [];

function Book(title, author, pages){
    this.title= title;
    this.author= author;
    this.pages= pages;
}


    if(books.length === 0){
        const empty = document.createElement("div");
        empty.classList.add("emptyLib")

        main.appendChild(empty)


        const lib = document.createElement("p");
        empty.appendChild(lib);

        lib.innerHTML = `The Library is empty!`
        // console.log("empty")
    } else {
        const libraryBooks = document.createElement("div");
        libraryBooks.classList.add("library-books")

        main.appendChild(libraryBooks);

        books.forEach((book)=>{
            const perBook = document.createElement("div")
            perBook.classList.add("singleBook")
            libraryBooks.appendChild(perBook)

            
        })
    }


submit.addEventListener("click",  (e)=>{
    e.preventDefault();
    bookTitle = title.value;
    bookAuthor = author.value;
    bookPages = pages.value;

    const book = new Book(bookTitle, bookAuthor, bookPages);

    books.push(book)
})


// YET TO BE COMPLETED