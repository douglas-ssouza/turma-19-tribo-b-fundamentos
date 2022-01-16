const multiplyArray = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    array[index] = array[index] * 2;
  }
  return array;
}

module.exports = multiplyArray;
