class Library {
  constructor() {
    if (window.localStorage.getItem('stored') === null) {
      window.localStorage.setItem('stored', JSON.stringify([]));
    }
    this.books = JSON.parse(window.localStorage.getItem('stored'));
    this.booklist = document.getElementById('booklist');
    document.getElementById('add').addEventListener('click', () => { this.add(); });
    this.show();
  }

  add() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const book = { title, author };

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
      removebutton.addEventListener('click', () => { this.remove(); });
    });
  }

  remove() {
    this.books = this.books.filter((bok) => this.books.indexOf(bok));
    this.show();
    localStorage.setItem('stored', JSON.stringify(this.books));
  }
}

const library = new Library();
library.show();