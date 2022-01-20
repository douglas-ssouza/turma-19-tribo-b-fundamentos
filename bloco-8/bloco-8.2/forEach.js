const books = require('./books');

// imprima na tela o nome de cada um dos livros
const printBookNames = (array) => {
  // for (let i = 0; i < array.length; i += 1) {
  //   console.log(array[i].name);
  // }
  array.forEach((item) => {
      console.log(item);
  });
}

printBookNames(books);

// adicione uma chave rating em cada item do array
// Utilize o seguinte array:
const ratings = [5, 5, 4, 4, 3, 3];

const addRating = (array) => {
  array.forEach((item, index) => {
    item['rating'] = ratings[index];
  });
}

addRating(books);
console.log(books);
