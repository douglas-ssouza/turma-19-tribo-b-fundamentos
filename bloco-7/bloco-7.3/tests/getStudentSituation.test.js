const getStudentSituation = require('../getStudentSituation');

const student = {
  name: 'Douglas',
  lastName: 'Souza',
  grades: [7, 8, 9, 8],
  average: null,
}

test('Verifica se a função existe', () => {
  expect(getStudentSituation).toBeDefined();
});

describe('Se não for passado um parâmetro', () => {
  it('deve lançar um erro', () => {
    expect(() => { getStudentSituation() }).toThrow();
  });

  it('O erro lançado deve ser "É necessário informar um aluno"', () => {
    expect(() => { getStudentSituation() }).toThrowError(new Error('É necessário informar um aluno'));
  });
});

describe('Se for passado um array com length diferente de 4', () => {
  it('deve lançar um erro', () => {
    expect(() => { getStudentSituation({
      name: 'Douglas',
      lastName: 'Souza',
      grades: [7, 8, 9, 8, 10],
      average: null,
    }) }).toThrow();
  });

  it('A mensagem deve ser "Informe 4 notas"', () => {
    expect(() => { getStudentSituation({
      name: 'Douglas',
      lastName: 'Souza',
      grades: [7, 8, 9, 8, 10],
      average: null,
    }) }).toThrowError(new Error('Informe 4 notas'));
  });
});

describe('Caso uma das notas não seja um valor numérico', () => {
  it('deve lançar um erro', () => {
    expect(() => { getStudentSituation({
      name: 'Douglas',
      lastName: 'Souza',
      grades: [7, 8, 9, '8'],
      average: null,
    }) }).toThrow();
  })
});

describe('Caso seja passado um parametro correto', () => {
  it('Deve retornar a mensagem de aprovado, caso a média seja maior ou igual a 7', () => {
    expect(getStudentSituation(student)).toBe('Douglas Souza: Aprovado com média 8');
  });

  it('Deve retornar a mensagem de reprovado, caso a média seja menor que 7', () => {
    expect(getStudentSituation({
      name: 'Douglas',
      lastName: 'Souza',
      grades: [7, 8, 0, 8],
      average: null,
    })).toBe('Douglas Souza: Reprovado com média 5.75');
  });
})

