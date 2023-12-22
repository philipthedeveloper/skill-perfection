// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   this.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   };
// }

// function Magazine(title, author, year, month) {
//   Book.call(this, title, author, year);
//   this.month = month;
// }

// Book.prototype.getAge = function () {
//   const years = new Date().getFullYear() - this.year;
//   return `${this.title} is ${years} years old.`;
// };

// // IN ORDER TO INHERIT THE METHODS OF THE CONSTRUCTOR
// // We are setting the magazine to use the book prototype as its constructor
// /**As such the constructor of any object create from Magazine takes Book as the default constructor */
// Magazine.prototype = Book.prototype;

// // console.log("Prototype", Magazine.prototype.constructor);

// // // To use the Magazine constructor instead of the Book constructor
// Magazine.prototype.constructor = Magazine;
// // console.log("Prototype", Magazine.prototype.constructor);

// const book1 = new Book("Atomic Habits", "Mary Jane", "2016");
// const mag1 = new Magazine(
//   "The subtule act of not giving a fuck",
//   "John Doe",
//   "2010",
//   "Jan"
// );

// console.log(mag1);
// console.log(mag1.month);
// console.log(book1);

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
