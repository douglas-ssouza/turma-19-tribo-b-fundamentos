const books = require('./books');

// Encontre o primeiro item cujo autor é Isaac Asimov
const findAuthor = (array, author) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].author.name === author) {
      return array[i];
    }
  }
  return false;
}

console.log(findAuthor(books, 'Isaac Asimov'));
