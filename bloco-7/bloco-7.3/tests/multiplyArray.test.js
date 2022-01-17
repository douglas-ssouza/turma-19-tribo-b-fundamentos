const multiplyArray = require('../multiplyArray');

describe('Ao passar um array como parâmtro', () => {
  it('deve retornar o array com os elementos multiplicados por 2', () => {
    expect(multiplyArray([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
  });
});
