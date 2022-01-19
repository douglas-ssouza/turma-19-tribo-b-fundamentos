const array = [2, 4, -5, -6, 7, -19, 1, 0, 3, 5, 6, 12, -3, 0];
const array2 = [123, 435, 1231, 123, 231, 345, 1212, 1222];

const isPositive = (number) => number >= 0 ? true : false;
const isNegative = (number) => number < 0 ? true : false;
const isEven = (number) => number % 2 === 0 ? true : false;
const isOdd = (number) => number % 2 !== 0 ? true : false;

function createNewArray (array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  
  }
  return newArray;
}

const objeto = {
  positivos: createNewArray(array, isPositive),
  negativos: createNewArray(array, isNegative),
  pares: createNewArray(array, isEven),
  impares: createNewArray(array, isOdd),
};

console.table(objeto);
