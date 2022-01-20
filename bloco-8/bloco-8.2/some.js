const books = require('./books');

const hasScienceFiction = (array, genre) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].genre === genre) {
      return true;
    }
  }
  return false;
};

console.log(hasScienceFiction(books, 'Ficção Científica'));
