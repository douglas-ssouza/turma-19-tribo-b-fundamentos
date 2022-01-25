// Escreva uma função que adicione um item ao final do array
const addAtArrayEnd = (array, ...value) => {
  return [...array, ...value];
}

// Escreva uma função que adiciona um item no inicio do array
const addAtArrayBeginning = (array, value) => {
  return [value, ...array];
}

// Escreva um função que combine dois arrays
const combineArrays = (array1, array2) => {
  return [...array1, ...array2];
}

// Escreva um função que recebe qualquer numero de arrays e retorno seus valores em um unico array
const combineAllArrays = (...arrays) => {
  console.log(arrays);

  return arrays.reduce((acc, curr) => [...acc, ...curr]);
}

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

console.log(combineAllArrays(array1, array2, [10, 11, 12, 13]));
