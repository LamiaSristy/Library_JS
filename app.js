const container = document.getElementsByClassName('container')[0];
const submitBtn = document.getElementsByClassName('submit')[0];
const title = document.getElementById('title');
const author = document.getElementById('author');
const displayFromBtn = document.getElementById('new-bookbtn');
const form = document.getElementById('create-form');

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
        
        const title_El = document.createElement('h3');
        const author_El = document.createElement('p');
        
        // Data insertion
        title_El.textContent = book.title;        
        author_El.textContent = `Author: ${book.author}`;

        //Organogram
        container.appendChild(div);
        div.appendChild(title_El);
        div.appendChild(author_El);
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


