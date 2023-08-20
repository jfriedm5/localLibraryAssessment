function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

 
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB)=> (accountA.name.last > accountB.name.last? 1 : -1))
  return accounts;
}
 
  function getTotalNumberOfBorrows(account, books) {
    let totalBorrows = 0;
    books.forEach(book => {
      totalBorrows += book.borrows.filter(borrow =>
        account.id === borrow.id).length;
      });
      return totalBorrows;
    }
 

function findAuthorById(authors, id) {
  let found = authors.find((author)=>author.id===id);
  return found;
}
function getBooksPossessedByAccount(account, books, authors) {
return books.filter((book)=>
 book.borrows.some((borrower)=>
borrower.id === account.id && borrower.returned === false)).map(book =>
 {const author = findAuthorById(authors, book.authorId);
  book.author = author;
  return book;
}); 
}
 

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
