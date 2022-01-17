const multiplyArray = (array) => {
  const newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push(array[index] * 2);
  }
  return newArray;
}

module.exports = multiplyArray;
