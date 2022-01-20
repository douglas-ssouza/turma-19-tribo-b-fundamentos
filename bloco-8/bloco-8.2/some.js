const books = require('./books');

// Verifique se há Ficação Cientifica
const hasGenre = (array, genre) => {
  // for (let i = 0; i < array.length; i += 1) {
  //   if (array[i].genre === genre) {
  //     return true;
  //   }
  // }
  // return false;

  return array.some((item) => item.genre === genre);
};

console.log(hasGenre(books, 'Ficção Científica'));
