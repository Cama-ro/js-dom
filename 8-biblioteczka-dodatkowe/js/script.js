// book class: represents a book (object)

class Book {
  constructor(title, author, select1, select2) {
    this.title = title;
    this.author = author;
    this.select1 = select1;
    this.select2 = select2;
  }
}

// UI class: handle UI tasks (see added books, alert, errors etc.)

class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Nawyki warte miliony",
        author: "Brian Tracy",
        select1: "3",
        select2: "Biznes",
      },
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.select1}</td>
    <td>${book.select2}</td>
    <td></td>`;
  }
}
// store class: handles storage (localstorage, not delete books/settings from page when browser is closed)

// event: display books

// event: add a book

//  event: remove a book
