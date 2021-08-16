// Book Class: Represents a Book
 class Book { 
   constructor(title, author, isbn) {
     this.title = title;
     this.author = author;
     this.isbn = isbn;
   }
 }
// UI Class: Handle UI Tasks
  class UI {
    static displayBooks () {
      const StoredBooks = [
        {
          title: 'Lorem ipsum',
          author: Testeroo Testyy,
          isbn: '5474746',
        },
        {
          title: 'Second book',
          author: Testeroo Testyy,
          isbn: '8765335',
        }
      ];

      const books = StoredBooks;

      books.forEach((book) => UI.addBookToList(book));
    }
     static addBookToList(book) {
       const list = document.querySelector('#book-list');

       const row = document.createElement('tr');

       row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#">x</a></td>
       `;

       list.appendChild(row);
     }
  }
//  Store Class: Handles Storage

// Event: Display Books
 document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
  //  instatiate book 
  const book = new Book(title, author, isbn);
   console.log(book)
});

// Event: Remove a Book