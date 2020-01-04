var arr = [78,43,25,89,74,95,27,98,75,89,23,72,34,23];
//
// this is es5

// const book = {
//   title: "Book one",
//   author: "Shafeeq",
//   getSummary: function(){
//     return `${this.title} was written by ${this.author}`;
//   }
// };
//
// const book2 = {
//   title: "Book two",
//   author: "Shafeeq",
//   getSummary: function(){
//     return `${this.title} was written by ${this.author}`;
//   }
// };
function Book(title){
    this.title = title;

}

// console.log(book.getSummary());
// console.log(Object.values(book));
Book.prototype.getSummary = function(){
  return this.title;
};

b = new Book()
// console.log(b);
// console.log(b.getSummary());
function Magazine(title, author) {
  Book.call(this,title);
  this.author = author;
}
Magazine.prototype = Object.create(Book.prototype);
const mag1 = new Magazine(3,"Shafeeq");
console.log(mag1);
Magazine.prototype.constructor = Magazine;
console.log(mag1);
console.log(mag1.getSummary());
