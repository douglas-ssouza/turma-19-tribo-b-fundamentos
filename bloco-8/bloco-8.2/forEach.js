const books = require('./books');

// imprima na tela o nome de cada um dos livros
const printBookNames = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i].name);
  }
}

printBookNames(books);
