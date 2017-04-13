class Book {

  constructor() {
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
  // -----------------------------
} //Close class 
