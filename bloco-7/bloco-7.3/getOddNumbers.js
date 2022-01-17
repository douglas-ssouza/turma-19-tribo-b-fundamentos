const getOddNumbers = (array) => {
  const newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 2 !== 0) {
      newArray.push(array[index]);
    }
  }

  return newArray.length === 1 ? newArray[0] : newArray;
}
