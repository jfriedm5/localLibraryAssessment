function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

/*function findAccountById(accounts, id) {
const result = accounts.find(({accounts.id}) => accounts.id===id,{});
const userKey= accounts.key("name");
cont userValue=accounts.value();
return accounts[accounts.key("name")]=accounts.key.picture, accounts.key.age, accounts.key.company, accounts.key.email, accounts.key.registered 
}
*/
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB)=> (accountA.name.last > accountB.name.last? 1 : -1))
  return accounts;
}
//function should return the total number of times an account has created 
//a borrow record

  function getTotalNumberOfBorrows(account, books) {
    let totalBorrows = 0;
    books.forEach(book => {
      totalBorrows += book.borrows.filter(borrow =>
        account.id === borrow.id).length;
      });
      return totalBorrows;
    }
//function will calculate the total number of times an account borrowed books

//the function accepts 2 parameters, an account and books. account is an object representing a user account. 
//books is an array of book objects. 

//let totalBorrows =0; initializes a counter at 0 to track the total number of borrows

//books.forEach(book => {...}) iterates over each book in the books array
//totalBorrows += book.borrows.filter(borrow => account.id === borrow.id).length; within the forEach loop,
//the filter method is used to create a new array that only includes the borrow entries where account.id 
//matches borrow.id. 
//the length of the array (# of matches) ois then added totalBorrows

//once all books have been checked the function returns the totalBorrows count

    /*
    for (let i = 0; i < books.length; i++) {
     for (let j = 0; j < books[i].borrows.length; j++) {
      if (account.id === books[i].borrows[j].id) {
       totalBorrows++;
      }
     }
    }
    return totalBorrows;
   }
*/
  

/*
  getBooksPossessedByAccount()
should return all of the books taken out by an account with the author embedded:
*/

function getBooksPossessedByAccount(account, books, authors) {
return books.filter((book)=>
 book.borrows.some((borrower)=>
borrower.id === account.id && borrower.returned === false)).map(book =>
 {const author = authors.find(author =>
  author.id===book.authorId)
  book.author = author;
  return book;
}) 
}
//function returns all books currently borrowed by a specific account

//books.filter((book)=>{...}):creates a new array where each element is a book 
//that has been borrowed by the account and not returned

//book.borrows.some((borrower)=> borrower.id===accountId && borrower.returned
//=== false): for each book this checks the borrows array to see if there are
//any elements where borrowers id matches the accounts id and returned is false.
//if these are both true it means the book is currently borrowed by the account.

//.map(book =>{...}): transforms each book n the array by adding author property

//const author = authors.find(author => author.id === book.authorId): 
//for each book this finds the author whose id match the authorId of the book

//book.author=author; return book;: this adds the author object to the 
//book object and returns the updated book object. 

//filter the books array, so we can check each book
//check the borrows array inside our filtered book array for
//if borrowers id matches the provided account id and the book was not returned at least once
//each item that matches the some() parameters, then we add the authors info by
//finding author in the athors array whose author.id is equal to book.authorId
//we return author object and assign it to the author constant
//then author constant is added to the book object.

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
