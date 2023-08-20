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
 

function getMostCommonGenres(books) {
const count = books.reduce((tally, book)=>{
  tally[book.genre] = (tally[book.genre] || 0) + 1;
  return tally;
   },{});
 return Object.entries(count).sort((a,b) =>
 b[1]-a[1]).slice(0,5).map(([name,count])=>
 ({name,count})); 
  }

 

function getMostPopularBooks(books) {
const timesBorrowed= books.map((book)=>
({name: book.title, count: book.borrows.length}));
timesBorrowed.sort((a,b) =>(a.count < b.count ? 1:-1));
return timesBorrowed.slice(0,5);
}
 
 
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
 
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
