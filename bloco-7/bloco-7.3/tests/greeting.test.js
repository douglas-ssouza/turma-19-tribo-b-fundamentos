const greeting = require('../greeting');

describe('Caso seja passado um parâmetro', () => {
  it('deve retornar uma string', () => {
    expect(typeof greeting('Gean')).toBe('string');
  });

  it('deve retornar a string "Hello, Gean" se passado o parâmetro "Gean"', () => {
    expect(greeting('Gean')).toBe('Hello, Gean');
  });
});

describe('Caso não seja passado um parâmetro', () => {
  it('deve retornar "Hello, World"', () => {
    expect(greeting()).toBe('Hello, World');
  });
});
