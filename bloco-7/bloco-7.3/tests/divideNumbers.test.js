const divideNumbers = require('../divideNumbers');

describe('Caso o parâmetro passado não seja numérico', () => {
  it('deve lançar um TypeError', () => {
    expect(() => divideNumbers(10, '2')).toThrow(TypeError);
  });
});

describe('Caso o segundo parâmetro seja igual a 0', () => {
  it('deve lançar um erro', () => {
    expect(() => divideNumbers(10, 0)).toThrow();
  });

  it('a mensagem de erro deve conter a palavra "zero"', () => {
    expect(() => divideNumbers(10, 0)).toThrow('zero');
    expect(() => divideNumbers(10, 0)).toThrow(/zero/);
  });

  it('a mensagem de erro deve ser "Não se pode dividir por zero"', () => {
    expect(() => divideNumbers(10, 0)).toThrow(new Error('Não se pode dividir por zero'));
    expect(() => divideNumbers(10, 0)).toThrow(/^Não se pode dividir por zero$/);
  });

  it('a classe do erro deve ser "Error"', () => {
    expect(() => divideNumbers(10, 0)).toThrow(Error);
  });
});
