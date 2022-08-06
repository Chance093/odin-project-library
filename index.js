const bookList = document.querySelector('.book-list');



let myLibrary = [{
    book: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    page: 356,
    status: 'Read',
}, {
    book: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    page: 500,
    status: 'Not read',
}];

function Book(title, author, page, status) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.status = status;
}

function addBookToLibrary() {

}

function displayBooks() { // Loops through library array and displays all books
    for (let book of myLibrary) {
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
    }
}

displayBooks();