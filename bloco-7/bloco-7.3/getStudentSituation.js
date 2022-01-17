const student = {
  name: 'Douglas',
  lastName: 'Souza',
  grades: [7, 8, 0, 8],
  average: null,
}

const allNumeric = (grades) => {
  for (let i = 0; i < grades.length; i += 1){
    if (typeof grades[i] !== 'number') return false;
  }
  return true;
}

const calculateGrade = (grades) => {
  let sum = 0;
  for (let i = 0; i < grades.length; i += 1){
    sum += grades[i];
  }
  return sum / grades.length;
}

const getStudentSituation = (object) => {
  // Deve receber um objeto com nome, sobrenome, array de notas e média (definida como nulo)
  // Deve retornar a mensagem no seguinte formato:
  // <nome> <sobrenom>: Aprovado/Reprovado com média <média>
  // Caso a média seja maior ou igual a 7 Aprovado. Caso contrário retorna Reprovado

  // Deve lançar um erro caso não seja informado um aluno
  // Deve lançar um erro caso informe-se uma quantidade diferente de quatro notas
  // Deve lançar um erro caso alguma das notas não seja um valor numérico

  if (!object) throw new Error('É necessário informar um aluno');

  if (object.grades.length !== 4) throw new Error('Informe 4 notas');

  if (!allNumeric(object.grades)) throw new Error('Notas devem ser valores numéricos');

  object.average = calculateGrade(object.grades);

  return object.average >= 7
    ? `${object.name} ${object.lastName}: Aprovado com média ${object.average}`
    : `${object.name} ${object.lastName}: Reprovado com média ${object.average}`;
}

module.exports = getStudentSituation;