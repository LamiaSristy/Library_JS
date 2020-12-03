const container = document.getElementsByClassName('container')[0];

let myLibrary = [];

function Book(title, author){
    this.title = title;
    this.author = author;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

const book1 = new Book('Title1', 'Author1');
const book2 = new Book('Title2', 'Author2');
const book3 = new Book('Title3', 'Author3');
const book4 = new Book('Title4', 'Author4');

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);


function displayLibrary(array){
    container.innerHTML = '';
     
    for(let i = 0; i <array.length; i++){

        const book = array[i];
        
        const div = document.createElement('div');
        const title_El = document.createElement('h3');
        const author_El = document.createElement('p');

        title_El.textContent = book.title;
        author_El.textContent = book.author;

        container.appendChild(div);
        div.appendChild(title_El);
        div.appendChild(author_El);
    }
}

displayLibrary(myLibrary);