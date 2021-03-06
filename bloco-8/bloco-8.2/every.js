const books = require('./books');

// Verifique se todos os livros tem o id menor do 8
const allHaveIdLower = (array, value) => {
  // for (let i = 0; i < array.length; i += 1) {
  //   if (array[i].id >= value) {
  //     return false;
  //   }
  // }
  // return true;

  return array.every((item) => item.id < value);
};

// Verifique se todos os livros tem o nome com mais de 10 caracteres
const allHaveMoreThan10 = (array) => array.every(
  (item) => item.name.length > 10
);

console.log(allHaveMoreThan10(books));
