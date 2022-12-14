const bookList = document.querySelector('.book-list');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPage = document.querySelector('#page');
const bookStatus = document.querySelector('#status');
const addButton = document.querySelector('.add-button');
const submitButton = document.querySelector('#submit');
const cancelButton = document.querySelector('#close');
const modalContainer = document.querySelector('.modal-container');
const bookTotal = document.querySelector('.total');
const bookRead = document.querySelector('.read');
const bookUnread = document.querySelector('.unread');



let myLibrary = [{
    book: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    page: 310,
    status: 'Not Read',
}];

function Book(book, author, page, status) { // Constructor Function for book object
    this.book = book;
    this.author = author;
    this.page = page;
    this.status = status;
}

function addBookToLibrary() { // Takes info from field input and displays new book
    if (bookTitle.value === '' || bookAuthor.value === '' ||
        bookPage.value === '' || bookStatus.value === '') return;
    bookList.innerHTML = '';
    const newBook = new Book(bookTitle.value, bookAuthor.value,
        bookPage.value, bookStatus.value);
    myLibrary.push(newBook);
    displayBooks();
    closeModal();
}

function deleteBook() { // Deletes a book on the click of a button
    let dataIndex = this.getAttribute('data-index');
    myLibrary.splice(dataIndex, 1);
    bookList.innerHTML = '';
    displayBooks();
}

function displayBooks() { // Loops through library array and displays all books
    for (let [index, book] of myLibrary.entries()) {
        const pDiv = document.createElement('div');
        const cDiv = document.createElement('div');
        const pTitle = document.createElement('p');
        const pAuthor = document.createElement('p');
        const pPages = document.createElement('p');
        const pStatus = document.createElement('p');
        const dButton = document.createElement('button');
        pDiv.classList.add('book-item');
        cDiv.classList.add('book');
        pTitle.classList.add('title');
        pAuthor.classList.add('author');
        pPages.classList.add('pages');
        pStatus.classList.add('status');
        dButton.classList.add('delete-button');
        dButton.setAttribute('data-index', index);
        pTitle.textContent = book.book;
        pAuthor.textContent = book.author;
        pPages.textContent = book.page;
        pStatus.textContent = book.status;
        dButton.textContent = 'X';
        bookList.appendChild(pDiv);
        pDiv.appendChild(cDiv);
        pDiv.appendChild(dButton)
        cDiv.appendChild(pTitle);
        cDiv.appendChild(pAuthor);
        cDiv.appendChild(pPages);
        cDiv.appendChild(pStatus);
        dButton.addEventListener('click', deleteBook);
    }
    displayStats();
}

function displayStats() {
    let readBooks = myLibrary.filter(book => {
        if (book.status.toLowerCase() === 'read') return true;
    })
    let unreadBooks = myLibrary.filter(book => {
        if (book.status.toLowerCase() === 'not read') return true;
    })
    bookTotal.textContent = `${myLibrary.length}`;
    bookRead.textContent = `${readBooks.length}`;
    bookUnread.textContent = `${unreadBooks.length}`;
}

function displayModal() {
    modalContainer.classList.add('show');
}

function closeModal() {
    modalContainer.classList.remove('show');
    resetInputs();
}

function resetInputs() {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPage.value = '';
    bookStatus.value = '';
}

displayBooks();

addButton.addEventListener('click', displayModal);
cancelButton.addEventListener('click', closeModal);
submitButton.addEventListener('click', addBookToLibrary);