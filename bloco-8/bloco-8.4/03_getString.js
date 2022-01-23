const numbers = [0, 4, 6, 1, 3, 4, 7, 9, 2, 18, 200, 2];

function getString(arr) {
  let string = '';
  for (let i = 0; i < arr.length; i += 1) {
    string += arr[i];
  }
  return string;
}

console.log(getString(numbers));
