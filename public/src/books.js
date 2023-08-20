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

  
function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}
function getBorrowersForBook(book, accounts) {
return book.borrows.map((borrow)=>{
  let account = findAccountById(accounts, borrow.id);
     return {...borrow, ...account};
}) .slice(0,10);
}
 
  
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
