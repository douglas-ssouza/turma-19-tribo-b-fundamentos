// Escreva uma função que conte o número de parâmetros passados à ela
const countParams = (...args) => args.length;

// Escreva uma função que receba um número qualquer de parâmetros numéricos e retorne a soma total deles
const sumValues = (...args) => args.reduce((acc, curr) => acc + curr);

// Escreva um função que receba um número qualquer de parâmetros, sendo alguns numéricos e outros strings e retorne a soma apenas dos numeros
const addOnlyNums = (...args) => {
  // [1, '2', 3, 'asdkahsdkf', 10]

  return args
    .filter((arg) => typeof arg === 'number') // [1, 3, 10]
    .reduce((acc, curr) => acc + curr); // 14
}

console.log(addOnlyNums(1, '2', 3, 'asdkahsdkf', 10));
