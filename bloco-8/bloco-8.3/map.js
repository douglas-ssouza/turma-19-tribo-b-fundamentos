const { numbers, names, students } = require('./arrays');

// Gere um novo array com o dobro/metade de cada item do array numbers
// Opção 1:
// const getDouble = (number) => number * 2;
// const doubles = numbers.map(getDouble);

// Opção 2:
// const doubles = numbers.map((number) => number * 2);
// console.log(doubles);

// Opção 1:
// const getHalf = (number) => number / 2;
// const halves = numbers.map(getHalf);
// console.log(halves);

// Opção 2:
// console.log(numbers.map((number) => number / 2));

// Gere um novo array com quadrado de cada item do array numbers
// const squares = numbers.map((number) => number * number);
// console.log(squares);

// Gere um novo array de names alterando todas as letras 'e' por 'x'

// Gere um novo array apenas com as idades das pessoas estudantes

// Gere um novo array de students com os nomes completos das pessoas estudantes
const fullNames = students.map((student) => `${student.name} ${student.lastName}`);
console.log(fullNames);
