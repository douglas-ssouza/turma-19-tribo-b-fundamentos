const numbers = [1, 2, 3, '.', 4, 5, 6, '.', 7, 8, 9, '-', 1, 0];

function getString(arr) {
  let string = '';
  for (let i = 0; i < arr.length; i += 1) {
    string += arr[i];
  }
  return string;
}

console.log(getString(numbers));
