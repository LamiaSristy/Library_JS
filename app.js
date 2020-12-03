const container = document.getElementsByClassName('container')[0];

let myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book1 = new Book('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari');
const book2 = new Book('How to Stop Worrying and Start Living', 'Dale Carnegie');
const book3 = new Book('A Study in Scarlet', ' Arthur Conan Doyle');
const book4 = new Book('A Promised Land', 'Barack Obama');

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);


function displayLibrary(array){
    container.innerHTML = '';

    for (let i = 0; i < array.length; i += 1) {

        const book = array[i];

        //Create the element
        const div = document.createElement('div');
        div.classList.add('bookdiv'); // Add the style for div
        
        const title = document.createElement('h3');
        const author = document.createElement('p');
        
        // Data insertion
        title.textContent = book.title;        
        author.textContent = `Author: ${book.author}`;

        //Organogram
        container.appendChild(div);
        div.appendChild(title);
        div.appendChild(author);
    }
}

displayLibrary(myLibrary);

