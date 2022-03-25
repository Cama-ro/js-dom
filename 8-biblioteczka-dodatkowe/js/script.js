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
    const books = Store.getBooks();

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
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    // vanish in 3 seconds
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  // clear fields when use submit button
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#select1").value = "";
    document.querySelector("#select2").value = "";
  }
}
// store class: handles storage (localstorage, not delete books/settings from page when browser is closed)

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }

  static addBooks(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(select2) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if ((book.select2 = select2)) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

// event: display books

document.addEventListener("DOMContentLoaded", UI.displayBooks);

// event: add a book

document.querySelector("#book-form").addEventListener("submit", (e) => {
  // prevent actual submit
  e.preventDefault();

  // get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const select1 = document.querySelector("#select1").value;
  const select2 = document.querySelector("#select2").value;

  // validate
  if (title === "" || author === "" || select1 === "" || select2 === "") {
    UI.showAlert("Proszę wypełnić wszystkie pola", "danger mt-5");
  } else {
    // instatiate book
    const book = new Book(title, author, select1, select2);

    // add book to UI
    UI.addBookToList(book);

    // add book to store
    Store.addBooks(book);

    // show success message
    UI.showAlert("Książka dodana", "success mt-5");

    // clear fields
    UI.clearFields();
  }
});

//  event: remove a book
document.querySelector("#book-list").addEventListener("click", (e) => {
  // remove book from UI
  UI.deleteBook(e.target);

  // remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // show success message
  UI.showAlert("Książka usunięta", "success mt-5");
});
