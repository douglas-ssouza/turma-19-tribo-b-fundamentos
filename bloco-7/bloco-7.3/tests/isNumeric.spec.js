const isNumeric = require('../isNumeric');

describe('Ao receber um parâmetro numérico', () => {
  it('deve retornar true', () => {
    expect(isNumeric(1)).toBe(true);
  });
});

describe('Ao receber um parâmetro não numérico', () => {
  it('deve retornar false', () => {
    expect(isNumeric('1')).toBe(false);
  })
})


