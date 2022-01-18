const divideNumbers = (n1, n2) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new TypeError('Parâmetro deve ser numérico');
  }
  
  if (n2 === 0) {
    throw new Error('Não se pode dividir por zero');
  }

  return n1 / n2;
}

module.exports = divideNumbers;
