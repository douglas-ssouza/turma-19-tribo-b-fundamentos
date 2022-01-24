const numbers = [10, 9 , 4, 6, 2, 9 , 8, 6];

function getTotalAndAverage(arr) {
  // let total = 0;
  // for (let i = 0; i < arr.length; i += 1) {
  //   total += arr[i];
  // }

  // return {
  //   total,
  //   average: total / arr.length,
  // };

  // const object = {
  //   total: 0,
  //   average: 0,
  // };

  // return arr.reduce((acc, curr, index, array) => {
  //   acc.total += curr;
  //   acc.average = acc.total / array.length;
  //   return acc;
  // }, object);

  const total = arr.reduce((acc, curr) => acc + curr);

  return {
    total,
    average: total / arr.length,
  };
}

console.log(getTotalAndAverage(numbers));
