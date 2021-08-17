<<<<<<< HEAD
class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><input type="submit" value="Remove" class="btn delete"></td>
   `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
=======
function Book(title, author) { this.title = title; this.author = author; }
class Library {
  constructor() {
    if (window.localStorage.getItem('stored') === null) {
      window.localStorage.setItem('stored', JSON.stringify([]));
>>>>>>> 98d10998d0c7bc794feda4e0fd0792d58866c716
    }
    this.books = JSON.parse(window.localStorage.getItem('stored'));
    this.booklist = document.getElementById('booklist');
    document.getElementById('add').addEventListener('click', () => { this.add(); });
    this.show();
  }

  add() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const book = new Book(title, author);

<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
  const book = new Book(title, author, isbn);
  UI.addBookToList(book);
  Store.addBooks(book);
  UI.clearFields();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});
=======
    this.books.push(book);
    window.localStorage.setItem('stored', JSON.stringify(this.books));
    document.getElementById('form').reset();

    this.show();
  }

  show() {
    const booklist = document.getElementById('booklist');
    while (booklist.firstChild) {
      booklist.removeChild(booklist.firstChild);
    }
    this.books.forEach((book) => {
      const bookshell = document.createElement('p');
      const removebutton = document.createElement('button');

      removebutton.innerHTML = 'Remove';

      booklist.appendChild(bookshell);
      bookshell.innerHTML = `"${book.title}" by ${book.author}`;
      bookshell.appendChild(removebutton);
      removebutton.addEventListener('click', () => { this.books = this.books.filter((bok) => this.books.indexOf(bok)); this.show(); localStorage.setItem('stored', JSON.stringify(this.books)); });
    });
  }
}

const library = new Library();
library.show();
>>>>>>> 98d10998d0c7bc794feda4e0fd0792d58866c716
