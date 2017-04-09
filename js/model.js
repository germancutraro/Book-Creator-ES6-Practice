class Book {

  constructor() {
    this.books = [];
    this.name = '';
    this.author = '';
  }

  // Setters
  // -----------------------------
    set bName(name) {
      this.name = name;
    }
    set bAuthor(author) {
      this.author = author;
    }
  // -----------------------------

  // Getters
  // -----------------------------
    get bName() {
      return this.name;
    }
    get bAuthor() {
      return this.author;
    }
    get all() {
      return this.books;
    }
  // -----------------------------

  // Methods
  addBook() {
    this.books.push({name: this.name, author: this.author});
  }

} //Close class 
