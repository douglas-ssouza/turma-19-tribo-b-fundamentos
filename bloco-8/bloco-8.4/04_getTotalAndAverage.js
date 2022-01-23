const numbers = [0, 4, 6, 1, 3, 4, 7, 9, 2, 18, 200, 2];

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
