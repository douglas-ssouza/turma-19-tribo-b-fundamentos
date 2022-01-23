const numbers = [10, 9 , 4, 6, 2, 9 , 8, 6];

function getTotalAndAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i += 1) {
    total += arr[i];
  }

  return {
    total,
    average: total / arr.length,
  };
}

console.log(getTotalAndAverage(numbers));
