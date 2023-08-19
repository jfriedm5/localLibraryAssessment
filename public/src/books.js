function findAuthorById(authors, id) {
  let found = authors.find((author)=>author.id===id);
  return found;
}

function findBookById(books, id) {
  let found=books.find((book)=>book.id===id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
let booksBorrowed=books.filter((book)=>
book.borrows.some((borrow) => borrow.returned === false)
);
let booksReturned=books.filter((book)=>
book.borrows.every((borrow) => borrow.returned === true)
);
let partitionedArray=[[...booksBorrowed],[...booksReturned]];
return partitionedArray;
}

//categorizes books into 2 groups, currently borrowed and returned. 

//function takes a single paremeter of books, which is an array of book objects

//let booksBorrowed=books.filter((book)=> {...}) uses filter method to create a new array that only includes the books
//where at least one borrow entry has returned === false. 

//let booksReturned=books.filer((book)=> {...}) uses filter method to create a new array that only includes the books
//where all borrow entries have returned === true

//let partitionedArray = [[...booksBorrowed],[...booksReturned]]; creates a new array that contains the entirety of the booksBorrowed
//and booksReturned arrays. 

//we then return the partitionedArray. 
 
//return an array that shows all borrowers for the book object with their 
//info and return status
// list should limit results to top 10
function getBorrowersForBook(book, accounts) {
return book.borrows.map((borrow)=>{
  let account = accounts.find(account => account.id === borrow.id);
     return {...borrow, ...account};
}) .slice(0,10);
}
//returns an array of all borrowers for a particular book up to 10 borrowers. 
//function takes 2 arguments book and accounts. book is an object representing a book. accounts is an array of account objects

//book.borrows.map((borrow)=> {...}) is a function that creates a new array by transforming each borrow entry
//in the book.borrows array

//within the map function: let account=accounts.find(account => account.id ===borrow.id); uses find method to locate
//the account that matches the id in the current borrow entry

//return {...borrow, ...account}; creates a new object that combines the properties of the borrow entry and the matching acount
// slice(0,10); limits the returned array to the first 10 entries. 

//creating a list of borrowers for a particular book, including both borrower details and account details for each borrower

  
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
