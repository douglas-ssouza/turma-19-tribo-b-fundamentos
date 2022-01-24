const numbers = [0, 4, 6, 1, 3, 4, 7, 9, 2, 18, 200, 2];

const getTotal = (array) => {
  // let total = 0;
  // for (let i = 0; i < array.length; i += 1) {
  //   total += array[i];
  // }
  // return total;

  return array.reduce((acumulador, atual) => acumulador + atual);
}

console.log(getTotal(numbers));
