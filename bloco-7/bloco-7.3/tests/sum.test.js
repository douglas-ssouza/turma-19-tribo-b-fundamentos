const sum = require('../sum');

test('deve retornar a soma dos dois parâmetros', () => {
  expect(sum(2, 2)).toBe(4);
});
