const books = require('./books');

// Verifique se todos os livros tem o id menor do 8
const allHaveIdLower = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].id >= value) {
      return false;
    }
  }
  return true;
};

console.log(allHaveIdLower(books, 8));
