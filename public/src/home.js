function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
let borrowedBooks= books.filter((book)=>
book.borrows.filter((element)=>
element.returned === false).length>0);
  return borrowedBooks.length;
}
//created a function to return the count of books that are currently borrowed
// but not returned

//books.filter((book)=>{...}): creates a new array borrowedBooks where each 
//element is a book that has been borrowed but not returned

//book.borrows.filter((element)=> element.returned ===false).length>0:
// for each book this checks the borrows array to see if there are any elements
//where returned is false. If so it means the book is currently borrowed

//return borrowedBooks.length: returns the length of the borrowedBooks array 
//which is the count of books that are currently borrowed.

function getMostCommonGenres(books) {
const count = books.reduce((tally, book)=>{
  tally[book.genre] = (tally[book.genre] || 0) + 1;
  return tally;
   },{});
 return Object.entries(count).sort((a,b) =>
 b[1]-a[1]).slice(0,5).map(([name,count])=>
 ({name,count})); 
  }

// created a function to determine the top 5 most common genres.We used books 
//as an argument, each book is an object that includes a genre property

//books.reduce((tally, book) => {...}, {})  creates an new object called 
//count where each propert is a book genre and the value is the number of 
//times that genre appears in the book list

//tally[book.genre] = (tally[book.genre] || 0) + 1; checks if a genre already 
//exists in tally. If it does it increments the count, if not the count is 
//set to 1

//Object.entries(count) converts the object into an array of arrays where 
//each sub-array is a genre-count pair.

//.sort((a, b) => b[1] - a[1]) sorts the array in descending order 
//from most counts to least, based on the count

//.slice(0, 5) selects the first five elements, i.e., the top 5 genres.

//.map(([name, count]) => ({name, count})) transforms each sub-array 
//into an object with properties name (the genre) and count.

//function returns an array of objects, each representing one of the top 5
//most common genres and its count. 


//pass function getBooksBorrowedCount(books) to get count of how many times 
// a book was borrowed, sort them descendingly and slice(0,5)

function getMostPopularBooks(books) {
const timesBorrowed= books.map((book)=>
({name: book.title, count: book.borrows.length}));
timesBorrowed.sort((a,b) =>(a.count < b.count ? 1:-1));
return timesBorrowed.slice(0,5);
}
//created function that takes an array of books as an argument.
// each book is a object that contains a title property and a 
//borrows property which is also an array

//books.map((book)=>{...}) is used to creat a new array timesBorrowed 
//timesBorrowed elements are objects with properties name(book title) and 
//count(the length of the borrows array)

//timesBorrowed.sort((a,b)=>(a.count < b.count ? 1:-1)) sorts the array in
//ascending order based on the count property

//timesBorrowed.slice(0,5) selects the first 5 elements of the timesBorrowed array
//the function returns an array of objects representing the top 5 most popular books
//by borrower count, and the borrower count. 

//return an ordered list of top 5 most popular authors
function getMostPopularAuthors(books, authors) {
  const timesBorrowed= books.map((book)=>
  {let author= authors.find((author)=>
    author.id === book.authorId);
  return{name: `${author.name.first} ${author.name.last}`, 
  count: book.borrows.length}
});
  timesBorrowed.sort((a,b) =>(a.count < b.count ? 1:-1));
  return timesBorrowed.slice(0,5);
  }
//function returns the top 5 authors whose books have been borrowed the most

//books.map((bok) =>{...}) creates a new array timesBorrowed where each element
//is an object representing a book and its author.

//author=authors.find((author)=> author.id === book.authorId) for each book this
//finds the author whose id matches the authorId of the book. 

//return {name: `${author.name.first} ${author.name.last}, 
//count: book.borrows.length}. returns an object for each book with the 
//authors full name and the number of times the book has been borrowed

//timesBorrowed.sort((a,b)=>(a.count<b.count?1:-1)). sorts the timesBorrowed array 
// in descending order based on the count property

//return the sorted timesBorrowed array sliced to first 5 elements. 

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
