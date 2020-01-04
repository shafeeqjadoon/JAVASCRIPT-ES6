// Objects of prototypes

const bookProtos = {
  getSummary: function(){
    return `${this.title} is title, and this is the author ${this.author}`
  },
  getTitle: function(){
    return this.title;
  }
};

const book1 = Object.create(bookProtos);
book1.title = "I am the first book";
book1.author = "Papa";
console.log(book1.getSummary());
console.log(book1.getTitle());
