const books = require('./books');

// Orderne o array de acordo com a data de lançamento
const orderByReleaseYear = (array) => {
  for (let i = 1; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[j].releaseYear > array[i].releaseYear) {
        let aux = array[j];
        array[j] = array[i];
        array[i] = aux;
      }
    }
  }
}

orderByReleaseYear(books);
console.log(books);
