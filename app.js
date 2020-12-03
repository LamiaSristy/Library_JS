const container = document.getElementsByClassName('container')[0];
const submitBtn = document.getElementsByClassName('submit')[0];
const title = document.getElementById('title');
const author = document.getElementById('author');
const displayFromBtn = document.getElementById('new-bookbtn');
const form = document.getElementById('create-form');

let myLibrary = [];

function Book(title, author, pages, isread) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isread = isread;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book1 = new Book('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 1000, true);
const book2 = new Book('How to Stop Worrying and Start Living', 'Dale Carnegie', 570, true);
const book3 = new Book('A Study in Scarlet', ' Arthur Conan Doyle', 500, true);
const book4 = new Book('A Promised Land', 'Barack Obama', 400, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

function createIsReadBtn(book){
    const readBtn = document.createElement('button');
     // Check for read or not
     if(book.isread) readBtn.textContent = 'Read';
     else readBtn.textContent = 'NotRead';
     //toggle btn for isRead
     readBtn.addEventListener('click', () => {
         book.isread=!book.isread;
         readBtn.textContent = book.isread? 'Read' : 'NotRead';
     });
    return readBtn; 
}

function createDeleteBtn(index){
    const deleteBtn = document.createElement('button');
    //delete a book Btn
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', () => {
        myLibrary.splice(index, 1);
        displayLibrary(myLibrary);
    });

    return deleteBtn;
}

function displayLibrary(array){
    container.innerHTML = '';

    for (let i = 0; i < array.length; i += 1) {

        const book = array[i];

        //Create the element
        const div = document.createElement('div');
        div.classList.add('bookdiv'); // Add the style for div
        
        const title_El = document.createElement('h3');
        const author_El = document.createElement('p');
        const pages_El = document.createElement('p');  
        
        // Data insertion
        title_El.textContent = book.title;        
        author_El.textContent = `Author: ${book.author}`;
        pages_El.textContent = `No.of pages: ${book.pages}`;

        //Organogram
        container.appendChild(div);
        div.appendChild(title_El);
        div.appendChild(author_El);
        div.appendChild(pages_El);        
        div.appendChild(createIsReadBtn(book));
        div.appendChild(createDeleteBtn(i));
    }
}

displayLibrary(myLibrary);

// Display the form
displayFromBtn.addEventListener('click', () => {
    form.classList.toggle('display');
});

// Add a new book
submitBtn.addEventListener("click", function(e){
    e.preventDefault(); // This will prevent the default behaviour of the event.

    if(title.value === '' || author.value === ''){
        alert(`Can't create book because some properties are missing`);
        return;
    }

    let newBook = new Book(title.value, author.value);
    addBookToLibrary(newBook);
    displayLibrary(myLibrary);
    title.value = '';
    author.value = '';
});

