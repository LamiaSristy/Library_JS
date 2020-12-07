// const container = document.getElementsByClassName('container')[0];
const row = document.getElementsByClassName('row')[0];
const submitBtn = document.getElementsByClassName('submit')[0];
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('page');
const read = document.getElementById('read');
const displayFromBtn = document.getElementById('new-bookbtn');
const form = document.getElementById('create-form');
const error = document.getElementById('error');


const myLibrary = [];

function Book(title, author, pages, isread) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isread = isread;
}


const addBookToLibrary = (book) => {
  myLibrary.push(book);
};

const deleteBookFromLibrary = (title, author) => {
  for (let i = 0; i < myLibrary.length; i += 1) {
    if (myLibrary[i].title === title && myLibrary[i].author === author) {
      myLibrary.splice(i, 1);
      break;
    }
  }
};

const deleteFn = (deleteBtn) => {
  deleteBtn.addEventListener('click', (e) => {
    const el = e.target.parentElement;
    const title = el.querySelector('h5').textContent;
    const author = el.querySelector('p').textContent;
    el.parentNode.removeChild(el);

    deleteBookFromLibrary(title, author);
  });
};

const readFn = (readBtn, book) => {
  readBtn.addEventListener('click', () => {
    book.isread = !book.isread;
    readBtn.textContent = book.isread ? 'Read:Y' : 'Read:N';
    readBtn.classList.toggle('readbtn');
    readBtn.classList.toggle('notreadbtn');
  });
};

const book1 = new Book('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 464, true);
const book2 = new Book('How to Stop Worrying and Start Living', 'Dale Carnegie', 306, true);
const book3 = new Book('A Study in Scarlet', ' Arthur Conan Doyle', 176, true);
const book4 = new Book('A Promised Land', 'Barack Obama', 768, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

const createIsReadBtn = (book) => {
  const readBtn = document.createElement('button');
  // Check for read or not
  if (book.isread) {
    readBtn.textContent = 'Read:Y';
    readBtn.classList.toggle('readbtn');
  } else {
    readBtn.textContent = 'Read:N';
    readBtn.classList.toggle('notreadbtn');
  }

  readFn(readBtn, book);
  return readBtn;
};


const displayLibrary = (array) => {
  row.innerHTML = '';

  for (let i = 0; i < array.length; i += 1) {
    const book = array[i];

    // Create the element
    const div = document.createElement('div');
    // div.classList.add('card'); // Add the style for div
    div.classList.add('card', 'col-12', 'col-md-3');

    const title = document.createElement('h5');
    const author = document.createElement('p');
    const pages = document.createElement('p');

    // Data insertion
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `No.of pages: ${book.pages}`;

    // delete a book Btn
    const deleteBtnEl = document.createElement('button');
    deleteBtnEl.classList.add('deletebtn');
    deleteBtnEl.textContent = 'Delete!';
    deleteFn(deleteBtnEl);

    // Organogram
    row.appendChild(div);
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(createIsReadBtn(book));
    div.appendChild(deleteBtnEl);
  }
};

displayLibrary(myLibrary);

// Display the form
displayFromBtn.addEventListener('click', () => {
  form.classList.toggle('display');
});

// Add a new book
submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // This will prevent the default behaviour of the event.

  if (title.value === '' || author.value === '' || pages.value === '') {
    error.classList.add('error-display');
    return;
  }

  const newBook = new Book(title.value, author.value, pages.value, read.checked);
  addBookToLibrary(newBook);
  displayLibrary(myLibrary);
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
  error.classList.remove('error-display');
});
