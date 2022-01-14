const validateParameters = (n1, n2) => {
  if (!n1 || !n2) {
    throw new Error('Dois parametros obtrigatórios');
  }
}

const validateNumbers = (n1, n2) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('Ambos os valores devem ser números');
  }
}

const soma = (n1, n2) => {
  validateParameters(n1, n2);
  validateNumbers(n1, n2);
  return n1 + n2;
};

try {
  console.log(soma(2, '3'));
} catch (err) {
  console.log(err.message);
}
