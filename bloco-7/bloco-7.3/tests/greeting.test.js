const greeting = require('../greeting');

test('Deve retornar "Hello, Gean" quando o parâmetro passado for "Gean"', () => {
  expect(greeting('Gean')).toBe('Hello, Gean');
});

test('Deve retornar uma string', () => {
  expect(typeof greeting('Gean')).toBe('string');
});

test('Caso o parâmetro name não seja passado deve retornar "Hello, World"', () => {
  expect(greeting()).toBe('Hello, World');
});