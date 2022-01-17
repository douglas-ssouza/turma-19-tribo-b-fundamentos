const createObject = (keys, values) => {
  const newObject = {};
  for (let index = 0; index < keys.length; index += 1) {
    newObject[keys[index]] = values[index];
  }
  return newObject;
}

module.exports = createObject;
